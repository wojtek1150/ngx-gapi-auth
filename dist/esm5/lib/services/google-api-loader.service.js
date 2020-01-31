/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleApiConfig } from '../config/google-api.config';
/** @type {?} */
export var NG_GAPI_CONFIG = new InjectionToken('ng-gapi.config');
var GoogleApiLoaderService = /** @class */ (function () {
    function GoogleApiLoaderService(config) {
        this.gapiUrl = 'https://apis.google.com/js/api.js';
        this.config = new GoogleApiConfig(config);
        this.loadGapi().subscribe();
    }
    /**
     * @return {?}
     */
    GoogleApiLoaderService.prototype.onLoad = /**
     * @return {?}
     */
    function () {
        return this.loadGapi();
    };
    /**
     * @return {?}
     */
    GoogleApiLoaderService.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.config;
    };
    /**
     * @private
     * @return {?}
     */
    GoogleApiLoaderService.prototype.loadGapi = /**
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
            /** @type {?} */
            var node = document.createElement('script');
            node.src = _this.gapiUrl;
            node.type = 'text/javascript';
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
            node.onload = (/**
             * @return {?}
             */
            function () {
                observer.next(true);
                observer.complete();
            });
        }));
    };
    GoogleApiLoaderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleApiLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NG_GAPI_CONFIG,] }] }
    ]; };
    return GoogleApiLoaderService;
}());
export { GoogleApiLoaderService };
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