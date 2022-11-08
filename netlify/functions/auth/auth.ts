import {Handler} from '@netlify/functions'
import {AuthService} from "../utils/authService";
import {StoreService} from "../utils/storeService";
import {AccessToken} from "simple-oauth2";

const EXPIRATION_WINDOW_IN_SECONDS = 300; // Window of time before the actual expiration to refresh the token

export const handler: Handler = async (event, context) => {
  if (!event.queryStringParameters) {
    return {
      statusCode: 401, body: JSON.stringify({
        error: 'No token found',
      })
    }
  }
  const csrfToken = event.queryStringParameters["csrf"] as string;
  const redirectUrl = event.queryStringParameters["url"] as string;
  const accountCode = event.queryStringParameters["account_code"];
  let URI = '';
  if (accountCode) {
    const tokenObjectJson = await StoreService.get(`account:${accountCode}`);
    if (tokenObjectJson) {
      const tokenObject = JSON.parse(tokenObjectJson);
      console.log("tokenObject")
      console.log(tokenObject)
      console.log("tokenObject.token")
      console.log(tokenObject.token)
      console.log("tokenObjectAS")
      console.log(tokenObject as AccessToken)
      let token = AuthService.authInstance().createToken(tokenObject);
      console.log("token")
      if (token.expired(EXPIRATION_WINDOW_IN_SECONDS)) {
      console.log('token expired')
      console.log('refreshing token')
      try {
        const refreshParams = {};
        token = await token.refresh(refreshParams);

      } catch (error) {
        // @ts-ignore
        console.log('Error refreshing access token: ', error.message);
      }
      await StoreService.set(`account:${accountCode}`, JSON.stringify(token.token));

      console.log('refreshing refreshed')
      console.log(token)
      }
      URI = AuthService.createResultURL(token, redirectUrl, csrfToken)
    }
  }
  if (URI.length == 0) {
    const config = AuthService.config();
    URI = AuthService.authInstance().authorizeURL({
      redirect_uri: config.redirect_uri,
      scope: config.clientScope,
      state: `url=${redirectUrl}&csrf=${csrfToken}&account_code=${accountCode}`,
    });
  }


  return {
    statusCode: 302, headers: {
      Location: URI, 'Cache-Control': 'no-cache' // Disable caching of this response
    }
  };
}
