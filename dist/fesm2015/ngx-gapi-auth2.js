import { InjectionToken, Injectable, Inject, NgZone, NgModule } from '@angular/core';
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
GoogleApiLoaderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleApiLoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NG_GAPI_CONFIG,] }] }
];

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
GoogleAuth2LoaderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleAuth2LoaderService.ctorParameters = () => [
    { type: GoogleApiLoaderService }
];

/// <reference types="gapi.auth2" />
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
GoogleAuthService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleAuthService.ctorParameters = () => [
    { type: GoogleAuth2LoaderService },
    { type: GoogleApiLoaderService },
    { type: NgZone }
];

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
GoogleOauthModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { AuthData, GoogleApiConfig, GoogleApiLoaderService, GoogleAuth2LoaderService, GoogleAuthService, GoogleOauthModule, NG_GAPI_CONFIG };
//# sourceMappingURL=ngx-gapi-auth2.js.map
