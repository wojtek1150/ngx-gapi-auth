/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function NgGapiClientConfig() { }
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
export class GoogleApiConfig {
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
//# sourceMappingURL=google-api.config.js.map