/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleApiLoaderService } from './services/google-api-loader.service';
import { GoogleAuth2LoaderService } from './services/google-auth2-loader.service';
import { GoogleAuthService } from './services/google-auth.service';
var GoogleOauthModule = /** @class */ (function () {
    function GoogleOauthModule() {
    }
    /**
     * @param {?} gapiConfigProvider
     * @return {?}
     */
    GoogleOauthModule.forRoot = /**
     * @param {?} gapiConfigProvider
     * @return {?}
     */
    function (gapiConfigProvider) {
        return {
            ngModule: GoogleOauthModule,
            providers: [
                gapiConfigProvider,
                GoogleApiLoaderService,
                GoogleAuth2LoaderService,
                GoogleAuthService
            ]
        };
    };
    GoogleOauthModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule]
                },] }
    ];
    return GoogleOauthModule;
}());
export { GoogleOauthModule };
//# sourceMappingURL=common-util-google-oauth.module.js.map