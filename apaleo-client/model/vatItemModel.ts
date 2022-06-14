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


export interface VatItemModel { 
    /**
     * The VAT type
     */
    type: VatItemModel.TypeEnum;
    /**
     * The currently valid percent to calculate the VAT
     */
    percent: number;
}
export namespace VatItemModel {
    export type TypeEnum = 'Null' | 'VeryReduced' | 'Reduced' | 'Normal' | 'Without' | 'Special' | 'ReducedCovid19' | 'NormalCovid19';
    export const TypeEnum = {
        Null: 'Null' as TypeEnum,
        VeryReduced: 'VeryReduced' as TypeEnum,
        Reduced: 'Reduced' as TypeEnum,
        Normal: 'Normal' as TypeEnum,
        Without: 'Without' as TypeEnum,
        Special: 'Special' as TypeEnum,
        ReducedCovid19: 'ReducedCovid19' as TypeEnum,
        NormalCovid19: 'NormalCovid19' as TypeEnum
    };
}


