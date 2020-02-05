/**
 * @fileoverview added by tsickle
 * Generated from: lib/config/google-api.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} config
     */
    constructor(config) {
        this.clientConfig = config;
        this.mocked = config.e2e;
    }
    /**
     * @return {?}
     */
    getMocked() {
        return this.mocked;
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
    /**
     * @type {?}
     * @protected
     */
    GoogleApiConfig.prototype.mocked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFwaS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ2FwaS1hdXRoMi8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZ29vZ2xlLWFwaS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0F5REM7Ozs7OztJQXBEQyxpQ0FBYTs7Ozs7SUFLYix1Q0FBa0I7Ozs7OztJQU1sQiwyQ0FBdUI7Ozs7O0lBS3ZCLG1DQUFlOzs7OztJQUtmLGlEQUE4Qjs7Ozs7OztJQU85QiwyQ0FBdUI7Ozs7OztJQU12QiwwQ0FBc0I7Ozs7OztJQU10QixxQ0FBK0I7Ozs7OztJQU0vQiwwQ0FBc0I7Ozs7O0lBS3RCLDJDQUF3Qjs7QUFHMUIsTUFBTSxPQUFPLGVBQWU7Ozs7SUFJMUIsWUFBWSxNQUEwQjtRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVNLFNBQVM7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUVNLGVBQWU7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Q0FDRjs7Ozs7O0lBZkMsdUNBQTJDOzs7OztJQUMzQyxpQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIE5nR2FwaUNsaWVudENvbmZpZyB7XG5cbiAgLyoqXG4gICAqIFVzZXIgZm9yIG1vY2tpbmcgYXV0aCBmbG93IHRvIGxvY2FsIHN0b3JhZ2Ugc2F2ZVxuICAgKi9cbiAgZTJlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgYXBwJ3MgY2xpZW50IElELCBmb3VuZCBhbmQgY3JlYXRlZCBpbiB0aGUgR29vZ2xlIERldmVsb3BlcnMgQ29uc29sZS5cbiAgICovXG4gIGNsaWVudF9pZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZG9tYWlucyBmb3Igd2hpY2ggdG8gY3JlYXRlIHNpZ24taW4gY29va2llcy4gRWl0aGVyIGEgVVJJLCBzaW5nbGVfaG9zdF9vcmlnaW4sIG9yIG5vbmUuXG4gICAqIERlZmF1bHRzIHRvIHNpbmdsZV9ob3N0X29yaWdpbiBpZiB1bnNwZWNpZmllZC5cbiAgICovXG4gIGNvb2tpZV9wb2xpY3k/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzY29wZXMgdG8gcmVxdWVzdCwgYXMgYSBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nLiBPcHRpb25hbCBpZiBmZXRjaF9iYXNpY19wcm9maWxlIGlzIG5vdCBzZXQgdG8gZmFsc2UuXG4gICAqL1xuICBzY29wZT86IHN0cmluZztcblxuICAvKipcbiAgICogRmV0Y2ggdXNlcnMnIGJhc2ljIHByb2ZpbGUgaW5mb3JtYXRpb24gd2hlbiB0aGV5IHNpZ24gaW4uIEFkZHMgJ3Byb2ZpbGUnIGFuZCAnZW1haWwnIHRvIHRoZSByZXF1ZXN0ZWQgc2NvcGVzLiBUcnVlIGlmIHVuc3BlY2lmaWVkLlxuICAgKi9cbiAgZmV0Y2hfYmFzaWNfcHJvZmlsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBHb29nbGUgQXBwcyBkb21haW4gdG8gd2hpY2ggdXNlcnMgbXVzdCBiZWxvbmcgdG8gc2lnbiBpbi4gVGhpcyBpcyBzdXNjZXB0aWJsZSB0byBtb2RpZmljYXRpb24gYnkgY2xpZW50cyxcbiAgICogc28gYmUgc3VyZSB0byB2ZXJpZnkgdGhlIGhvc3RlZCBkb21haW4gcHJvcGVydHkgb2YgdGhlIHJldHVybmVkIHVzZXIuIFVzZSBHb29nbGVVc2VyLmdldEhvc3RlZERvbWFpbigpIG9uIHRoZSBjbGllbnQsXG4gICAqIGFuZCB0aGUgaGQgY2xhaW0gaW4gdGhlIElEIFRva2VuIG9uIHRoZSBzZXJ2ZXIgdG8gdmVyaWZ5IHRoZSBkb21haW4gaXMgd2hhdCB5b3UgZXhwZWN0ZWQuXG4gICAqL1xuICBob3N0ZWRfZG9tYWluPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBVc2VkIG9ubHkgZm9yIE9wZW5JRCAyLjAgY2xpZW50IG1pZ3JhdGlvbi4gU2V0IHRvIHRoZSB2YWx1ZSBvZiB0aGUgcmVhbG0gdGhhdCB5b3UgYXJlIGN1cnJlbnRseSB1c2luZyBmb3IgT3BlbklEIDIuMCxcbiAgICogYXMgZGVzY3JpYmVkIGluIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hY2NvdW50cy9kb2NzL09wZW5JRCNvcGVuaWQtY29ubmVjdFwiPk9wZW5JRCAyLjAgKE1pZ3JhdGlvbik8L2E+LlxuICAgKi9cbiAgb3BlbmlkX3JlYWxtPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgVVggbW9kZSB0byB1c2UgZm9yIHRoZSBzaWduLWluIGZsb3cuXG4gICAqIEJ5IGRlZmF1bHQsIGl0IHdpbGwgb3BlbiB0aGUgY29uc2VudCBmbG93IGluIGEgcG9wdXAuXG4gICAqL1xuICB1eF9tb2RlPzogJ3BvcHVwJyB8ICdyZWRpcmVjdCc7XG5cbiAgLyoqXG4gICAqIElmIHVzaW5nIHV4X21vZGU9J3JlZGlyZWN0JywgdGhpcyBwYXJhbWV0ZXIgYWxsb3dzIHlvdSB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCByZWRpcmVjdF91cmkgdGhhdCB3aWxsIGJlIHVzZWQgYXQgdGhlIGVuZCBvZiB0aGUgY29uc2VudCBmbG93LlxuICAgKiBUaGUgZGVmYXVsdCByZWRpcmVjdF91cmkgaXMgdGhlIGN1cnJlbnQgVVJMIHN0cmlwcGVkIG9mIHF1ZXJ5IHBhcmFtZXRlcnMgYW5kIGhhc2ggZnJhZ21lbnQuXG4gICAqL1xuICByZWRpcmVjdF91cmk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlc2NyaWJlcyB0aGUgc3VyZmFjZSBmb3IgYSBwYXJ0aWN1bGFyIHZlcnNpb24gb2YgYW4gQVBJLlxuICAgKi9cbiAgZGlzY292ZXJ5RG9jczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVBcGlDb25maWcge1xuICBwcm90ZWN0ZWQgY2xpZW50Q29uZmlnOiBOZ0dhcGlDbGllbnRDb25maWc7XG4gIHByb3RlY3RlZCBtb2NrZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBOZ0dhcGlDbGllbnRDb25maWcpIHtcbiAgICB0aGlzLmNsaWVudENvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLm1vY2tlZCA9IGNvbmZpZy5lMmU7XG4gIH1cblxuICBwdWJsaWMgZ2V0TW9ja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vY2tlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDbGllbnRDb25maWcoKTogTmdHYXBpQ2xpZW50Q29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnRDb25maWc7XG4gIH1cbn1cbiJdfQ==