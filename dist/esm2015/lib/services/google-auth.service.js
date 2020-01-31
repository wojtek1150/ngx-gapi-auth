/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GoogleAuth2LoaderService } from './google-auth2-loader.service';
import { GoogleApiLoaderService } from './google-api-loader.service';
export class GoogleAuthService {
    /**
     * @param {?} googleAuth2LoaderService
     * @param {?} googleApiLoaderService
     * @param {?} ngZone
     */
    constructor(googleAuth2LoaderService, googleApiLoaderService, ngZone) {
        this.googleAuth2LoaderService = googleAuth2LoaderService;
        this.googleApiLoaderService = googleApiLoaderService;
        this.ngZone = ngZone;
        this._authState = new ReplaySubject(1);
        if (this.googleApiLoaderService.getConfig().isMockedState()) {
            this.signIn();
        }
        else {
            this.googleApiLoaderService.onLoad().subscribe((/**
             * @return {?}
             */
            () => {
                this.googleAuth2LoaderService.getAuth().subscribe((/**
                 * @param {?} auth
                 * @return {?}
                 */
                auth => {
                    this.auth = auth;
                    if (this.auth.currentUser.get().isSignedIn()) {
                        this.refreshToken();
                    }
                    else {
                        this._authState.next(null);
                    }
                }));
                interval(20 * 60 * 1000).pipe(// run every 20min
                tap((/**
                 * @return {?}
                 */
                () => this.refreshToken()))).subscribe();
            }));
        }
    }
    /**
     * @return {?}
     */
    get authState() {
        return this._authState.asObservable();
    }
    /**
     * @return {?}
     */
    signIn() {
        if (this.googleApiLoaderService.getConfig().isMockedState()) {
            this._authState.next(JSON.parse(localStorage.getItem('user')));
        }
        else {
            this.auth.signIn({
                prompt: 'select_account',
                ux_mode: 'redirect',
                redirect_uri: window.location.origin
            });
        }
    }
    /**
     * @return {?}
     */
    signOut() {
        if (!this.googleApiLoaderService.getConfig().isMockedState()) {
            this.auth.signOut();
        }
        this._authState.next(null);
    }
    /**
     * @return {?}
     */
    refreshToken() {
        return this.auth.currentUser.get().reloadAuthResponse().then((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => this._authState.next(this.getProfile(r.id_token, r.expires_at))));
        }));
    }
    /**
     * @private
     * @param {?} token
     * @param {?} expiresAt
     * @return {?}
     */
    getProfile(token, expiresAt) {
        /** @type {?} */
        const p = this.auth.currentUser.get().getBasicProfile();
        return p ? {
            id: p.getId(),
            email: p.getEmail(),
            firstName: p.getGivenName(),
            lastName: p.getFamilyName(),
            avatar: p.getImageUrl(),
            idToken: token,
            tokenExpiresAt: expiresAt
        } : null;
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoogleAuthService.prototype._authState;
    /**
     * @type {?}
     * @private
     */
    GoogleAuthService.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    GoogleAuthService.prototype.googleAuth2LoaderService;
    /**
     * @type {?}
     * @private
     */
    GoogleAuthService.prototype.googleApiLoaderService;
    /**
     * @type {?}
     * @private
     */
    GoogleAuthService.prototype.ngZone;
}
//# sourceMappingURL=google-auth.service.js.map