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
import { MaintenanceModel } from './maintenanceModel';
import { BlockUnitsModel } from './blockUnitsModel';


export interface PropertyAvailabilityModel { 
    /**
     * The number of units physically existing on the property
     */
    physicalCount: number;
    /**
     * The number of units physically existing excluding the ones which are out of inventory
     */
    houseCount: number;
    /**
     * The number of sold units including units picked up from blocks
     */
    soldCount: number;
    /**
     * The percent value indicating the occupancy
     */
    occupancy: number;
    /**
     * The number of units available for selling. This is the house count excluding the out of order and the already sold units.  Any defined overbooking limits are also already considered
     */
    sellableCount: number;
    /**
     * The number of units which are allowed for overbooking
     */
    allowedOverbookingCount: number;
    maintenance: MaintenanceModel;
    block: BlockUnitsModel;
}

