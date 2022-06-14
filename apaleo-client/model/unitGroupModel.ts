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
import { EmbeddedPropertyModel } from './embeddedPropertyModel';


/**
 * With this request you can create a new property
 */
export interface UnitGroupModel { 
    /**
     * The unit group id
     */
    id: string;
    /**
     * The code for the unit group that can be shown in reports and table views
     */
    code: string;
    property: EmbeddedPropertyModel;
    /**
     * The name for the unit group
     */
    name: { [key: string]: string; };
    /**
     * Number of units in this group
     */
    memberCount: number;
    /**
     * The description for the unit group
     */
    description: { [key: string]: string; };
    /**
     * Maximum number of persons for the unit group
     */
    maxPersons: number;
    /**
     * The unit group rank
     */
    rank?: number;
    /**
     * The unit group type
     */
    type: UnitGroupModel.TypeEnum;
}
export namespace UnitGroupModel {
    export type TypeEnum = 'BedRoom' | 'MeetingRoom' | 'EventSpace' | 'ParkingLot' | 'Other';
    export const TypeEnum = {
        BedRoom: 'BedRoom' as TypeEnum,
        MeetingRoom: 'MeetingRoom' as TypeEnum,
        EventSpace: 'EventSpace' as TypeEnum,
        ParkingLot: 'ParkingLot' as TypeEnum,
        Other: 'Other' as TypeEnum
    };
}


