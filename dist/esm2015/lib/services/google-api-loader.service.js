/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/google-api-loader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleApiConfig } from '../config/google-api.config';
/** @type {?} */
export let NG_GAPI_CONFIG = new InjectionToken('ng-gapi.config');
export class GoogleApiLoaderService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.gapiUrl = 'https://apis.google.com/js/api.js';
        this.config = new GoogleApiConfig(config);
        this.loadGapi().subscribe();
    }
    /**
     * @return {?}
     */
    onLoad() {
        return this.loadGapi();
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.config;
    }
    /**
     * @return {?}
     */
    isMocked() {
        return this.config.getMocked();
    }
    /**
     * @private
     * @return {?}
     */
    loadGapi() {
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            let node = document.createElement('script');
            node.src = this.gapiUrl;
            node.type = 'text/javascript';
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
            node.onload = (/**
             * @return {?}
             */
            () => {
                observer.next(true);
                observer.complete();
            });
        }));
    }
}
GoogleApiLoaderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleApiLoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NG_GAPI_CONFIG,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoogleApiLoaderService.prototype.gapiUrl;
    /**
     * @type {?}
     * @private
     */
    GoogleApiLoaderService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFwaS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1nYXBpLWF1dGgyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dvb2dsZS1hcGktbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFzQixNQUFNLDZCQUE2QixDQUFDOztBQUVsRixNQUFNLEtBQUssY0FBYyxHQUN2QixJQUFJLGNBQWMsQ0FBcUIsZ0JBQWdCLENBQUM7QUFHMUQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUlqQyxZQUFvQyxNQUEwQjtRQUg3QyxZQUFPLEdBQVcsbUNBQW1DLENBQUM7UUFJckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRU0sU0FBUztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUdPLFFBQVE7UUFDZCxPQUFPLElBQUksVUFBVTs7OztRQUFDLENBQUMsUUFBMkIsRUFBRSxFQUFFOztnQkFDaEQsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE1BQU07OztZQUFHLEdBQUcsRUFBRTtnQkFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQSxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuQ0YsVUFBVTs7Ozs0Q0FLSSxNQUFNLFNBQUMsY0FBYzs7Ozs7OztJQUhsQyx5Q0FBdUU7Ozs7O0lBQ3ZFLHdDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHb29nbGVBcGlDb25maWcsIE5nR2FwaUNsaWVudENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9nb29nbGUtYXBpLmNvbmZpZyc7XG5cbmV4cG9ydCBsZXQgTkdfR0FQSV9DT05GSUc6IEluamVjdGlvblRva2VuPE5nR2FwaUNsaWVudENvbmZpZz4gPVxuICBuZXcgSW5qZWN0aW9uVG9rZW48TmdHYXBpQ2xpZW50Q29uZmlnPignbmctZ2FwaS5jb25maWcnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZUFwaUxvYWRlclNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGdhcGlVcmw6IHN0cmluZyA9ICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanMnO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZzogR29vZ2xlQXBpQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTkdfR0FQSV9DT05GSUcpIGNvbmZpZzogTmdHYXBpQ2xpZW50Q29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBuZXcgR29vZ2xlQXBpQ29uZmlnKGNvbmZpZyk7XG4gICAgdGhpcy5sb2FkR2FwaSgpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG9uTG9hZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkR2FwaSgpO1xuICB9XG5cbiAgcHVibGljIGdldENvbmZpZygpOiBHb29nbGVBcGlDb25maWcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIHB1YmxpYyBpc01vY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZ2V0TW9ja2VkKCk7XG4gIH1cblxuXG4gIHByaXZhdGUgbG9hZEdhcGkoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8Ym9vbGVhbj4pID0+IHtcbiAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBub2RlLnNyYyA9IHRoaXMuZ2FwaVVybDtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgbm9kZS5jaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBub2RlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dCh0cnVlKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==