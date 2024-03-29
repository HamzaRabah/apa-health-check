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


export interface CalculatedRateModel { 
    /**
     * Number of adults this rate is valid for
     */
    adults: number;
    price: MonetaryValueModel;
    includedServicesPrice?: MonetaryValueModel;
}

