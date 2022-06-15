/**
 * apaleo Inventory API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MonetaryValueModel } from './monetaryValueModel';


export interface OfferCancellationFeeModel { 
    /**
     * The code of the cancellation policy applied
     */
    code: string;
    /**
     * The name of the cancellation policy applied
     */
    name: string;
    /**
     * The description of the cancellation policy applied
     */
    description: string;
    /**
     * The date and time the cancellation fee will be due. After that time this fee will  be charged in case of cancellation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    dueDateTime: string;
    fee: MonetaryValueModel;
}
