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
import { UnitGroupAvailabilityTimeSliceItemModel } from './unitGroupAvailabilityTimeSliceItemModel';


export interface AvailableUnitGroupListModel { 
    /**
     * List of time slices
     */
    timeSlices: Array<UnitGroupAvailabilityTimeSliceItemModel>;
    /**
     * Total count of items
     */
    count: number;
}

