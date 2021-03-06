(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-gapi-auth2', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-gapi-auth2'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, i0, rxjs, operators, common) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var GoogleApiConfig = /** @class */ (function () {
        function GoogleApiConfig(config) {
            this.clientConfig = config;
            this.mocked = config.e2e;
        }
        GoogleApiConfig.prototype.getMocked = function () {
            return this.mocked;
        };
        GoogleApiConfig.prototype.getClientConfig = function () {
            return this.clientConfig;
        };
        return GoogleApiConfig;
    }());

    var AuthData = /** @class */ (function () {
        function AuthData(id, firstName, lastName, email, avatar, idToken, tokenExpiresAt) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.avatar = avatar;
            this.idToken = idToken;
            this.tokenExpiresAt = tokenExpiresAt;
        }
        return AuthData;
    }());

    var NG_GAPI_CONFIG = new i0.InjectionToken('ng-gapi.config');
    var GoogleApiLoaderService = /** @class */ (function () {
        function GoogleApiLoaderService(config) {
            this.gapiUrl = 'https://apis.google.com/js/platform.js';
            this.config = new GoogleApiConfig(config);
            this.loadGapi().subscribe();
        }
        GoogleApiLoaderService.prototype.onLoad = function () {
            return this.loadGapi();
        };
        GoogleApiLoaderService.prototype.getConfig = function () {
            return this.config;
        };
        GoogleApiLoaderService.prototype.isMocked = function () {
            return this.config.getMocked();
        };
        GoogleApiLoaderService.prototype.loadGapi = function () {
            var _this = this;
            return new rxjs.Observable(function (observer) {
                var node = document.createElement('script');
                node.src = _this.gapiUrl;
                node.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(node);
                node.onload = function () {
                    observer.next(true);
                    observer.complete();
                };
            });
        };
        return GoogleApiLoaderService;
    }());
    /** @nocollapse */ GoogleApiLoaderService.ɵfac = function GoogleApiLoaderService_Factory(t) { return new (t || GoogleApiLoaderService)(i0__namespace.ɵɵinject(NG_GAPI_CONFIG)); };
    /** @nocollapse */ GoogleApiLoaderService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: GoogleApiLoaderService, factory: GoogleApiLoaderService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GoogleApiLoaderService, [{
                type: i0.Injectable
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [NG_GAPI_CONFIG]
                        }] }];
        }, null);
    })();

    /// <reference types="gapi.auth2" />
    var GoogleAuth2LoaderService = /** @class */ (function () {
        function GoogleAuth2LoaderService(googleApi) {
            var _this = this;
            this.googleApi = googleApi;
            this.GoogleAuth = undefined;
            this.googleApi.onLoad().subscribe(function () {
                _this.loadGoogleAuth2().subscribe();
            });
        }
        GoogleAuth2LoaderService.prototype.getAuth = function (newInstance) {
            var _this = this;
            if (newInstance === void 0) { newInstance = false; }
            if (!this.GoogleAuth || newInstance) {
                return this.googleApi.onLoad()
                    .pipe(operators.mergeMap(function () { return _this.loadGoogleAuth2(); }));
            }
            return rxjs.of(this.GoogleAuth);
        };
        GoogleAuth2LoaderService.prototype.loadGoogleAuth2 = function () {
            var _this = this;
            return new rxjs.Observable(function (observer) {
                gapi.load('auth2', function () {
                    gapi.auth2.init(_this.googleApi.getConfig().getClientConfig()).then(function (auth) {
                        _this.GoogleAuth = auth;
                        observer.next(auth);
                        observer.complete();
                    }).catch(function (err) { return observer.error(err); });
                });
            });
        };
        return GoogleAuth2LoaderService;
    }());
    /** @nocollapse */ GoogleAuth2LoaderService.ɵfac = function GoogleAuth2LoaderService_Factory(t) { return new (t || GoogleAuth2LoaderService)(i0__namespace.ɵɵinject(GoogleApiLoaderService)); };
    /** @nocollapse */ GoogleAuth2LoaderService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: GoogleAuth2LoaderService, factory: GoogleAuth2LoaderService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GoogleAuth2LoaderService, [{
                type: i0.Injectable
            }], function () { return [{ type: GoogleApiLoaderService }]; }, null);
    })();

    var GoogleAuthService = /** @class */ (function () {
        function GoogleAuthService(googleAuth2LoaderService, googleApiLoaderService, ngZone) {
            var _this = this;
            this.googleAuth2LoaderService = googleAuth2LoaderService;
            this.googleApiLoaderService = googleApiLoaderService;
            this.ngZone = ngZone;
            this._authState = new rxjs.ReplaySubject(1);
            this._loginState = new rxjs.ReplaySubject(1);
            this.SIGN_IN_EXPIRE_KEY = 'loginExpirationDate';
            if (this.googleApiLoaderService.isMocked()) {
                this.signIn();
            }
            else {
                this.googleApiLoaderService.onLoad().subscribe(function () {
                    _this.googleAuth2LoaderService.getAuth().subscribe(function (auth) { return _this.authLoaded(auth); }, function () { return _this.removeState(); });
                    rxjs.interval(20 * 60 * 1000).pipe(// run every 20min
                    operators.tap(function () { return _this.refreshToken(); })).subscribe();
                });
            }
        }
        Object.defineProperty(GoogleAuthService.prototype, "authState", {
            get: function () {
                return this._authState.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GoogleAuthService.prototype, "loginState", {
            get: function () {
                return this._loginState.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        GoogleAuthService.prototype.signIn = function () {
            var _this = this;
            if (this.googleApiLoaderService.isMocked()) {
                this._loginState.next(JSON.parse(localStorage.getItem('user')));
                this._authState.next(JSON.parse(localStorage.getItem('user')));
            }
            else {
                var now = new Date();
                var expirationDate = this.setTime(now, null, now.getMinutes() + 5);
                localStorage.setItem(this.SIGN_IN_EXPIRE_KEY, expirationDate.toISOString());
                var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                this.auth.signIn({
                    prompt: 'select_account',
                    ux_mode: isSafari ? 'popup' : 'redirect',
                }).then(function () { return _this.fetchLoginData(); });
            }
        };
        GoogleAuthService.prototype.signOut = function () {
            if (!this.googleApiLoaderService.isMocked()) {
                this.auth.signOut();
            }
            this.removeState();
        };
        GoogleAuthService.prototype.fetchLoginData = function () {
            var _this = this;
            return this.auth.currentUser.get().reloadAuthResponse().then(function (r) {
                _this.ngZone.run(function () {
                    _this._loginState.next(_this.getProfile(r.id_token, r.expires_at));
                    _this._authState.next(_this.getProfile(r.id_token, r.expires_at));
                });
            });
        };
        GoogleAuthService.prototype.refreshToken = function () {
            var _this = this;
            return this.auth.currentUser.get().reloadAuthResponse().then(function (r) {
                _this.ngZone.run(function () { return _this._authState.next(_this.getProfile(r.id_token, r.expires_at)); });
            });
        };
        GoogleAuthService.prototype.authLoaded = function (auth) {
            this.auth = auth;
            if (this.auth.currentUser.get().isSignedIn()) {
                this.fetchLoginData();
                localStorage.removeItem(this.SIGN_IN_EXPIRE_KEY);
            }
            else {
                var signInDateExpireDate = new Date(localStorage.getItem(this.SIGN_IN_EXPIRE_KEY));
                if (signInDateExpireDate > new Date()) {
                    this._loginState.next({ type: 'cookiesNotEnabled' });
                    this._authState.next(null);
                }
                else {
                    this.removeState();
                }
            }
        };
        GoogleAuthService.prototype.removeState = function () {
            this._authState.next(null);
            this._loginState.next(null);
        };
        GoogleAuthService.prototype.getProfile = function (token, expiresAt) {
            var p = this.auth.currentUser.get().getBasicProfile();
            return p ? {
                id: p.getId(),
                email: p.getEmail(),
                firstName: p.getGivenName(),
                lastName: p.getFamilyName(),
                avatar: p.getImageUrl(),
                idToken: token,
                tokenExpiresAt: expiresAt,
            } : null;
        };
        GoogleAuthService.prototype.setTime = function (date, hours, minutes, seconds, milliseconds) {
            var newDate = new Date(date);
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
        };
        return GoogleAuthService;
    }());
    /** @nocollapse */ GoogleAuthService.ɵfac = function GoogleAuthService_Factory(t) { return new (t || GoogleAuthService)(i0__namespace.ɵɵinject(GoogleAuth2LoaderService), i0__namespace.ɵɵinject(GoogleApiLoaderService), i0__namespace.ɵɵinject(i0__namespace.NgZone)); };
    /** @nocollapse */ GoogleAuthService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: GoogleAuthService, factory: GoogleAuthService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GoogleAuthService, [{
                type: i0.Injectable
            }], function () { return [{ type: GoogleAuth2LoaderService }, { type: GoogleApiLoaderService }, { type: i0__namespace.NgZone }]; }, null);
    })();

    var GoogleOauthModule = /** @class */ (function () {
        function GoogleOauthModule() {
        }
        GoogleOauthModule.forRoot = function (gapiConfigProvider) {
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
        return GoogleOauthModule;
    }());
    /** @nocollapse */ GoogleOauthModule.ɵfac = function GoogleOauthModule_Factory(t) { return new (t || GoogleOauthModule)(); };
    /** @nocollapse */ GoogleOauthModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: GoogleOauthModule });
    /** @nocollapse */ GoogleOauthModule.ɵinj = i0__namespace.ɵɵdefineInjector({ imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(GoogleOauthModule, { imports: [common.CommonModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GoogleOauthModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AuthData = AuthData;
    exports.GoogleApiConfig = GoogleApiConfig;
    exports.GoogleApiLoaderService = GoogleApiLoaderService;
    exports.GoogleAuth2LoaderService = GoogleAuth2LoaderService;
    exports.GoogleAuthService = GoogleAuthService;
    exports.GoogleOauthModule = GoogleOauthModule;
    exports.NG_GAPI_CONFIG = NG_GAPI_CONFIG;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-gapi-auth2.umd.js.map
