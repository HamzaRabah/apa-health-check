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


export interface ReplaceCompanyRatePlanModel { 
    /**
     * Company ID that can use this rate plan
     */
    id: string;
    /**
     * Optional rate plan code that is used by the company. Default is companyCode-ratePlanCode.  Same code can be specified for several rate plans in one company.  No two companies can have a rate plan with the same code.
     */
    corporateCode?: string;
}
