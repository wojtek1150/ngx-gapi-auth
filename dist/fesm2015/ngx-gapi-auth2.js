import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, NgModule } from '@angular/core';
import { Observable, of, ReplaySubject, interval } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

class GoogleApiConfig {
    constructor(config) {
        this.clientConfig = config;
        this.mocked = config.e2e;
    }
    getMocked() {
        return this.mocked;
    }
    getClientConfig() {
        return this.clientConfig;
    }
}

class AuthData {
    constructor(id, firstName, lastName, email, avatar, idToken, tokenExpiresAt) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.avatar = avatar;
        this.idToken = idToken;
        this.tokenExpiresAt = tokenExpiresAt;
    }
}

let NG_GAPI_CONFIG = new InjectionToken('ng-gapi.config');
class GoogleApiLoaderService {
    constructor(config) {
        this.gapiUrl = 'https://apis.google.com/js/platform.js';
        this.config = new GoogleApiConfig(config);
        this.loadGapi().subscribe();
    }
    onLoad() {
        return this.loadGapi();
    }
    getConfig() {
        return this.config;
    }
    isMocked() {
        return this.config.getMocked();
    }
    loadGapi() {
        return new Observable((observer) => {
            const node = document.createElement('script');
            node.src = this.gapiUrl;
            node.type = 'text/javascript';
            document.getElementsByTagName('head')[0].appendChild(node);
            node.onload = () => {
                observer.next(true);
                observer.complete();
            };
        });
    }
}
/** @nocollapse */ GoogleApiLoaderService.ɵfac = function GoogleApiLoaderService_Factory(t) { return new (t || GoogleApiLoaderService)(i0.ɵɵinject(NG_GAPI_CONFIG)); };
/** @nocollapse */ GoogleApiLoaderService.ɵprov = i0.ɵɵdefineInjectable({ token: GoogleApiLoaderService, factory: GoogleApiLoaderService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GoogleApiLoaderService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [NG_GAPI_CONFIG]
            }] }]; }, null); })();

/// <reference types="gapi.auth2" />
class GoogleAuth2LoaderService {
    constructor(googleApi) {
        this.googleApi = googleApi;
        this.GoogleAuth = undefined;
        this.googleApi.onLoad().subscribe(() => {
            this.loadGoogleAuth2().subscribe();
        });
    }
    getAuth(newInstance = false) {
        if (!this.GoogleAuth || newInstance) {
            return this.googleApi.onLoad()
                .pipe(mergeMap(() => this.loadGoogleAuth2()));
        }
        return of(this.GoogleAuth);
    }
    loadGoogleAuth2() {
        return new Observable((observer) => {
            gapi.load('auth2', () => {
                gapi.auth2.init(this.googleApi.getConfig().getClientConfig()).then((auth) => {
                    this.GoogleAuth = auth;
                    observer.next(auth);
                    observer.complete();
                }).catch((err) => observer.error(err));
            });
        });
    }
}
/** @nocollapse */ GoogleAuth2LoaderService.ɵfac = function GoogleAuth2LoaderService_Factory(t) { return new (t || GoogleAuth2LoaderService)(i0.ɵɵinject(GoogleApiLoaderService)); };
/** @nocollapse */ GoogleAuth2LoaderService.ɵprov = i0.ɵɵdefineInjectable({ token: GoogleAuth2LoaderService, factory: GoogleAuth2LoaderService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GoogleAuth2LoaderService, [{
        type: Injectable
    }], function () { return [{ type: GoogleApiLoaderService }]; }, null); })();

class GoogleAuthService {
    constructor(googleAuth2LoaderService, googleApiLoaderService, ngZone) {
        this.googleAuth2LoaderService = googleAuth2LoaderService;
        this.googleApiLoaderService = googleApiLoaderService;
        this.ngZone = ngZone;
        this._authState = new ReplaySubject(1);
        this._loginState = new ReplaySubject(1);
        this.SIGN_IN_EXPIRE_KEY = 'loginExpirationDate';
        if (this.googleApiLoaderService.isMocked()) {
            this.signIn();
        }
        else {
            this.googleApiLoaderService.onLoad().subscribe(() => {
                this.googleAuth2LoaderService.getAuth().subscribe(auth => this.authLoaded(auth), () => this.removeState());
                interval(20 * 60 * 1000).pipe(// run every 20min
                tap(() => this.refreshToken())).subscribe();
            });
        }
    }
    get authState() {
        return this._authState.asObservable();
    }
    get loginState() {
        return this._loginState.asObservable();
    }
    signIn() {
        if (this.googleApiLoaderService.isMocked()) {
            this._loginState.next(JSON.parse(localStorage.getItem('user')));
            this._authState.next(JSON.parse(localStorage.getItem('user')));
        }
        else {
            const now = new Date();
            const expirationDate = this.setTime(now, null, now.getMinutes() + 5);
            localStorage.setItem(this.SIGN_IN_EXPIRE_KEY, expirationDate.toISOString());
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            this.auth.signIn({
                prompt: 'select_account',
                ux_mode: isSafari ? 'popup' : 'redirect',
            }).then(() => this.fetchLoginData());
        }
    }
    signOut() {
        if (!this.googleApiLoaderService.isMocked()) {
            this.auth.signOut();
        }
        this.removeState();
    }
    fetchLoginData() {
        return this.auth.currentUser.get().reloadAuthResponse().then(r => {
            this.ngZone.run(() => {
                this._loginState.next(this.getProfile(r.id_token, r.expires_at));
                this._authState.next(this.getProfile(r.id_token, r.expires_at));
            });
        });
    }
    refreshToken() {
        return this.auth.currentUser.get().reloadAuthResponse().then(r => {
            this.ngZone.run(() => this._authState.next(this.getProfile(r.id_token, r.expires_at)));
        });
    }
    authLoaded(auth) {
        this.auth = auth;
        if (this.auth.currentUser.get().isSignedIn()) {
            this.fetchLoginData();
            localStorage.removeItem(this.SIGN_IN_EXPIRE_KEY);
        }
        else {
            const signInDateExpireDate = new Date(localStorage.getItem(this.SIGN_IN_EXPIRE_KEY));
            if (signInDateExpireDate > new Date()) {
                this._loginState.next({ type: 'cookiesNotEnabled' });
                this._authState.next(null);
            }
            else {
                this.removeState();
            }
        }
    }
    removeState() {
        this._authState.next(null);
        this._loginState.next(null);
    }
    getProfile(token, expiresAt) {
        const p = this.auth.currentUser.get().getBasicProfile();
        return p ? {
            id: p.getId(),
            email: p.getEmail(),
            firstName: p.getGivenName(),
            lastName: p.getFamilyName(),
            avatar: p.getImageUrl(),
            idToken: token,
            tokenExpiresAt: expiresAt,
        } : null;
    }
    setTime(date, hours, minutes, seconds, milliseconds) {
        const newDate = new Date(date);
        if (typeof hours === 'number') {
            newDate.setHours(hours);
        }
        if (typeof minutes === 'number') {
            newDate.setMinutes(minutes);
        }
        if (typeof seconds === 'number') {
            newDate.setSeconds(seconds);
        }
        if (typeof milliseconds === 'number') {
            newDate.setMilliseconds(milliseconds);
        }
        return newDate;
    }
}
/** @nocollapse */ GoogleAuthService.ɵfac = function GoogleAuthService_Factory(t) { return new (t || GoogleAuthService)(i0.ɵɵinject(GoogleAuth2LoaderService), i0.ɵɵinject(GoogleApiLoaderService), i0.ɵɵinject(i0.NgZone)); };
/** @nocollapse */ GoogleAuthService.ɵprov = i0.ɵɵdefineInjectable({ token: GoogleAuthService, factory: GoogleAuthService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GoogleAuthService, [{
        type: Injectable
    }], function () { return [{ type: GoogleAuth2LoaderService }, { type: GoogleApiLoaderService }, { type: i0.NgZone }]; }, null); })();

class GoogleOauthModule {
    static forRoot(gapiConfigProvider) {
        return {
            ngModule: GoogleOauthModule,
            providers: [
                gapiConfigProvider,
                GoogleApiLoaderService,
                GoogleAuth2LoaderService,
                GoogleAuthService
            ]
        };
    }
}
/** @nocollapse */ GoogleOauthModule.ɵfac = function GoogleOauthModule_Factory(t) { return new (t || GoogleOauthModule)(); };
/** @nocollapse */ GoogleOauthModule.ɵmod = i0.ɵɵdefineNgModule({ type: GoogleOauthModule });
/** @nocollapse */ GoogleOauthModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GoogleOauthModule, { imports: [CommonModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GoogleOauthModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AuthData, GoogleApiConfig, GoogleApiLoaderService, GoogleAuth2LoaderService, GoogleAuthService, GoogleOauthModule, NG_GAPI_CONFIG };
//# sourceMappingURL=ngx-gapi-auth2.js.map
