### Angular 6+ Google Api OAuth2 module

This module will add the google api with OAuth2 to your project.
It wraps the Gapi in to a service layer allowing to work with Gapi and Google OAuth 2 Api.
Also it implements updating user token, so it helps keep your session alive

#### Installation

```js
npm install ngx-gapi-auth2
```

#### Usage

To use the `ngx-gapi-auth2` simply add `GoogleOauthModule` to your module imports
and set the configuration.

##### ClientConfig interface
Bellow are all available parameters that can be provided in the `forRoot()` method.

```typescript
export interface NgGapiClientConfig {

  /**
   * User for mocking auth flow to local storage save
   */
  e2e: boolean;

  /**
   * The app's client ID, found and created in the Google Developers Console.
   */
  client_id: string;

  /**
   * The domains for which to create sign-in cookies. Either a URI, single_host_origin, or none.
   * Defaults to single_host_origin if unspecified.
   */
  cookie_policy?: string;

  /**
   * The scopes to request, as a space-delimited string. Optional if fetch_basic_profile is not set to false.
   */
  scope?: string;

  /**
   * Fetch users' basic profile information when they sign in. Adds 'profile' and 'email' to the requested scopes. True if unspecified.
   */
  fetch_basic_profile?: boolean;

  /**
   * The Google Apps domain to which users must belong to sign in. This is susceptible to modification by clients,
   * so be sure to verify the hosted domain property of the returned user. Use GoogleUser.getHostedDomain() on the client,
   * and the hd claim in the ID Token on the server to verify the domain is what you expected.
   */
  hosted_domain?: string;

  /**
   * Used only for OpenID 2.0 client migration. Set to the value of the realm that you are currently using for OpenID 2.0,
   * as described in <a href="https://developers.google.com/accounts/docs/OpenID#openid-connect">OpenID 2.0 (Migration)</a>.
   */
  openid_realm?: string;

  /**
   * The UX mode to use for the sign-in flow.
   * By default, it will open the consent flow in a popup.
   */
  ux_mode?: 'popup' | 'redirect';

  /**
   * If using ux_mode='redirect', this parameter allows you to override the default redirect_uri that will be used at the end of the consent flow.
   * The default redirect_uri is the current URL stripped of query parameters and hash fragment.
   */
  redirect_uri?: string;

  /**
   * Describes the surface for a particular version of an API.
   */
  discoveryDocs: string[];
}
```

##### Example:
```typescript
import { GoogleOauthModule, NG_GAPI_CONFIG, NgGapiClientConfig } from 'ngx-gapi-auth2';

const gapiClientConfig: NgGapiClientConfig = {
  client_id: 'client_id',
  discoveryDocs: ['https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'],
  e2e: environment.e2e,
  scope: 'profile email'
};

@NgModule({
    imports: [
        //...
          GoogleOauthModule.forRoot({
            provide: NG_GAPI_CONFIG,
            useValue: gapiClientConfig
          }),
        //...
    ]
})
export MyModule {}
```


#### GoogleAuthService 
The module has a GoogleAuth service which allows you to work with the google auth

Usage:
```typescript
export class LoginPageComponent implements OnInit{ 
    private userState$: Observable<AuthUser>;
    
    constructor(private googleAuth: GoogleAuthService){ }

    ngOnInit(): void {
       userState$ = this.authService.authState()
     }

        
    public login(): void {
        this.googleAuth.login()
    }
}
```

Lets go step by step through the example

1. We create a angular Injectable() "service"
2. The static property `SESSION_STORAGE_KEY` is just a sugar to store string in a property rather then hardcode
3. in the constructor we inject the GoogleAuthService and making it a private property of our User class
4. no we have 2 public methods , sign in and get token. The signIn should be used at user login page , it will open the google 
auth popup. 
5. The get token method is used for http request to google resource where a authentication is required.

#### Batch requests

From gapi docs https://developers.google.com/api-client-library/javascript/features/batch
we should use `gapi.client.newBatch()`

But in our case we have typings and OOP, so we can do this:

```typescript
export class FooService {
    constructor(googleApiLoader: GoogleApiLoaderService) {
        googleApiLoader.onLoad().subscribe(()=> {
           const myBatch: HttpBatch = new HttpBatch();
           myBatch.add(
               // your request
           );
        });
    }
}

```

#### E2E mocking

This library has build in mock for E2E testing purposes. With this you can easily mock Google OAuth flow,
because you there is no reason to test 3rd party services in E2E.

Mock will return value from local storage, here is example login Class for Protractor tests

```typescript
import {users} from 'your-users-holder'
let currentUser = null;

export class AuthHelper {

  /**
   * Login selected user by setting local storage data
   * @param {string} user
   */
  static loginUser(user: string): void {
    if (currentUser === user) {
      if (process.env.npm_config_debug) {
        console.log(user + ' is already logged in');
      }
      return;
    }
    const userAuthData = users[user];
    if (!Object.keys(userAuthData).length) {
      throw Error('Unable to login. Check environment settings');
    }
    if (process.env.npm_config_debug) {
      console.log('Login as ' + user);
    }
    browser.get('/');
    browser.sleep(1000); // Wait a little 
    const userAuthDataStr = JSON.stringify(userAuthData);
    browser.executeScript(`localStorage.setItem('user', ${JSON.stringify(userAuthDataStr)})`);
    browser.sleep(1000); // Wait a little 
    browser.get('/');
    currentUser = user;
  }


  /**
   * Get user param from environment
   * @param {string} user
   * @param {string} param
   * @returns {string}
   */
  static getUserParam(user: string, param: string): string {
    const userData = users[user];
    return userData[param];
  }

  static getUserDisplayName(user: string): string {
    const userData = users[user];
    return userData['firstName'] + ' ' + userData['lastName'];
  }
}
```

Example user model
```typescript
export const users = {
    admin: {
      id: 'jon.snow',
      displayName: 'Jon Snow',
      firstName: 'Jon',
      lastName: 'Snow',
      avatar: 'https://lh3.googleusercontent.com/....photo.jpg',
      email: 'jon.snow@gmail.com',
      idToken: 'id_token',
      tokenExpiresAt: 3153600000000 // Long expire time (because on BE side you can skip check expiration for e2e)
    },
}
```


#### Configurations
The GoogleApiConfig class provides the required configuration for the Api

Configuration is easy to use. The GoogleOauthModule has a `forRoot()` method implemented,
so you can pass configuration object of type `NgGapiClientConfig`.
```typescript
 {
   e2e: true/false,
   client_id: "your client id",
   discoveryDocs: ["url to discovery docs", "another url"],
   scope: "space separated scopes"
}
```
Configure them according your google app configurations and resource scope.

- To get the clientId see in your [developer console](https://console.developers.google.com/apis/credentials)
- The discoveryDoc is in the resource description, here an example for
 [Reporting API v4](https://developers.google.com/analytics/devguides/reporting/core/v4/rest/)
- The scope is also in the documentation of the specific API , example for [Reporting API v4](https://developers.google.com/analytics/devguides/reporting/core/v4/rest/v4/reports/batchGet#authorization)

