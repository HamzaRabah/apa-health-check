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
import { CreateAddressModel } from './createAddressModel';


/**
 * With this request you can modify an account
 */
export interface ReplaceAccountModel { 
    /**
     * The name for the account, which usually should be the company name
     */
    name: string;
    /**
     * The description for the account
     */
    description?: string;
    /**
     * The URL of the account logo
     */
    logoUrl?: string;
    location?: CreateAddressModel;
    /**
     * The list of supported countries
     */
    additionallySupportedCountries?: Array<string>;
}
