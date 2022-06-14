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
import { ReservationAssignedUnitTimeRangeModel } from './reservationAssignedUnitTimeRangeModel';
import { EmbeddedUnitModel } from './embeddedUnitModel';


export interface ReservationAssignedUnitModel { 
    unit: EmbeddedUnitModel;
    /**
     * The time ranges for which the unit is assigned to the reservation
     */
    timeRanges: Array<ReservationAssignedUnitTimeRangeModel>;
}

