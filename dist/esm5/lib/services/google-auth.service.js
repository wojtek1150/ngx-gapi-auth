/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GoogleAuth2LoaderService } from './google-auth2-loader.service';
import { GoogleApiLoaderService } from './google-api-loader.service';
var GoogleAuthService = /** @class */ (function () {
    function GoogleAuthService(googleAuth2LoaderService, googleApiLoaderService, ngZone) {
        var _this = this;
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
            function () {
                _this.googleAuth2LoaderService.getAuth().subscribe((/**
                 * @param {?} auth
                 * @return {?}
                 */
                function (auth) {
                    _this.auth = auth;
                    if (_this.auth.currentUser.get().isSignedIn()) {
                        _this.refreshToken();
                    }
                    else {
                        _this._authState.next(null);
                    }
                }));
                interval(20 * 60 * 1000).pipe(// run every 20min
                tap((/**
                 * @return {?}
                 */
                function () { return _this.refreshToken(); }))).subscribe();
            }));
        }
    }
    Object.defineProperty(GoogleAuthService.prototype, "authState", {
        get: /**
         * @return {?}
         */
        function () {
            return this._authState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GoogleAuthService.prototype.signIn = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    GoogleAuthService.prototype.signOut = /**
     * @return {?}
     */
    function () {
        if (!this.googleApiLoaderService.getConfig().isMockedState()) {
            this.auth.signOut();
        }
        this._authState.next(null);
    };
    /**
     * @return {?}
     */
    GoogleAuthService.prototype.refreshToken = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.auth.currentUser.get().reloadAuthResponse().then((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () { return _this._authState.next(_this.getProfile(r.id_token, r.expires_at)); }));
        }));
    };
    /**
     * @private
     * @param {?} token
     * @param {?} expiresAt
     * @return {?}
     */
    GoogleAuthService.prototype.getProfile = /**
     * @private
     * @param {?} token
     * @param {?} expiresAt
     * @return {?}
     */
    function (token, expiresAt) {
        /** @type {?} */
        var p = this.auth.currentUser.get().getBasicProfile();
        return p ? {
            id: p.getId(),
            email: p.getEmail(),
            firstName: p.getGivenName(),
            lastName: p.getFamilyName(),
            avatar: p.getImageUrl(),
            idToken: token,
            tokenExpiresAt: expiresAt
        } : null;
    };
    GoogleAuthService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleAuthService.ctorParameters = function () { return [
        { type: GoogleAuth2LoaderService },
        { type: GoogleApiLoaderService },
        { type: NgZone }
    ]; };
    return GoogleAuthService;
}());
export { GoogleAuthService };
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