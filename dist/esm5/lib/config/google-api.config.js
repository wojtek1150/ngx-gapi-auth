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
var GoogleApiConfig = /** @class */ (function () {
    function GoogleApiConfig(config) {
        this.clientConfig = config;
        this.mocked = config.e2e;
    }
    /**
     * @return {?}
     */
    GoogleApiConfig.prototype.getMocked = /**
     * @return {?}
     */
    function () {
        return this.mocked;
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
export { GoogleApiConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFwaS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ2FwaS1hdXRoMi8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZ29vZ2xlLWFwaS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0F5REM7Ozs7OztJQXBEQyxpQ0FBYTs7Ozs7SUFLYix1Q0FBa0I7Ozs7OztJQU1sQiwyQ0FBdUI7Ozs7O0lBS3ZCLG1DQUFlOzs7OztJQUtmLGlEQUE4Qjs7Ozs7OztJQU85QiwyQ0FBdUI7Ozs7OztJQU12QiwwQ0FBc0I7Ozs7OztJQU10QixxQ0FBK0I7Ozs7OztJQU0vQiwwQ0FBc0I7Ozs7O0lBS3RCLDJDQUF3Qjs7QUFHMUI7SUFJRSx5QkFBWSxNQUEwQjtRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVNLG1DQUFTOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUVNLHlDQUFlOzs7SUFBdEI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQzs7Ozs7OztJQWZDLHVDQUEyQzs7Ozs7SUFDM0MsaUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBOZ0dhcGlDbGllbnRDb25maWcge1xuXG4gIC8qKlxuICAgKiBVc2VyIGZvciBtb2NraW5nIGF1dGggZmxvdyB0byBsb2NhbCBzdG9yYWdlIHNhdmVcbiAgICovXG4gIGUyZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGFwcCdzIGNsaWVudCBJRCwgZm91bmQgYW5kIGNyZWF0ZWQgaW4gdGhlIEdvb2dsZSBEZXZlbG9wZXJzIENvbnNvbGUuXG4gICAqL1xuICBjbGllbnRfaWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGRvbWFpbnMgZm9yIHdoaWNoIHRvIGNyZWF0ZSBzaWduLWluIGNvb2tpZXMuIEVpdGhlciBhIFVSSSwgc2luZ2xlX2hvc3Rfb3JpZ2luLCBvciBub25lLlxuICAgKiBEZWZhdWx0cyB0byBzaW5nbGVfaG9zdF9vcmlnaW4gaWYgdW5zcGVjaWZpZWQuXG4gICAqL1xuICBjb29raWVfcG9saWN5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc2NvcGVzIHRvIHJlcXVlc3QsIGFzIGEgc3BhY2UtZGVsaW1pdGVkIHN0cmluZy4gT3B0aW9uYWwgaWYgZmV0Y2hfYmFzaWNfcHJvZmlsZSBpcyBub3Qgc2V0IHRvIGZhbHNlLlxuICAgKi9cbiAgc2NvcGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZldGNoIHVzZXJzJyBiYXNpYyBwcm9maWxlIGluZm9ybWF0aW9uIHdoZW4gdGhleSBzaWduIGluLiBBZGRzICdwcm9maWxlJyBhbmQgJ2VtYWlsJyB0byB0aGUgcmVxdWVzdGVkIHNjb3Blcy4gVHJ1ZSBpZiB1bnNwZWNpZmllZC5cbiAgICovXG4gIGZldGNoX2Jhc2ljX3Byb2ZpbGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgR29vZ2xlIEFwcHMgZG9tYWluIHRvIHdoaWNoIHVzZXJzIG11c3QgYmVsb25nIHRvIHNpZ24gaW4uIFRoaXMgaXMgc3VzY2VwdGlibGUgdG8gbW9kaWZpY2F0aW9uIGJ5IGNsaWVudHMsXG4gICAqIHNvIGJlIHN1cmUgdG8gdmVyaWZ5IHRoZSBob3N0ZWQgZG9tYWluIHByb3BlcnR5IG9mIHRoZSByZXR1cm5lZCB1c2VyLiBVc2UgR29vZ2xlVXNlci5nZXRIb3N0ZWREb21haW4oKSBvbiB0aGUgY2xpZW50LFxuICAgKiBhbmQgdGhlIGhkIGNsYWltIGluIHRoZSBJRCBUb2tlbiBvbiB0aGUgc2VydmVyIHRvIHZlcmlmeSB0aGUgZG9tYWluIGlzIHdoYXQgeW91IGV4cGVjdGVkLlxuICAgKi9cbiAgaG9zdGVkX2RvbWFpbj86IHN0cmluZztcblxuICAvKipcbiAgICogVXNlZCBvbmx5IGZvciBPcGVuSUQgMi4wIGNsaWVudCBtaWdyYXRpb24uIFNldCB0byB0aGUgdmFsdWUgb2YgdGhlIHJlYWxtIHRoYXQgeW91IGFyZSBjdXJyZW50bHkgdXNpbmcgZm9yIE9wZW5JRCAyLjAsXG4gICAqIGFzIGRlc2NyaWJlZCBpbiA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYWNjb3VudHMvZG9jcy9PcGVuSUQjb3BlbmlkLWNvbm5lY3RcIj5PcGVuSUQgMi4wIChNaWdyYXRpb24pPC9hPi5cbiAgICovXG4gIG9wZW5pZF9yZWFsbT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIFVYIG1vZGUgdG8gdXNlIGZvciB0aGUgc2lnbi1pbiBmbG93LlxuICAgKiBCeSBkZWZhdWx0LCBpdCB3aWxsIG9wZW4gdGhlIGNvbnNlbnQgZmxvdyBpbiBhIHBvcHVwLlxuICAgKi9cbiAgdXhfbW9kZT86ICdwb3B1cCcgfCAncmVkaXJlY3QnO1xuXG4gIC8qKlxuICAgKiBJZiB1c2luZyB1eF9tb2RlPSdyZWRpcmVjdCcsIHRoaXMgcGFyYW1ldGVyIGFsbG93cyB5b3UgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgcmVkaXJlY3RfdXJpIHRoYXQgd2lsbCBiZSB1c2VkIGF0IHRoZSBlbmQgb2YgdGhlIGNvbnNlbnQgZmxvdy5cbiAgICogVGhlIGRlZmF1bHQgcmVkaXJlY3RfdXJpIGlzIHRoZSBjdXJyZW50IFVSTCBzdHJpcHBlZCBvZiBxdWVyeSBwYXJhbWV0ZXJzIGFuZCBoYXNoIGZyYWdtZW50LlxuICAgKi9cbiAgcmVkaXJlY3RfdXJpPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgdGhlIHN1cmZhY2UgZm9yIGEgcGFydGljdWxhciB2ZXJzaW9uIG9mIGFuIEFQSS5cbiAgICovXG4gIGRpc2NvdmVyeURvY3M6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlQXBpQ29uZmlnIHtcbiAgcHJvdGVjdGVkIGNsaWVudENvbmZpZzogTmdHYXBpQ2xpZW50Q29uZmlnO1xuICBwcm90ZWN0ZWQgbW9ja2VkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTmdHYXBpQ2xpZW50Q29uZmlnKSB7XG4gICAgdGhpcy5jbGllbnRDb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5tb2NrZWQgPSBjb25maWcuZTJlO1xuICB9XG5cbiAgcHVibGljIGdldE1vY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2NrZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2xpZW50Q29uZmlnKCk6IE5nR2FwaUNsaWVudENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50Q29uZmlnO1xuICB9XG59XG4iXX0=