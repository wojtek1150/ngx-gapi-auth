export class AuthData {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public avatar: string,
    public idToken: string,
    public tokenExpiresAt: number
  ) { }
}

export interface SignInError {
  type: 'cookiesNotEnabled' | string;
}

export interface TokenError {
  idpId: 'google' | string;
  type: 'tokenFailed' | 'userLoggedOut' | 'noSessionBound' | string;
  error?: string;
}
