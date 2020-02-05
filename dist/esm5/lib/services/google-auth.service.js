/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/google-auth.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GoogleAuth2LoaderService } from './google-auth2-loader.service';
import { GoogleApiLoaderService } from './google-api-loader.service';
var GoogleAuthService = /** @class */ (function () {
    function GoogleAuthService(googleAuth2LoaderService, googleApiLoaderService, ngZone) {
        var _this = this;
        this.googleAuth2LoaderService = googleAuth2LoaderService;
        this.googleApiLoaderService = googleApiLoaderService;
        this.ngZone = ngZone;
        this._authState = new ReplaySubject(1);
        if (this.googleApiLoaderService.isMocked()) {
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
                interval(20 * 60 * 1000).pipe(// run every 20min
                tap((/**
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
        if (this.googleApiLoaderService.isMocked()) {
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
        if (!this.googleApiLoaderService.isMocked()) {
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
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleAuthService.ctorParameters = function () { return [
        { type: GoogleAuth2LoaderService },
        { type: GoogleApiLoaderService },
        { type: NgZone }
    ]; };
    return GoogleAuthService;
}());
export { GoogleAuthService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1nYXBpLWF1dGgyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dvb2dsZS1hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJckU7SUFTRSwyQkFDVSx3QkFBa0QsRUFDbEQsc0JBQThDLEVBQzlDLE1BQWM7UUFIeEIsaUJBd0JDO1FBdkJTLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVmhCLGVBQVUsR0FBNEIsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFjakUsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTOzs7WUFBQztnQkFDN0MsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQSxJQUFJO29CQUNwRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFV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Q0FBb0M7Ozs7O0lBT2xDLHFEQUEwRDs7Ozs7SUFDMUQsbURBQXNEOzs7OztJQUN0RCxtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGludGVydmFsLCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuaW1wb3J0IHsgR29vZ2xlQXV0aDJMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtYXV0aDItbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgR29vZ2xlQXBpTG9hZGVyU2VydmljZSB9IGZyb20gJy4vZ29vZ2xlLWFwaS1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoVXNlciB9IGZyb20gJy4uL21vZGVscy9hdXRoJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQXV0aFNlcnZpY2Uge1xuICBwcml2YXRlIF9hdXRoU3RhdGU6IFJlcGxheVN1YmplY3Q8QXV0aFVzZXI+ID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gIHByaXZhdGUgYXV0aDogZ2FwaS5hdXRoMi5Hb29nbGVBdXRoO1xuXG4gIGdldCBhdXRoU3RhdGUoKTogT2JzZXJ2YWJsZTxBdXRoVXNlcj4ge1xuICAgIHJldHVybiB0aGlzLl9hdXRoU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGdvb2dsZUF1dGgyTG9hZGVyU2VydmljZTogR29vZ2xlQXV0aDJMb2FkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZ29vZ2xlQXBpTG9hZGVyU2VydmljZTogR29vZ2xlQXBpTG9hZGVyU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXG4gICkge1xuXG5cbiAgICBpZiAodGhpcy5nb29nbGVBcGlMb2FkZXJTZXJ2aWNlLmlzTW9ja2VkKCkpIHtcbiAgICAgIHRoaXMuc2lnbkluKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ29vZ2xlQXBpTG9hZGVyU2VydmljZS5vbkxvYWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmdvb2dsZUF1dGgyTG9hZGVyU2VydmljZS5nZXRBdXRoKCkuc3Vic2NyaWJlKGF1dGggPT4ge1xuICAgICAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgICAgICAgaWYgKHRoaXMuYXV0aC5jdXJyZW50VXNlci5nZXQoKS5pc1NpZ25lZEluKCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRva2VuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2F1dGhTdGF0ZS5uZXh0KG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGludGVydmFsKDIwICogNjAgKiAxMDAwKS5waXBlKCAgLy8gcnVuIGV2ZXJ5IDIwbWluXG4gICAgICAgICAgdGFwKCgpID0+IHRoaXMucmVmcmVzaFRva2VuKCkpXG4gICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2lnbkluKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdvb2dsZUFwaUxvYWRlclNlcnZpY2UuaXNNb2NrZWQoKSkge1xuICAgICAgdGhpcy5fYXV0aFN0YXRlLm5leHQoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0aC5zaWduSW4oe1xuICAgICAgICBwcm9tcHQ6ICdzZWxlY3RfYWNjb3VudCcsXG4gICAgICAgIHV4X21vZGU6ICdyZWRpcmVjdCcsXG4gICAgICAgIHJlZGlyZWN0X3VyaTogd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNpZ25PdXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmdvb2dsZUFwaUxvYWRlclNlcnZpY2UuaXNNb2NrZWQoKSkge1xuICAgICAgdGhpcy5hdXRoLnNpZ25PdXQoKTtcbiAgICB9XG4gICAgdGhpcy5fYXV0aFN0YXRlLm5leHQobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaFRva2VuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmF1dGguY3VycmVudFVzZXIuZ2V0KCkucmVsb2FkQXV0aFJlc3BvbnNlKCkudGhlbihyID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLl9hdXRoU3RhdGUubmV4dCh0aGlzLmdldFByb2ZpbGUoci5pZF90b2tlbiwgci5leHBpcmVzX2F0KSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9maWxlKHRva2VuOiBzdHJpbmcsIGV4cGlyZXNBdDogbnVtYmVyKTogQXV0aFVzZXIge1xuICAgIGNvbnN0IHAgPSB0aGlzLmF1dGguY3VycmVudFVzZXIuZ2V0KCkuZ2V0QmFzaWNQcm9maWxlKCk7XG4gICAgcmV0dXJuIHAgPyB7XG4gICAgICBpZDogcC5nZXRJZCgpLFxuICAgICAgZW1haWw6IHAuZ2V0RW1haWwoKSxcbiAgICAgIGZpcnN0TmFtZTogcC5nZXRHaXZlbk5hbWUoKSxcbiAgICAgIGxhc3ROYW1lOiBwLmdldEZhbWlseU5hbWUoKSxcbiAgICAgIGF2YXRhcjogcC5nZXRJbWFnZVVybCgpLFxuICAgICAgaWRUb2tlbjogdG9rZW4sXG4gICAgICB0b2tlbkV4cGlyZXNBdDogZXhwaXJlc0F0XG4gICAgfSA6IG51bGw7XG4gIH1cbn1cbiJdfQ==