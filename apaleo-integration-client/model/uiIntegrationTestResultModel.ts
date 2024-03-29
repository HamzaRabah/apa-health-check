/**
 * Integration API
 * The Integration API allows apps to ...
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface UiIntegrationTestResultModel { 
    success?: boolean;
    errorType?: UiIntegrationTestResultModel.ErrorTypeEnum;
    errorMessage?: string;
    errorContent?: string;
    receivedResponse?: string;
}
export namespace UiIntegrationTestResultModel {
    export type ErrorTypeEnum = 'HttpRequestToPrivateUrlError' | 'ResponseDoesNotMeetJsonSchemaError' | 'UrlIsNotValidError' | 'ResponseContentFromPrivateUrlError';
    export const ErrorTypeEnum = {
        HttpRequestToPrivateUrlError: 'HttpRequestToPrivateUrlError' as ErrorTypeEnum,
        ResponseDoesNotMeetJsonSchemaError: 'ResponseDoesNotMeetJsonSchemaError' as ErrorTypeEnum,
        UrlIsNotValidError: 'UrlIsNotValidError' as ErrorTypeEnum,
        ResponseContentFromPrivateUrlError: 'ResponseContentFromPrivateUrlError' as ErrorTypeEnum
    };
}


