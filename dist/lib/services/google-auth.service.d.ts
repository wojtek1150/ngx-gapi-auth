import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleAuth2LoaderService } from './google-auth2-loader.service';
import { GoogleApiLoaderService } from './google-api-loader.service';
import { AuthData, SignInError } from '../models/auth';
export declare class GoogleAuthService {
    private googleAuth2LoaderService;
    private googleApiLoaderService;
    private ngZone;
    private _authState;
    private _loginState;
    private auth;
    private readonly SIGN_IN_EXPIRE_KEY;
    get authState(): Observable<AuthData>;
    get loginState(): Observable<AuthData | SignInError>;
    constructor(googleAuth2LoaderService: GoogleAuth2LoaderService, googleApiLoaderService: GoogleApiLoaderService, ngZone: NgZone);
    signIn(): void;
    signOut(): void;
    fetchLoginData(): Promise<void>;
    refreshToken(): Promise<void>;
    private authLoaded;
    private removeState;
    private getProfile;
    private setTime;
}
