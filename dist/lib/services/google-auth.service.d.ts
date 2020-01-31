import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleAuth2LoaderService } from './google-auth2-loader.service';
import { GoogleApiLoaderService } from './google-api-loader.service';
import { AuthUser } from '../models/auth';
export declare class GoogleAuthService {
    private googleAuth2LoaderService;
    private googleApiLoaderService;
    private ngZone;
    private _authState;
    private auth;
    readonly authState: Observable<AuthUser>;
    constructor(googleAuth2LoaderService: GoogleAuth2LoaderService, googleApiLoaderService: GoogleApiLoaderService, ngZone: NgZone);
    signIn(): void;
    signOut(): void;
    refreshToken(): Promise<void>;
    private getProfile;
}
