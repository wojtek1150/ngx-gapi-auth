/// <reference types="gapi.auth2" />
import { Observable } from 'rxjs';
import GoogleAuth = gapi.auth2.GoogleAuth;
import { GoogleApiLoaderService } from './google-api-loader.service';
import * as i0 from "@angular/core";
export declare class GoogleAuth2LoaderService {
    private googleApi;
    private GoogleAuth;
    constructor(googleApi: GoogleApiLoaderService);
    getAuth(newInstance?: boolean): Observable<GoogleAuth>;
    private loadGoogleAuth2;
    static ɵfac: i0.ɵɵFactoryDef<GoogleAuth2LoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDef<GoogleAuth2LoaderService>;
}
