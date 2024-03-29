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
import { AddressModel } from './addressModel';
import { ActionModelPropertyActionNotAllowedPropertyActionReason } from './actionModelPropertyActionNotAllowedPropertyActionReason';
import { BankAccountModel } from './bankAccountModel';


/**
 * With this request you can create a new property
 */
export interface PropertyModel { 
    /**
     * The property id
     */
    id: string;
    /**
     * The code for the property that can be shown in reports and table views
     */
    code: string;
    /**
     * The id of the property used as a template while creating the property
     */
    propertyTemplateId?: string;
    /**
     * Whether the property can be used as a template for other properties
     */
    isTemplate: boolean;
    /**
     * The name for the property
     */
    name: { [key: string]: string; };
    /**
     * The description for the property
     */
    description?: { [key: string]: string; };
    /**
     * The legal name of the company running the property.
     */
    companyName: string;
    /**
     * The managing director(s) of the company, as they should appear on invoices
     */
    managingDirectors?: string;
    /**
     * The entry in the Commercial Register of the company running the property, as it should appear on invoices
     */
    commercialRegisterEntry: string;
    /**
     * The Tax-ID of the company running the property, as it should appear on invoices
     */
    taxId: string;
    location: AddressModel;
    bankAccount?: BankAccountModel;
    /**
     * The payment terms used for all rate plans
     */
    paymentTerms: { [key: string]: string; };
    /**
     * The time zone name of the property from the IANA Time Zone Database.  (see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
     */
    timeZone: string;
    /**
     * The currency a property works with.
     */
    currencyCode: string;
    /**
     * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    created: string;
    /**
     * The status of the property
     */
    status: PropertyModel.StatusEnum;
    /**
     * Is the property archived
     */
    isArchived: boolean;
    /**
     * The list of actions for this property
     */
    actions?: Array<ActionModelPropertyActionNotAllowedPropertyActionReason>;
}
export namespace PropertyModel {
    export type StatusEnum = 'Test' | 'Live';
    export const StatusEnum = {
        Test: 'Test' as StatusEnum,
        Live: 'Live' as StatusEnum
    };
}


