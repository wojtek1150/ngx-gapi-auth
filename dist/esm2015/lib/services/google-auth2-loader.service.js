/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference types="gapi.auth2" />
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { GoogleApiLoaderService } from './google-api-loader.service';
export class GoogleAuth2LoaderService {
    /**
     * @param {?} googleApi
     */
    constructor(googleApi) {
        this.googleApi = googleApi;
        this.GoogleAuth = undefined;
        this.googleApi.onLoad().subscribe((/**
         * @return {?}
         */
        () => {
            this.loadGoogleAuth2().subscribe();
        }));
    }
    /**
     * @param {?=} newInstance
     * @return {?}
     */
    getAuth(newInstance = false) {
        if (!this.GoogleAuth || newInstance) {
            return this.googleApi.onLoad()
                .pipe(mergeMap((/**
             * @return {?}
             */
            () => this.loadGoogleAuth2())));
        }
        return of(this.GoogleAuth);
    }
    /**
     * @private
     * @return {?}
     */
    loadGoogleAuth2() {
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            gapi.load('auth2', (/**
             * @return {?}
             */
            () => {
                gapi.auth2.init(this.googleApi.getConfig().getClientConfig()).then((/**
                 * @param {?} auth
                 * @return {?}
                 */
                (auth) => {
                    this.GoogleAuth = auth;
                    observer.next(auth);
                    observer.complete();
                })).catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => observer.error(err)));
            }));
        }));
    }
}
GoogleAuth2LoaderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleAuth2LoaderService.ctorParameters = () => [
    { type: GoogleApiLoaderService }
];
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