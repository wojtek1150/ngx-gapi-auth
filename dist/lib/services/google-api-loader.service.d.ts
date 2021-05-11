import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleApiConfig, NgGapiClientConfig } from '../config/google-api.config';
import * as i0 from "@angular/core";
export declare let NG_GAPI_CONFIG: InjectionToken<NgGapiClientConfig>;
export declare class GoogleApiLoaderService {
    private readonly gapiUrl;
    private readonly config;
    constructor(config: NgGapiClientConfig);
    onLoad(): Observable<boolean>;
    getConfig(): GoogleApiConfig;
    isMocked(): boolean;
    private loadGapi;
    static ɵfac: i0.ɵɵFactoryDef<GoogleApiLoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDef<GoogleApiLoaderService>;
}
