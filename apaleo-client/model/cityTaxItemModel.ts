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


export interface CityTaxItemModel { 
    /**
     * The ID of this city tax
     */
    id: string;
    /**
     * The code for the city tax
     */
    code: string;
    /**
     * The name of the city tax
     */
    name: string;
    /**
     * The description of the city tax
     */
    description: string;
    /**
     * The ID of the property for which the city tax was created
     */
    propertyId: string;
    /**
     * The base on which the city tax is calculated
     */
    type: CityTaxItemModel.TypeEnum;
    /**
     * How to treat the calculated city tax: as before tax or after tax
     */
    taxHandlingType: CityTaxItemModel.TaxHandlingTypeEnum;
    /**
     * Depending on the type, the percent or multiplier used to calculate city tax
     */
    value: number;
    /**
     * Specifies which VAT applies.
     */
    vatType: CityTaxItemModel.VatTypeEnum;
    /**
     * Whether city tax is included in the rate, or added on top of it. Default is `false`
     */
    includeCityTaxInRateAmount: boolean;
}
export namespace CityTaxItemModel {
    export type TypeEnum = 'PercentOfGross' | 'PercentOfNet' | 'PerRoomPerNight' | 'PerPersonPerNight' | 'PerPersonPerNightBasedOnNetPrice';
    export const TypeEnum = {
        PercentOfGross: 'PercentOfGross' as TypeEnum,
        PercentOfNet: 'PercentOfNet' as TypeEnum,
        PerRoomPerNight: 'PerRoomPerNight' as TypeEnum,
        PerPersonPerNight: 'PerPersonPerNight' as TypeEnum,
        PerPersonPerNightBasedOnNetPrice: 'PerPersonPerNightBasedOnNetPrice' as TypeEnum
    };
    export type TaxHandlingTypeEnum = 'BeforeTax' | 'AfterTax';
    export const TaxHandlingTypeEnum = {
        BeforeTax: 'BeforeTax' as TaxHandlingTypeEnum,
        AfterTax: 'AfterTax' as TaxHandlingTypeEnum
    };
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


