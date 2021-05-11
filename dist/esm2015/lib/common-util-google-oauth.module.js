import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleApiLoaderService } from './services/google-api-loader.service';
import { GoogleAuth2LoaderService } from './services/google-auth2-loader.service';
import { GoogleAuthService } from './services/google-auth.service';
import * as i0 from "@angular/core";
export class GoogleOauthModule {
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
/** @nocollapse */ GoogleOauthModule.ɵfac = function GoogleOauthModule_Factory(t) { return new (t || GoogleOauthModule)(); };
/** @nocollapse */ GoogleOauthModule.ɵmod = i0.ɵɵdefineNgModule({ type: GoogleOauthModule });
/** @nocollapse */ GoogleOauthModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GoogleOauthModule, { imports: [CommonModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GoogleOauthModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXV0aWwtZ29vZ2xlLW9hdXRoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29tbW9uLXV0aWwtZ29vZ2xlLW9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBS25FLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBNEI7UUFDekMsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNULGtCQUFrQjtnQkFDbEIsc0JBQXNCO2dCQUN0Qix3QkFBd0I7Z0JBQ3hCLGlCQUFpQjthQUNsQjtTQUNGLENBQUM7SUFDSixDQUFDOztxR0FYVSxpQkFBaUI7d0VBQWpCLGlCQUFpQjs0RUFGbkIsQ0FBQyxZQUFZLENBQUM7d0ZBRVosaUJBQWlCLGNBRmxCLFlBQVk7dUZBRVgsaUJBQWlCO2NBSDdCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEdvb2dsZUFwaUxvYWRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dvb2dsZS1hcGktbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgR29vZ2xlQXV0aDJMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9nb29nbGUtYXV0aDItbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgR29vZ2xlQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dvb2dsZS1hdXRoLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVPYXV0aE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGdhcGlDb25maWdQcm92aWRlcjogUHJvdmlkZXIpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEdvb2dsZU9hdXRoTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBHb29nbGVPYXV0aE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBnYXBpQ29uZmlnUHJvdmlkZXIsXG4gICAgICAgIEdvb2dsZUFwaUxvYWRlclNlcnZpY2UsXG4gICAgICAgIEdvb2dsZUF1dGgyTG9hZGVyU2VydmljZSxcbiAgICAgICAgR29vZ2xlQXV0aFNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=