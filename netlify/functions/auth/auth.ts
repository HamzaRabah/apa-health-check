import {Handler} from '@netlify/functions'
import {AuthService} from "../utils/authService";
import {StoreService} from "../utils/storeService";


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
      let token = AuthService.authInstance().createToken(tokenObject);
      if (token.expired()) {
        console.log('token expired')
        console.log(token)
        console.log('refreshing token')
        token = await token.refresh()
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
