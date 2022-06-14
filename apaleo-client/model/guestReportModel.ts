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
import { TravelPurposeEntry } from './travelPurposeEntry';
import { NationalityEntry } from './nationalityEntry';


export interface GuestReportModel { 
    /**
     * Total number for all guests.
     */
    total: number;
    /**
     * Breakdown by travel purpose. Data where the travel purpose is unknown is excluded.
     */
    travelPurposeBreakdown?: Array<TravelPurposeEntry>;
    /**
     * Breakdown by nationality. Data where the nationality is unknown is excluded.
     */
    nationalityBreakdown?: Array<NationalityEntry>;
}

