import { InjectionToken, Injectable, Inject, NgZone, NgModule } from '@angular/core';
import { Observable, of, ReplaySubject, interval } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

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
class GoogleApiConfig {
    /**
     * @param {?} clientConfig
     */
    constructor(clientConfig) {
        this.clientConfig = clientConfig;
    }
    /**
     * @return {?}
     */
    isMockedState() {
        return this.clientConfig.e2e;
    }
    /**
     * @return {?}
     */
    getClientConfig() {
        return this.clientConfig;
    }
}
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
class AuthUser {
    /**
     * @param {?} id
     * @param {?} firstName
     * @param {?} lastName
     * @param {?} email
     * @param {?} avatar
     * @param {?} idToken
     * @param {?} tokenExpiresAt
     */
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
let NG_GAPI_CONFIG = new InjectionToken('ng-gapi.config');
class GoogleApiLoaderService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleAuth2LoaderService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleAuthService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleOauthModule {
    /**
     * @param {?} gapiConfigProvider
     * @return {?}
     */
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AuthUser, GoogleApiConfig, GoogleApiLoaderService, GoogleAuth2LoaderService, GoogleAuthService, GoogleOauthModule, NG_GAPI_CONFIG };
//# sourceMappingURL=ngx-gapi-auth2.js.map
