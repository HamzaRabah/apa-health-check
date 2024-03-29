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


export interface EmbeddedTimeSliceDefinitionModel { 
    /**
     * The time slice definition id
     */
    id: string;
    /**
     * The name for the time slice definition
     */
    name: string;
    /**
     * The template used by the time slice defintion
     */
    template: EmbeddedTimeSliceDefinitionModel.TemplateEnum;
    /**
     * The check-in time for reservations based on this rate plan<br />A time (without fractional second part) as defined in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    checkInTime: string;
    /**
     * The check-out time for reservations based on this rate plan<br />A time (without fractional second part) as defined in the <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    checkOutTime: string;
}
export namespace EmbeddedTimeSliceDefinitionModel {
    export type TemplateEnum = 'DayUse' | 'OverNight';
    export const TemplateEnum = {
        DayUse: 'DayUse' as TemplateEnum,
        OverNight: 'OverNight' as TemplateEnum
    };
}


