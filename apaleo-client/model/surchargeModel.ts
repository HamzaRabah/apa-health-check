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


export interface SurchargeModel { 
    /**
     * The total numbers of adults
     */
    adults: number;
    /**
     * Specifies how to interpret \'Value\'
     */
    type: SurchargeModel.TypeEnum;
    /**
     * The percent or absolute value (in the rate plan\'s currency) of the surcharge
     */
    value: number;
}
export namespace SurchargeModel {
    export type TypeEnum = 'Absolute' | 'Percent';
    export const TypeEnum = {
        Absolute: 'Absolute' as TypeEnum,
        Percent: 'Percent' as TypeEnum
    };
}

