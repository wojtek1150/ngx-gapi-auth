/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference types="gapi.auth2" />
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { GoogleApiLoaderService } from './google-api-loader.service';
var GoogleAuth2LoaderService = /** @class */ (function () {
    function GoogleAuth2LoaderService(googleApi) {
        var _this = this;
        this.googleApi = googleApi;
        this.GoogleAuth = undefined;
        this.googleApi.onLoad().subscribe((/**
         * @return {?}
         */
        function () {
            _this.loadGoogleAuth2().subscribe();
        }));
    }
    /**
     * @param {?=} newInstance
     * @return {?}
     */
    GoogleAuth2LoaderService.prototype.getAuth = /**
     * @param {?=} newInstance
     * @return {?}
     */
    function (newInstance) {
        var _this = this;
        if (newInstance === void 0) { newInstance = false; }
        if (!this.GoogleAuth || newInstance) {
            return this.googleApi.onLoad()
                .pipe(mergeMap((/**
             * @return {?}
             */
            function () { return _this.loadGoogleAuth2(); })));
        }
        return of(this.GoogleAuth);
    };
    /**
     * @private
     * @return {?}
     */
    GoogleAuth2LoaderService.prototype.loadGoogleAuth2 = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            gapi.load('auth2', (/**
             * @return {?}
             */
            function () {
                gapi.auth2.init(_this.googleApi.getConfig().getClientConfig()).then((/**
                 * @param {?} auth
                 * @return {?}
                 */
                function (auth) {
                    _this.GoogleAuth = auth;
                    observer.next(auth);
                    observer.complete();
                })).catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return observer.error(err); }));
            }));
        }));
    };
    GoogleAuth2LoaderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleAuth2LoaderService.ctorParameters = function () { return [
        { type: GoogleApiLoaderService }
    ]; };
    return GoogleAuth2LoaderService;
}());
export { GoogleAuth2LoaderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoogleAuth2LoaderService.prototype.GoogleAuth;
    /**
     * @type {?}
     * @private
     */
    GoogleAuth2LoaderService.prototype.googleApi;
}
//# sourceMappingURL=google-auth2-loader.service.js.map