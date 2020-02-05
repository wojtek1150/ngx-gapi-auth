/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/google-auth2-loader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference types="gapi.auth2" />
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { GoogleApiLoaderService } from './google-api-loader.service';
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
                .pipe(mergeMap((/**
             * @return {?}
             */
            function () { return _this.loadGoogleAuth2(); })));
        }
        return of(this.GoogleAuth);
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
        return new Observable((/**
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
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleAuth2LoaderService.ctorParameters = function () { return [
        { type: GoogleApiLoaderService }
    ]; };
    return GoogleAuth2LoaderService;
}());
export { GoogleAuth2LoaderService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWF1dGgyLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWdhcGktYXV0aDIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ29vZ2xlLWF1dGgyLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBWSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3JFO0lBSUUsa0NBQW9CLFNBQWlDO1FBQXJELGlCQUlDO1FBSm1CLGNBQVMsR0FBVCxTQUFTLENBQXdCO1FBRjdDLGVBQVUsR0FBZSxTQUFTLENBQUM7UUFHekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTOzs7UUFBQztZQUNoQyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLDBDQUFPOzs7O0lBQWQsVUFBZSxXQUFtQjtRQUFsQyxpQkFNQztRQU5jLDRCQUFBLEVBQUEsbUJBQW1CO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLFdBQVcsRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2lCQUMzQixJQUFJLENBQUMsUUFBUTs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLEVBQUUsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTyxrREFBZTs7OztJQUF2QjtRQUFBLGlCQVVDO1FBVEMsT0FBTyxJQUFJLFVBQVU7Ozs7UUFBQyxVQUFDLFFBQThCO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7O1lBQUU7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUMsSUFBZ0I7b0JBQ2xGLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDLEtBQUs7Ozs7Z0JBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFuQixDQUFtQixFQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTVCRixVQUFVOzs7O2dCQUhGLHNCQUFzQjs7SUFnQy9CLCtCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E1Qlksd0JBQXdCOzs7Ozs7SUFDbkMsOENBQTJDOzs7OztJQUUvQiw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImdhcGkuYXV0aDJcIiAvPlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IEdvb2dsZUF1dGggPSBnYXBpLmF1dGgyLkdvb2dsZUF1dGg7XG5pbXBvcnQgeyBHb29nbGVBcGlMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtYXBpLWxvYWRlci5zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQXV0aDJMb2FkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBHb29nbGVBdXRoOiBHb29nbGVBdXRoID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlQXBpOiBHb29nbGVBcGlMb2FkZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5nb29nbGVBcGkub25Mb2FkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEdvb2dsZUF1dGgyKCkuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXV0aChuZXdJbnN0YW5jZSA9IGZhbHNlKTogT2JzZXJ2YWJsZTxHb29nbGVBdXRoPiB7XG4gICAgaWYgKCF0aGlzLkdvb2dsZUF1dGggfHwgbmV3SW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmdvb2dsZUFwaS5vbkxvYWQoKVxuICAgICAgICAucGlwZShtZXJnZU1hcCgoKSA9PiB0aGlzLmxvYWRHb29nbGVBdXRoMigpKSk7XG4gICAgfVxuICAgIHJldHVybiBvZih0aGlzLkdvb2dsZUF1dGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkR29vZ2xlQXV0aDIoKTogT2JzZXJ2YWJsZTxHb29nbGVBdXRoPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8R29vZ2xlQXV0aD4pID0+IHtcbiAgICAgIGdhcGkubG9hZCgnYXV0aDInLCAoKSA9PiB7XG4gICAgICAgIGdhcGkuYXV0aDIuaW5pdCh0aGlzLmdvb2dsZUFwaS5nZXRDb25maWcoKS5nZXRDbGllbnRDb25maWcoKSkudGhlbigoYXV0aDogR29vZ2xlQXV0aCkgPT4ge1xuICAgICAgICAgIHRoaXMuR29vZ2xlQXV0aCA9IGF1dGg7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChhdXRoKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IG9ic2VydmVyLmVycm9yKGVycikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==