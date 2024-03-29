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


export interface AccountItemModel { 
    /**
     * The code for the account that can be shown in reports and table views
     */
    code: string;
    /**
     * The name for the account, which usually should be the company name
     */
    name: string;
    /**
     * The description for the account
     */
    description?: string;
    /**
     * Type of the account
     */
    type: AccountItemModel.TypeEnum;
}
export namespace AccountItemModel {
    export type TypeEnum = 'Trial' | 'Live' | 'Suspended' | 'Development';
    export const TypeEnum = {
        Trial: 'Trial' as TypeEnum,
        Live: 'Live' as TypeEnum,
        Suspended: 'Suspended' as TypeEnum,
        Development: 'Development' as TypeEnum
    };
}


