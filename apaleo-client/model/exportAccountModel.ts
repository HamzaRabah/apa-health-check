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


export interface ExportAccountModel { 
    /**
     * The account name
     */
    name: string;
    /**
     * The account number
     */
    number: string;
    /**
     * The number of the parent account
     */
    parentNumber?: string;
    /**
     * The account type
     */
    type: ExportAccountModel.TypeEnum;
}
export namespace ExportAccountModel {
    export type TypeEnum = 'Revenues' | 'Payments' | 'Liabilities' | 'Receivables' | 'Vat' | 'House' | 'AccountsReceivable' | 'CityTaxes' | 'TransitoryItems' | 'VatOnLiabilities' | 'LossOfAccountsReceivable';
    export const TypeEnum = {
        Revenues: 'Revenues' as TypeEnum,
        Payments: 'Payments' as TypeEnum,
        Liabilities: 'Liabilities' as TypeEnum,
        Receivables: 'Receivables' as TypeEnum,
        Vat: 'Vat' as TypeEnum,
        House: 'House' as TypeEnum,
        AccountsReceivable: 'AccountsReceivable' as TypeEnum,
        CityTaxes: 'CityTaxes' as TypeEnum,
        TransitoryItems: 'TransitoryItems' as TypeEnum,
        VatOnLiabilities: 'VatOnLiabilities' as TypeEnum,
        LossOfAccountsReceivable: 'LossOfAccountsReceivable' as TypeEnum
    };
}


