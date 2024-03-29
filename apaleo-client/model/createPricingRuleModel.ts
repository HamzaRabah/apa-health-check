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


export interface CreatePricingRuleModel { 
    /**
     * The id of the rate plan that will be used as base when calculating the rates.  The derivation level of the rate plan used as base rate plan cannot be greater than 2
     */
    baseRatePlanId: string;
    /**
     * The type used to control the calculation of the difference to the rates of the defined base  rate plan
     */
    type: CreatePricingRuleModel.TypeEnum;
    /**
     * The value used to control the calculation of the difference to the rates of the defined base  rate plan. It can be a positive and a negative value. The system will prevent you to define  a value that would lead to negative rates
     */
    value: number;
}
export namespace CreatePricingRuleModel {
    export type TypeEnum = 'Absolute' | 'Percent';
    export const TypeEnum = {
        Absolute: 'Absolute' as TypeEnum,
        Percent: 'Percent' as TypeEnum
    };
}


