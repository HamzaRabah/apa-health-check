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


export interface TransactionsExportLogItemModel { 
    /**
     * Export params - period start<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    periodStart: string;
    /**
     * Export params - period end<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    periodEnd: string;
    /**
     * Export params - export type
     */
    type: TransactionsExportLogItemModel.TypeEnum;
    /**
     * The ID of the property
     */
    propertyId: string;
    /**
     * Date and time when the operation has been executed<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    created: string;
    /**
     * The ID of the user that triggered this event
     */
    subjectId?: string;
}
export namespace TransactionsExportLogItemModel {
    export type TypeEnum = 'Raw' | 'Aggregate' | 'AggregatePairs';
    export const TypeEnum = {
        Raw: 'Raw' as TypeEnum,
        Aggregate: 'Aggregate' as TypeEnum,
        AggregatePairs: 'AggregatePairs' as TypeEnum
    };
}

