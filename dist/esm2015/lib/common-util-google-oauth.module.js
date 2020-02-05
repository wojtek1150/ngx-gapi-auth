/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-util-google-oauth.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleApiLoaderService } from './services/google-api-loader.service';
import { GoogleAuth2LoaderService } from './services/google-auth2-loader.service';
import { GoogleAuthService } from './services/google-auth.service';
export class GoogleOauthModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXV0aWwtZ29vZ2xlLW9hdXRoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1nYXBpLWF1dGgyLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi11dGlsLWdvb2dsZS1vYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFLbkUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBNEI7UUFDekMsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNULGtCQUFrQjtnQkFDbEIsc0JBQXNCO2dCQUN0Qix3QkFBd0I7Z0JBQ3hCLGlCQUFpQjthQUNsQjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFkRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHb29nbGVBcGlMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9nb29nbGUtYXBpLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEdvb2dsZUF1dGgyTG9hZGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ29vZ2xlLWF1dGgyLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEdvb2dsZUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9nb29nbGUtYXV0aC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlT2F1dGhNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChnYXBpQ29uZmlnUHJvdmlkZXI6IFByb3ZpZGVyKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBHb29nbGVPYXV0aE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBnYXBpQ29uZmlnUHJvdmlkZXIsXG4gICAgICAgIEdvb2dsZUFwaUxvYWRlclNlcnZpY2UsXG4gICAgICAgIEdvb2dsZUF1dGgyTG9hZGVyU2VydmljZSxcbiAgICAgICAgR29vZ2xlQXV0aFNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=