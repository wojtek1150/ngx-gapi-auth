/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleApiConfig } from '../config/google-api.config';
/** @type {?} */
export let NG_GAPI_CONFIG = new InjectionToken('ng-gapi.config');
export class GoogleApiLoaderService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.gapiUrl = 'https://apis.google.com/js/api.js';
        this.config = new GoogleApiConfig(config);
        this.loadGapi().subscribe();
    }
    /**
     * @return {?}
     */
    onLoad() {
        return this.loadGapi();
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.config;
    }
    /**
     * @private
     * @return {?}
     */
    loadGapi() {
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let node = document.createElement('script');
            node.src = this.gapiUrl;
            node.type = 'text/javascript';
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
            node.onload = (/**
             * @return {?}
             */
            () => {
                observer.next(true);
                observer.complete();
            });
        }));
    }
}
GoogleApiLoaderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleApiLoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NG_GAPI_CONFIG,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoogleApiLoaderService.prototype.gapiUrl;
    /**
     * @type {?}
     * @private
     */
    GoogleApiLoaderService.prototype.config;
}
//# sourceMappingURL=google-api-loader.service.js.map