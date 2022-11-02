import {AccessToken, AuthorizationCode, ModuleOptions} from "simple-oauth2";

export class AuthService {
  private static readonly apaleoIdentityApi = 'https://identity.apaleo.com/'
  /* process.env.URL from netlify BUILD environment variables */
  private static readonly siteUrl = process.env["URL"] || 'http://localhost:8888'

  public static config() {
    return {
      /* values set in terminal session or in netlify environment variables */
      clientId: process.env["HEALTH_CHECK_CLIENT_ID"] as string,
      clientSecret: process.env["HEALTH_CHECK_CLIENT_SECRET"] as string, /* oauth API endpoints */
      tokenHost: this.apaleoIdentityApi,
      authorizePath: `${this.apaleoIdentityApi}connect/authorize`,
      tokenPath: `${this.apaleoIdentityApi}connect/token`, /* redirect_uri is the callback url after successful signin */
      redirect_uri: `${this.siteUrl}/.netlify/functions/auth-callback`,
      clientScope: 'offline_access accounting.read availability.read companies.read folios.read integration:ui-integrations.manage invoices.read maintenances.read offer-index.read offers.read openid profile rateplans.read-corporate rateplans.read-negotiated rates.read reports.read reservations.read routings.read setup.read',
    }
  }

  public static authInstance() {
    const config = this.config();
    const options: ModuleOptions = {
      client: {
        id: config.clientId, secret: config.clientSecret
      }, auth: {
        tokenHost: config.tokenHost, tokenPath: config.tokenPath, authorizePath: config.authorizePath
      }
    };
    return new AuthorizationCode(options);
  }

  public static createResultURL(authResult: AccessToken, redirectURL: string, csrf: string) {
    const token = authResult.token['token']["access_token"];
    const expiresIn = authResult.token['token']["expires_in"];
    const expiresAt = authResult.token['token']["expires_at"];
    return `${redirectURL}#csrf=${csrf}&token=${Buffer.from(token, 'binary').toString('base64')}&expiresIn=${expiresIn}&expiresAt=${expiresAt.toUTCString()}`;
  }
}
