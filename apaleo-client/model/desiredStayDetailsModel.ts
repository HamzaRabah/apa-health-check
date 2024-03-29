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
import { DesiredTimeSliceModel } from './desiredTimeSliceModel';


export interface DesiredStayDetailsModel { 
    /**
     * Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    arrival: string;
    /**
     * Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    departure: string;
    /**
     * Number of adults
     */
    adults: number;
    /**
     * Ages of the children
     */
    childrenAges?: Array<number>;
    /**
     * Whether the prices for time slices with no change to the rate plan should be re-quoted based on current prices, or if  only additions like change of number of adults should be calculated. Defaults to \'false\'.
     */
    requote?: boolean;
    /**
     * The list of time slices
     */
    timeSlices: Array<DesiredTimeSliceModel>;
}

