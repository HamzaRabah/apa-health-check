import {Injectable} from '@angular/core';
import {Configuration} from "../../../../apaleo-client";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static readonly _authObjectKey = 'auth_result';
  private _renewTokenHandlerId: number = Number.NaN;

  constructor() {
    this._attachRenewTokenListener();
  }

  public static GetApiConfiguration() {
    return new Configuration({
      accessToken: AuthService._getAccessToken,
      basePath: environment.ApaleoCoreAPI
    });
  }

  private static _removeHash() {
    const {history, location} = window
    document.location.hash = ''
    history.pushState("", document.title, `${location.pathname}${location.search}`)
  }

  private static _getAccessToken(): string {
    const authObject = sessionStorage.getItem(AuthService._authObjectKey);
    if (!authObject) return '';
    return atob(JSON.parse(authObject ?? '').token)
  }

  public isAuthenticated() {
    return !!sessionStorage.getItem(AuthService._authObjectKey);
  }

  public login(redirectUrl = window.location.pathname) {
    const state = this._generateCsrfToken();
    const {location, localStorage} = window
    /* Set csrf token */
    localStorage.setItem(state, 'true')
    /* Do redirect */
    const redirectTo = `${location.origin}/signin-callback?redirectTo=${redirectUrl}`
    window.location.href = `/.netlify/functions/auth?url=${redirectTo}&csrf=${state}`
  }

  public handleAuthCallback() {
    const response = this._parseHash(window.location.hash);
    /* Clear hash */
    AuthService._removeHash();

    if (response.token && !localStorage.getItem(response.csrf)) {
      console.error('Token invalid. Please try to login again');
      return
    }

    /* Clean up csrfToken */
    localStorage.removeItem(response.csrf);
    sessionStorage.setItem(AuthService._authObjectKey, JSON.stringify(response));
    this._attachRenewTokenListener();
  }

  private _getAuthObject() {
    return JSON.parse(sessionStorage.getItem(AuthService._authObjectKey) ?? '');
  }

  private _attachRenewTokenListener() {
    if (!this.isAuthenticated())
      return;
    if (!Number.isNaN(this._renewTokenHandlerId))
      clearTimeout(this._renewTokenHandlerId);
    const authObject = this._getAuthObject();
    this._renewTokenHandlerId = setTimeout((authService: this) => {
      authService.login();
    }, (authObject.expiresIn - 300) * 1000, this);
  }

  private _generateCsrfToken() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); // eslint-disable-line
      return v.toString(16)
    })
  }

  private _parseHash(hash: string) {
    if (!hash) return {}
    return hash.replace(/^#/, '').split('&').reduce((result: any, pair: any) => {
      const keyValue = pair.split('=')
      result[keyValue[0]] = decodeURIComponent(keyValue[1]).replace(/\+/g, ' ')
      return result
    }, {})
  }
}
