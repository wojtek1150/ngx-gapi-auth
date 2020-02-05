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
export class GoogleAuthService {
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
        if (this.googleApiLoaderService.isMocked()) {
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
    }
    /**
     * @return {?}
     */
    signOut() {
        if (!this.googleApiLoaderService.isMocked()) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1nYXBpLWF1dGgyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dvb2dsZS1hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLckUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBUTVCLFlBQ1Usd0JBQWtELEVBQ2xELHNCQUE4QyxFQUM5QyxNQUFjO1FBRmQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFWaEIsZUFBVSxHQUE0QixJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQWNqRSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjthQUFNO1lBQ0wsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVM7Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3ZELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFO3dCQUM1QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7cUJBQ3JCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUM1QjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUcsa0JBQWtCO2dCQUNoRCxHQUFHOzs7Z0JBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFDLENBQy9CLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUE1QkQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7SUE0Qk0sTUFBTTtRQUNYLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNmLE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixZQUFZLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2FBQ3JDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDekYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRU8sVUFBVSxDQUFDLEtBQWEsRUFBRSxTQUFpQjs7Y0FDM0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsRUFBRTtRQUN2RCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNiLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQzNCLFFBQVEsRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQzNCLE1BQU0sRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQ3ZCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsY0FBYyxFQUFFLFNBQVM7U0FDMUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7O1lBdkVGLFVBQVU7Ozs7WUFMRix3QkFBd0I7WUFDeEIsc0JBQXNCO1lBTlYsTUFBTTs7Ozs7OztJQVl6Qix1Q0FBbUU7Ozs7O0lBQ25FLGlDQUFvQzs7Ozs7SUFPbEMscURBQTBEOzs7OztJQUMxRCxtREFBc0Q7Ozs7O0lBQ3RELG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaW50ZXJ2YWwsIE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5pbXBvcnQgeyBHb29nbGVBdXRoMkxvYWRlclNlcnZpY2UgfSBmcm9tICcuL2dvb2dsZS1hdXRoMi1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBHb29nbGVBcGlMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtYXBpLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGgnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgX2F1dGhTdGF0ZTogUmVwbGF5U3ViamVjdDxBdXRoVXNlcj4gPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcbiAgcHJpdmF0ZSBhdXRoOiBnYXBpLmF1dGgyLkdvb2dsZUF1dGg7XG5cbiAgZ2V0IGF1dGhTdGF0ZSgpOiBPYnNlcnZhYmxlPEF1dGhVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhTdGF0ZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZ29vZ2xlQXV0aDJMb2FkZXJTZXJ2aWNlOiBHb29nbGVBdXRoMkxvYWRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnb29nbGVBcGlMb2FkZXJTZXJ2aWNlOiBHb29nbGVBcGlMb2FkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG5cblxuICAgIGlmICh0aGlzLmdvb2dsZUFwaUxvYWRlclNlcnZpY2UuaXNNb2NrZWQoKSkge1xuICAgICAgdGhpcy5zaWduSW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nb29nbGVBcGlMb2FkZXJTZXJ2aWNlLm9uTG9hZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZ29vZ2xlQXV0aDJMb2FkZXJTZXJ2aWNlLmdldEF1dGgoKS5zdWJzY3JpYmUoYXV0aCA9PiB7XG4gICAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICAgICAgICBpZiAodGhpcy5hdXRoLmN1cnJlbnRVc2VyLmdldCgpLmlzU2lnbmVkSW4oKSkge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW4oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYXV0aFN0YXRlLm5leHQobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW50ZXJ2YWwoMjAgKiA2MCAqIDEwMDApLnBpcGUoICAvLyBydW4gZXZlcnkgMjBtaW5cbiAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5yZWZyZXNoVG9rZW4oKSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaWduSW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ29vZ2xlQXBpTG9hZGVyU2VydmljZS5pc01vY2tlZCgpKSB7XG4gICAgICB0aGlzLl9hdXRoU3RhdGUubmV4dChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoLnNpZ25Jbih7XG4gICAgICAgIHByb21wdDogJ3NlbGVjdF9hY2NvdW50JyxcbiAgICAgICAgdXhfbW9kZTogJ3JlZGlyZWN0JyxcbiAgICAgICAgcmVkaXJlY3RfdXJpOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2lnbk91dCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZ29vZ2xlQXBpTG9hZGVyU2VydmljZS5pc01vY2tlZCgpKSB7XG4gICAgICB0aGlzLmF1dGguc2lnbk91dCgpO1xuICAgIH1cbiAgICB0aGlzLl9hdXRoU3RhdGUubmV4dChudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoVG9rZW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aC5jdXJyZW50VXNlci5nZXQoKS5yZWxvYWRBdXRoUmVzcG9uc2UoKS50aGVuKHIgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuX2F1dGhTdGF0ZS5uZXh0KHRoaXMuZ2V0UHJvZmlsZShyLmlkX3Rva2VuLCByLmV4cGlyZXNfYXQpKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFByb2ZpbGUodG9rZW46IHN0cmluZywgZXhwaXJlc0F0OiBudW1iZXIpOiBBdXRoVXNlciB7XG4gICAgY29uc3QgcCA9IHRoaXMuYXV0aC5jdXJyZW50VXNlci5nZXQoKS5nZXRCYXNpY1Byb2ZpbGUoKTtcbiAgICByZXR1cm4gcCA/IHtcbiAgICAgIGlkOiBwLmdldElkKCksXG4gICAgICBlbWFpbDogcC5nZXRFbWFpbCgpLFxuICAgICAgZmlyc3ROYW1lOiBwLmdldEdpdmVuTmFtZSgpLFxuICAgICAgbGFzdE5hbWU6IHAuZ2V0RmFtaWx5TmFtZSgpLFxuICAgICAgYXZhdGFyOiBwLmdldEltYWdlVXJsKCksXG4gICAgICBpZFRva2VuOiB0b2tlbixcbiAgICAgIHRva2VuRXhwaXJlc0F0OiBleHBpcmVzQXRcbiAgICB9IDogbnVsbDtcbiAgfVxufVxuIl19