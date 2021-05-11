import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleApiConfig } from '../config/google-api.config';
import * as i0 from "@angular/core";
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
/** @nocollapse */ GoogleApiLoaderService.ɵfac = function GoogleApiLoaderService_Factory(t) { return new (t || GoogleApiLoaderService)(i0.ɵɵinject(NG_GAPI_CONFIG)); };
/** @nocollapse */ GoogleApiLoaderService.ɵprov = i0.ɵɵdefineInjectable({ token: GoogleApiLoaderService, factory: GoogleApiLoaderService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GoogleApiLoaderService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [NG_GAPI_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFwaS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZ29vZ2xlLWFwaS1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFzQixNQUFNLDZCQUE2QixDQUFDOztBQUVsRixNQUFNLENBQUMsSUFBSSxjQUFjLEdBQ3ZCLElBQUksY0FBYyxDQUFxQixnQkFBZ0IsQ0FBQyxDQUFDO0FBRzNELE1BQU0sT0FBTyxzQkFBc0I7SUFJakMsWUFBb0MsTUFBMEI7UUFIN0MsWUFBTyxHQUFXLHdDQUF3QyxDQUFDO1FBSTFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLFNBQVM7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVPLFFBQVE7UUFDZCxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsUUFBMkIsRUFBRSxFQUFFO1lBQ3BELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7WUFDOUIsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtnQkFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7K0dBaENVLHNCQUFzQixjQUliLGNBQWM7aUZBSnZCLHNCQUFzQixXQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQURsQyxVQUFVOztzQkFLSSxNQUFNO3VCQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR29vZ2xlQXBpQ29uZmlnLCBOZ0dhcGlDbGllbnRDb25maWcgfSBmcm9tICcuLi9jb25maWcvZ29vZ2xlLWFwaS5jb25maWcnO1xuXG5leHBvcnQgbGV0IE5HX0dBUElfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxOZ0dhcGlDbGllbnRDb25maWc+ID1cbiAgbmV3IEluamVjdGlvblRva2VuPE5nR2FwaUNsaWVudENvbmZpZz4oJ25nLWdhcGkuY29uZmlnJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVBcGlMb2FkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBnYXBpVXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvcGxhdGZvcm0uanMnO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZzogR29vZ2xlQXBpQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTkdfR0FQSV9DT05GSUcpIGNvbmZpZzogTmdHYXBpQ2xpZW50Q29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBuZXcgR29vZ2xlQXBpQ29uZmlnKGNvbmZpZyk7XG4gICAgdGhpcy5sb2FkR2FwaSgpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG9uTG9hZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkR2FwaSgpO1xuICB9XG5cbiAgcHVibGljIGdldENvbmZpZygpOiBHb29nbGVBcGlDb25maWcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIHB1YmxpYyBpc01vY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZ2V0TW9ja2VkKCk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRHYXBpKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGJvb2xlYW4+KSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBub2RlLnNyYyA9IHRoaXMuZ2FwaVVybDtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIG5vZGUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuIl19