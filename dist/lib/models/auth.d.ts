export declare class AuthData {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    idToken: string;
    tokenExpiresAt: number;
    constructor(id: string, firstName: string, lastName: string, email: string, avatar: string, idToken: string, tokenExpiresAt: number);
}
export interface SignInError {
    type: 'cookiesNotEnabled' | string;
}
export interface TokenError {
    idpId: 'google' | string;
    type: 'tokenFailed' | 'userLoggedOut' | 'noSessionBound' | string;
    error?: string;
}
