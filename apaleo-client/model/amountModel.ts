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


export interface AmountModel { 
    grossAmount: number;
    netAmount: number;
    vatType: AmountModel.VatTypeEnum;
    vatPercent: number;
    currency: string;
}
export namespace AmountModel {
    export type VatTypeEnum = 'Null' | 'VeryReduced' | 'Reduced' | 'Normal' | 'Without' | 'Special' | 'ReducedCovid19' | 'NormalCovid19';
    export const VatTypeEnum = {
        Null: 'Null' as VatTypeEnum,
        VeryReduced: 'VeryReduced' as VatTypeEnum,
        Reduced: 'Reduced' as VatTypeEnum,
        Normal: 'Normal' as VatTypeEnum,
        Without: 'Without' as VatTypeEnum,
        Special: 'Special' as VatTypeEnum,
        ReducedCovid19: 'ReducedCovid19' as VatTypeEnum,
        NormalCovid19: 'NormalCovid19' as VatTypeEnum
    };
}


