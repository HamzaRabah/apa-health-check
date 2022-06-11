import {Injectable} from '@angular/core';
import {UserManager} from "oidc-client-ts";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userManager: UserManager;

  constructor() {
    const settings = {
      authority: environment.stsAuthority,
      client_id: environment.clientId,
      redirect_uri: `${environment.clientRoot}signin-callback`,
      silent_redirect_uri: `${environment.clientRoot}silent-callback.html`,
      post_logout_redirect_uri: `${environment.clientRoot}`,
      response_type: 'code',
      scope: environment.clientScope
    };
    this.userManager = new UserManager(settings);
  }

  public getUser() {
    return this.userManager.getUser();
  }

  public login() {
    return this.userManager.signinRedirect();
  }

  public renewToken() {
    return this.userManager.signinSilent();
  }

  public logout() {
    return this.userManager.signoutRedirect();
  }
}
