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
export class GoogleAuth2LoaderService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWF1dGgyLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWdhcGktYXV0aDIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ29vZ2xlLWF1dGgyLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBWSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSXJFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFHbkMsWUFBb0IsU0FBaUM7UUFBakMsY0FBUyxHQUFULFNBQVMsQ0FBd0I7UUFGN0MsZUFBVSxHQUFlLFNBQVMsQ0FBQztRQUd6QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNyQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxXQUFXLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtpQkFDM0IsSUFBSSxDQUFDLFFBQVE7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBQyxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTyxlQUFlO1FBQ3JCLE9BQU8sSUFBSSxVQUFVOzs7O1FBQUMsQ0FBQyxRQUE4QixFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7WUFBRSxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFO29CQUN0RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O2dCQUFDLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQTVCRixVQUFVOzs7O1lBSEYsc0JBQXNCOzs7Ozs7O0lBSzdCLDhDQUEyQzs7Ozs7SUFFL0IsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJnYXBpLmF1dGgyXCIgLz5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCBHb29nbGVBdXRoID0gZ2FwaS5hdXRoMi5Hb29nbGVBdXRoO1xuaW1wb3J0IHsgR29vZ2xlQXBpTG9hZGVyU2VydmljZSB9IGZyb20gJy4vZ29vZ2xlLWFwaS1sb2FkZXIuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZUF1dGgyTG9hZGVyU2VydmljZSB7XG4gIHByaXZhdGUgR29vZ2xlQXV0aDogR29vZ2xlQXV0aCA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdvb2dsZUFwaTogR29vZ2xlQXBpTG9hZGVyU2VydmljZSkge1xuICAgIHRoaXMuZ29vZ2xlQXBpLm9uTG9hZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRHb29nbGVBdXRoMigpLnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldEF1dGgobmV3SW5zdGFuY2UgPSBmYWxzZSk6IE9ic2VydmFibGU8R29vZ2xlQXV0aD4ge1xuICAgIGlmICghdGhpcy5Hb29nbGVBdXRoIHx8IG5ld0luc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5nb29nbGVBcGkub25Mb2FkKClcbiAgICAgICAgLnBpcGUobWVyZ2VNYXAoKCkgPT4gdGhpcy5sb2FkR29vZ2xlQXV0aDIoKSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2YodGhpcy5Hb29nbGVBdXRoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEdvb2dsZUF1dGgyKCk6IE9ic2VydmFibGU8R29vZ2xlQXV0aD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEdvb2dsZUF1dGg+KSA9PiB7XG4gICAgICBnYXBpLmxvYWQoJ2F1dGgyJywgKCkgPT4ge1xuICAgICAgICBnYXBpLmF1dGgyLmluaXQodGhpcy5nb29nbGVBcGkuZ2V0Q29uZmlnKCkuZ2V0Q2xpZW50Q29uZmlnKCkpLnRoZW4oKGF1dGg6IEdvb2dsZUF1dGgpID0+IHtcbiAgICAgICAgICB0aGlzLkdvb2dsZUF1dGggPSBhdXRoO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQoYXV0aCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiBvYnNlcnZlci5lcnJvcihlcnIpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=