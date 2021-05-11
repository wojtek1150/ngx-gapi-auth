/// <reference types="gapi.auth2" />
import { Injectable, NgZone } from '@angular/core';
import { interval, Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GoogleAuth2LoaderService } from './google-auth2-loader.service';
import { GoogleApiLoaderService } from './google-api-loader.service';
import { AuthData, SignInError } from '../models/auth';

@Injectable()
export class GoogleAuthService {
  private _authState: ReplaySubject<AuthData> = new ReplaySubject(1);
  private _loginState: ReplaySubject<AuthData | SignInError> = new ReplaySubject(1);
  private auth: gapi.auth2.GoogleAuth;

  private readonly SIGN_IN_EXPIRE_KEY = 'loginExpirationDate';

  get authState(): Observable<AuthData> {
    return this._authState.asObservable();
  }

  get loginState(): Observable<AuthData | SignInError> {
    return this._loginState.asObservable();
  }

  constructor(
    private googleAuth2LoaderService: GoogleAuth2LoaderService,
    private googleApiLoaderService: GoogleApiLoaderService,
    private ngZone: NgZone
  ) {
    if (this.googleApiLoaderService.isMocked()) {
      this.signIn();
    } else {
      this.googleApiLoaderService.onLoad().subscribe(() => {
        this.googleAuth2LoaderService.getAuth().subscribe(
          auth => this.authLoaded(auth),
          () => this.removeState()
        );
        interval(20 * 60 * 1000).pipe(  // run every 20min
          tap(() => this.refreshToken())
        ).subscribe();
      });
    }
  }

  public signIn(): void {
    if (this.googleApiLoaderService.isMocked()) {
      this._loginState.next(JSON.parse(localStorage.getItem('user')));
      this._authState.next(JSON.parse(localStorage.getItem('user')));
    } else {
      const now = new Date();
      const expirationDate = this.setTime(now, null, now.getMinutes() + 5);
      localStorage.setItem(this.SIGN_IN_EXPIRE_KEY, expirationDate.toISOString());
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      this.auth.signIn({
        prompt: 'select_account',
        ux_mode: isSafari ? 'popup' : 'redirect',
      }).then(() => this.fetchLoginData());
    }
  }

  public signOut(): void {
    if (!this.googleApiLoaderService.isMocked()) {
      this.auth.signOut();
    }
    this.removeState();
  }

  public fetchLoginData(): Promise<void> {
    return this.auth.currentUser.get().reloadAuthResponse().then(r => {
      this.ngZone.run(() => {
        this._loginState.next(this.getProfile(r.id_token, r.expires_at));
        this._authState.next(this.getProfile(r.id_token, r.expires_at));
      });
    });
  }

  public refreshToken(): Promise<void> {
    return this.auth.currentUser.get().reloadAuthResponse().then(r => {
      this.ngZone.run(() => this._authState.next(this.getProfile(r.id_token, r.expires_at)));
    });
  }

  private authLoaded(auth: gapi.auth2.GoogleAuth): void {
    this.auth = auth;
    if (this.auth.currentUser.get().isSignedIn()) {
      this.fetchLoginData();
      localStorage.removeItem(this.SIGN_IN_EXPIRE_KEY);
    } else {
      const signInDateExpireDate = new Date(localStorage.getItem(this.SIGN_IN_EXPIRE_KEY));
      if (signInDateExpireDate > new Date()) {
        this._loginState.next({ type: 'cookiesNotEnabled' });
        this._authState.next(null);
      } else {
        this.removeState();
      }
    }
  }

  private removeState(): void {
    this._authState.next(null);
    this._loginState.next(null);
  }

  private getProfile(token: string, expiresAt: number): AuthData {
    const p = this.auth.currentUser.get().getBasicProfile();
    return p ? {
      id: p.getId(),
      email: p.getEmail(),
      firstName: p.getGivenName(),
      lastName: p.getFamilyName(),
      avatar: p.getImageUrl(),
      idToken: token,
      tokenExpiresAt: expiresAt,
    } : null;
  }

  private setTime(date: string | Date, hours?: number, minutes?: number, seconds?: number, milliseconds?: number): Date {
    const newDate = new Date(date);
    if (typeof hours === 'number') {
      newDate.setHours(hours);
    }
    if (typeof minutes === 'number') {
      newDate.setMinutes(minutes);
    }
    if (typeof seconds === 'number') {
      newDate.setSeconds(seconds);
    }
    if (typeof milliseconds === 'number') {
      newDate.setMilliseconds(milliseconds);
    }
    return newDate;
  }
}
