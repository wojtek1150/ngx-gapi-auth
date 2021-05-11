/// <reference types="gapi.auth2" />
/// <reference types="gapi.auth2" />
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { GoogleApiLoaderService } from './google-api-loader.service';
import * as i0 from "@angular/core";
import * as i1 from "./google-api-loader.service";
export class GoogleAuth2LoaderService {
    constructor(googleApi) {
        this.googleApi = googleApi;
        this.GoogleAuth = undefined;
        this.googleApi.onLoad().subscribe(() => {
            this.loadGoogleAuth2().subscribe();
        });
    }
    getAuth(newInstance = false) {
        if (!this.GoogleAuth || newInstance) {
            return this.googleApi.onLoad()
                .pipe(mergeMap(() => this.loadGoogleAuth2()));
        }
        return of(this.GoogleAuth);
    }
    loadGoogleAuth2() {
        return new Observable((observer) => {
            gapi.load('auth2', () => {
                gapi.auth2.init(this.googleApi.getConfig().getClientConfig()).then((auth) => {
                    this.GoogleAuth = auth;
                    observer.next(auth);
                    observer.complete();
                }).catch((err) => observer.error(err));
            });
        });
    }
}
/** @nocollapse */ GoogleAuth2LoaderService.ɵfac = function GoogleAuth2LoaderService_Factory(t) { return new (t || GoogleAuth2LoaderService)(i0.ɵɵinject(i1.GoogleApiLoaderService)); };
/** @nocollapse */ GoogleAuth2LoaderService.ɵprov = i0.ɵɵdefineInjectable({ token: GoogleAuth2LoaderService, factory: GoogleAuth2LoaderService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GoogleAuth2LoaderService, [{
        type: Injectable
    }], function () { return [{ type: i1.GoogleApiLoaderService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWF1dGgyLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9nb29nbGUtYXV0aDItbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQXBDLG9DQUFvQztBQUNwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQVksRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBSXJFLE1BQU0sT0FBTyx3QkFBd0I7SUFHbkMsWUFBb0IsU0FBaUM7UUFBakMsY0FBUyxHQUFULFNBQVMsQ0FBd0I7UUFGN0MsZUFBVSxHQUFlLFNBQVMsQ0FBQztRQUd6QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDckMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxXQUFXLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtpQkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUE4QixFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFO29CQUN0RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7bUhBM0JVLHdCQUF3QjttRkFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBRHBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImdhcGkuYXV0aDJcIiAvPlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IEdvb2dsZUF1dGggPSBnYXBpLmF1dGgyLkdvb2dsZUF1dGg7XG5pbXBvcnQgeyBHb29nbGVBcGlMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtYXBpLWxvYWRlci5zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQXV0aDJMb2FkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBHb29nbGVBdXRoOiBHb29nbGVBdXRoID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlQXBpOiBHb29nbGVBcGlMb2FkZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5nb29nbGVBcGkub25Mb2FkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEdvb2dsZUF1dGgyKCkuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXV0aChuZXdJbnN0YW5jZSA9IGZhbHNlKTogT2JzZXJ2YWJsZTxHb29nbGVBdXRoPiB7XG4gICAgaWYgKCF0aGlzLkdvb2dsZUF1dGggfHwgbmV3SW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmdvb2dsZUFwaS5vbkxvYWQoKVxuICAgICAgICAucGlwZShtZXJnZU1hcCgoKSA9PiB0aGlzLmxvYWRHb29nbGVBdXRoMigpKSk7XG4gICAgfVxuICAgIHJldHVybiBvZih0aGlzLkdvb2dsZUF1dGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkR29vZ2xlQXV0aDIoKTogT2JzZXJ2YWJsZTxHb29nbGVBdXRoPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8R29vZ2xlQXV0aD4pID0+IHtcbiAgICAgIGdhcGkubG9hZCgnYXV0aDInLCAoKSA9PiB7XG4gICAgICAgIGdhcGkuYXV0aDIuaW5pdCh0aGlzLmdvb2dsZUFwaS5nZXRDb25maWcoKS5nZXRDbGllbnRDb25maWcoKSkudGhlbigoYXV0aDogR29vZ2xlQXV0aCkgPT4ge1xuICAgICAgICAgIHRoaXMuR29vZ2xlQXV0aCA9IGF1dGg7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChhdXRoKTtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IG9ic2VydmVyLmVycm9yKGVycikpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==