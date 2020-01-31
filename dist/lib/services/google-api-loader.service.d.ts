import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleApiConfig, NgGapiClientConfig } from '../config/google-api.config';
export declare let NG_GAPI_CONFIG: InjectionToken<NgGapiClientConfig>;
export declare class GoogleApiLoaderService {
    private readonly gapiUrl;
    private readonly config;
    constructor(config: NgGapiClientConfig);
    onLoad(): Observable<boolean>;
    getConfig(): GoogleApiConfig;
    private loadGapi;
}
