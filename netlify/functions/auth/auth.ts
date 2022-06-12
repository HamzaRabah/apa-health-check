import {Handler} from '@netlify/functions'
import {AuthService} from "../utils/authService";

export const handler: Handler = async (event, context) => {
  if (!event.queryStringParameters) {
    return {
      statusCode: 401, body: JSON.stringify({
        error: 'No token found',
      })
    }
  }
  const csrfToken = event.queryStringParameters["csrf"];
  const redirectUrl = event.queryStringParameters["url"];

  const config = AuthService.config();
  const authorizationURI = AuthService.authInstance().authorizeURL({
    redirect_uri: config.redirect_uri, scope: config.clientScope, state: `url=${redirectUrl}&csrf=${csrfToken}`,
  });
  return {
    statusCode: 302, headers: {
      Location: authorizationURI, 'Cache-Control': 'no-cache' // Disable caching of this response
    }
  };
}
