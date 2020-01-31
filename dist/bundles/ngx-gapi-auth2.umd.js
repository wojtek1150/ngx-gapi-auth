(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-gapi-auth2', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-gapi-auth2'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, rxjs, operators, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NgGapiClientConfig() { }
    if (false) {
        /**
         * User for mocking auth flow to local storage save
         * @type {?}
         */
        NgGapiClientConfig.prototype.e2e;
        /**
         * The app's client ID, found and created in the Google Developers Console.
         * @type {?}
         */
        NgGapiClientConfig.prototype.client_id;
        /**
         * The domains for which to create sign-in cookies. Either a URI, single_host_origin, or none.
         * Defaults to single_host_origin if unspecified.
         * @type {?|undefined}
         */
        NgGapiClientConfig.prototype.cookie_policy;
        /**
         * The scopes to request, as a space-delimited string. Optional if fetch_basic_profile is not set to false.
         * @type {?|undefined}
         */
        NgGapiClientConfig.prototype.scope;
        /**
         * Fetch users' basic profile information when they sign in. Adds 'profile' and 'email' to the requested scopes. True if unspecified.
         * @type {?|undefined}
         */
        NgGapiClientConfig.prototype.fetch_basic_profile;
        /**
         * The Google Apps domain to which users must belong to sign in. This is susceptible to modification by clients,
         * so be sure to verify the hosted domain property of the returned user. Use GoogleUser.getHostedDomain() on the client,
         * and the hd claim in the ID Token on the server to verify the domain is what you expected.
         * @type {?|undefined}
         */
        NgGapiClientConfig.prototype.hosted_domain;
        /**
         * Used only for OpenID 2.0 client migration. Set to the value of the realm that you are currently using for OpenID 2.0,
         * as described in <a href="https://developers.google.com/accounts/docs/OpenID#openid-connect">OpenID 2.0 (Migration)</a>.
         * @type {?|undefined}
         */
        NgGapiClientConfig.prototype.openid_realm;
        /**
         * The UX mode to use for the sign-in flow.
         * By default, it will open the consent flow in a popup.
         * @type {?|undefined}
         */
        NgGapiClientConfig.prototype.ux_mode;
        /**
         * If using ux_mode='redirect', this parameter allows you to override the default redirect_uri that will be used at the end of the consent flow.
         * The default redirect_uri is the current URL stripped of query parameters and hash fragment.
         * @type {?|undefined}
         */
        NgGapiClientConfig.prototype.redirect_uri;
        /**
         * Describes the surface for a particular version of an API.
         * @type {?}
         */
        NgGapiClientConfig.prototype.discoveryDocs;
    }
    var GoogleApiConfig = /** @class */ (function () {
        function GoogleApiConfig(clientConfig) {
            this.clientConfig = clientConfig;
        }
        /**
         * @return {?}
         */
        GoogleApiConfig.prototype.isMockedState = /**
         * @return {?}
         */
        function () {
            return this.clientConfig.e2e;
        };
        /**
         * @return {?}
         */
        GoogleApiConfig.prototype.getClientConfig = /**
         * @return {?}
         */
        function () {
            return this.clientConfig;
        };
        return GoogleApiConfig;
    }());
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        GoogleApiConfig.prototype.clientConfig;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthUser = /** @class */ (function () {
        function AuthUser(id, firstName, lastName, email, avatar, idToken, tokenExpiresAt) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.avatar = avatar;
            this.idToken = idToken;
            this.tokenExpiresAt = tokenExpiresAt;
        }
        return AuthUser;
    }());
    if (false) {
        /** @type {?} */
        AuthUser.prototype.id;
        /** @type {?} */
        AuthUser.prototype.firstName;
        /** @type {?} */
        AuthUser.prototype.lastName;
        /** @type {?} */
        AuthUser.prototype.email;
        /** @type {?} */
        AuthUser.prototype.avatar;
        /** @type {?} */
        AuthUser.prototype.idToken;
        /** @type {?} */
        AuthUser.prototype.tokenExpiresAt;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NG_GAPI_CONFIG = new core.InjectionToken('ng-gapi.config');
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
            return new rxjs.Observable((/**
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GoogleApiLoaderService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [NG_GAPI_CONFIG,] }] }
        ]; };
        return GoogleApiLoaderService;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                    .pipe(operators.mergeMap((/**
                 * @return {?}
                 */
                function () { return _this.loadGoogleAuth2(); })));
            }
            return rxjs.of(this.GoogleAuth);
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
            return new rxjs.Observable((/**
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GoogleAuth2LoaderService.ctorParameters = function () { return [
            { type: GoogleApiLoaderService }
        ]; };
        return GoogleAuth2LoaderService;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoogleAuthService = /** @class */ (function () {
        function GoogleAuthService(googleAuth2LoaderService, googleApiLoaderService, ngZone) {
            var _this = this;
            this.googleAuth2LoaderService = googleAuth2LoaderService;
            this.googleApiLoaderService = googleApiLoaderService;
            this.ngZone = ngZone;
            this._authState = new rxjs.ReplaySubject(1);
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
                    rxjs.interval(20 * 60 * 1000).pipe(// run every 20min
                    operators.tap((/**
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GoogleAuthService.ctorParameters = function () { return [
            { type: GoogleAuth2LoaderService },
            { type: GoogleApiLoaderService },
            { type: core.NgZone }
        ]; };
        return GoogleAuthService;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule]
                    },] }
        ];
        return GoogleOauthModule;
    }());

    exports.AuthUser = AuthUser;
    exports.GoogleApiConfig = GoogleApiConfig;
    exports.GoogleApiLoaderService = GoogleApiLoaderService;
    exports.GoogleAuth2LoaderService = GoogleAuth2LoaderService;
    exports.GoogleAuthService = GoogleAuthService;
    exports.GoogleOauthModule = GoogleOauthModule;
    exports.NG_GAPI_CONFIG = NG_GAPI_CONFIG;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-gapi-auth2.umd.js.map
