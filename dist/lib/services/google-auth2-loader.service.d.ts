/// <reference types="gapi.auth2" />
import { Observable } from 'rxjs';
import GoogleAuth = gapi.auth2.GoogleAuth;
import { GoogleApiLoaderService } from './google-api-loader.service';
export declare class GoogleAuth2LoaderService {
    private googleApi;
    private GoogleAuth;
    constructor(googleApi: GoogleApiLoaderService);
    getAuth(newInstance?: boolean): Observable<GoogleAuth>;
    private loadGoogleAuth2;
}
