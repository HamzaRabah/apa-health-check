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
import { CompanyInfoModel } from './companyInfoModel';
import { NonStrictAddressModel } from './nonStrictAddressModel';


export interface FolioDebitorModel { 
    /**
     * Whether the debitor is the booker, the primary guest, an additional guest, or the company.  When the folio has a company, the only possible value is \'Company\'. \'Property\' is a reserved type for the house folio.
     */
    type?: FolioDebitorModel.TypeEnum;
    /**
     * Title
     */
    title?: FolioDebitorModel.TitleEnum;
    /**
     * First name
     */
    firstName?: string;
    /**
     * Last name
     */
    name?: string;
    address?: NonStrictAddressModel;
    company?: CompanyInfoModel;
    /**
     * Any additional information about the debitor that should be present on the invoice
     */
    reference?: string;
    /**
     * Debitor\'s email
     */
    email?: string;
}
export namespace FolioDebitorModel {
    export type TypeEnum = 'Booker' | 'PrimaryGuest' | 'Company' | 'AdditionalGuest' | 'Property';
    export const TypeEnum = {
        Booker: 'Booker' as TypeEnum,
        PrimaryGuest: 'PrimaryGuest' as TypeEnum,
        Company: 'Company' as TypeEnum,
        AdditionalGuest: 'AdditionalGuest' as TypeEnum,
        Property: 'Property' as TypeEnum
    };
    export type TitleEnum = 'Mr' | 'Ms' | 'Dr' | 'Prof' | 'Mrs' | 'Other';
    export const TitleEnum = {
        Mr: 'Mr' as TitleEnum,
        Ms: 'Ms' as TitleEnum,
        Dr: 'Dr' as TitleEnum,
        Prof: 'Prof' as TitleEnum,
        Mrs: 'Mrs' as TitleEnum,
        Other: 'Other' as TitleEnum
    };
}

