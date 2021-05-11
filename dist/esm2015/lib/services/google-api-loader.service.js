import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleApiConfig } from '../config/google-api.config';
export let NG_GAPI_CONFIG = new InjectionToken('ng-gapi.config');
export class GoogleApiLoaderService {
    constructor(config) {
        this.gapiUrl = 'https://apis.google.com/js/platform.js';
        this.config = new GoogleApiConfig(config);
        this.loadGapi().subscribe();
    }
    onLoad() {
        return this.loadGapi();
    }
    getConfig() {
        return this.config;
    }
    isMocked() {
        return this.config.getMocked();
    }
    loadGapi() {
        return new Observable((observer) => {
            const node = document.createElement('script');
            node.src = this.gapiUrl;
            node.type = 'text/javascript';
            document.getElementsByTagName('head')[0].appendChild(node);
            node.onload = () => {
                observer.next(true);
                observer.complete();
            };
        });
    }
}
GoogleApiLoaderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleApiLoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NG_GAPI_CONFIG,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFwaS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZ29vZ2xlLWFwaS1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFzQixNQUFNLDZCQUE2QixDQUFDO0FBRWxGLE1BQU0sQ0FBQyxJQUFJLGNBQWMsR0FDdkIsSUFBSSxjQUFjLENBQXFCLGdCQUFnQixDQUFDLENBQUM7QUFHM0QsTUFBTSxPQUFPLHNCQUFzQjtJQUlqQyxZQUFvQyxNQUEwQjtRQUg3QyxZQUFPLEdBQVcsd0NBQXdDLENBQUM7UUFJMUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sU0FBUztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRU0sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU8sUUFBUTtRQUNkLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUEyQixFQUFFLEVBQUU7WUFDcEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztZQUM5QixRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFqQ0YsVUFBVTs7Ozs0Q0FLSSxNQUFNLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHb29nbGVBcGlDb25maWcsIE5nR2FwaUNsaWVudENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9nb29nbGUtYXBpLmNvbmZpZyc7XG5cbmV4cG9ydCBsZXQgTkdfR0FQSV9DT05GSUc6IEluamVjdGlvblRva2VuPE5nR2FwaUNsaWVudENvbmZpZz4gPVxuICBuZXcgSW5qZWN0aW9uVG9rZW48TmdHYXBpQ2xpZW50Q29uZmlnPignbmctZ2FwaS5jb25maWcnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZUFwaUxvYWRlclNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGdhcGlVcmw6IHN0cmluZyA9ICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9wbGF0Zm9ybS5qcyc7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBHb29nbGVBcGlDb25maWc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChOR19HQVBJX0NPTkZJRykgY29uZmlnOiBOZ0dhcGlDbGllbnRDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IG5ldyBHb29nbGVBcGlDb25maWcoY29uZmlnKTtcbiAgICB0aGlzLmxvYWRHYXBpKCkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgb25Mb2FkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmxvYWRHYXBpKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29uZmlnKCk6IEdvb2dsZUFwaUNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG5cbiAgcHVibGljIGlzTW9ja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5nZXRNb2NrZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEdhcGkoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8Ym9vbGVhbj4pID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIG5vZGUuc3JjID0gdGhpcy5nYXBpVXJsO1xuICAgICAgbm9kZS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgbm9kZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQodHJ1ZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG4iXX0=