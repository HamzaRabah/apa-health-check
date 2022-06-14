import {Handler} from '@netlify/functions'
import {AuthService} from "../utils/authService";
import * as querystring from "querystring";

export const handler: Handler = async (event, context) => {

  if (!event.queryStringParameters) {
    return {
      statusCode: 401, body: JSON.stringify({
        error: 'Not authorized',
      })
    }
  }


  const code = event?.queryStringParameters["code"] as string;
  /* state helps mitigate CSRF attacks & Restore the previous state of your app */
  const state = querystring.parse(event.queryStringParameters["state"] as string);
  try {
    const authInstance = AuthService.authInstance();
    const config = AuthService.config();
    const result = await authInstance.getToken({
      code: code, redirect_uri: config.redirect_uri, scope: config.clientScope
    });
    const authResult = authInstance.createToken(result);
    const token = authResult.token['token']["access_token"];
    const expiresIn = authResult.token['token']["expires_in"];
    const expiresAt = authResult.token['token']["expires_at"];
    const URI = `${state["url"]}#csrf=${state["csrf"]}&token=${Buffer.from(token, 'binary').toString('base64')}&expiresIn=${expiresIn}&expiresAt=${expiresAt.toUTCString()}`
    return {
      statusCode: 302, headers: {
        Location: URI, 'Cache-Control': 'no-cache'
      }
    }
  } catch (e: any) {
    console.log('Access Token Error', e.message)
    console.log(e)
    return {
      statusCode: e.statusCode || 500, body: JSON.stringify({
        error: e.message,
      })
    }
  }

}
