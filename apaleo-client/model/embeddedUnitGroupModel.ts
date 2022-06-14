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


export interface EmbeddedUnitGroupModel { 
    /**
     * The unit group id
     */
    id: string;
    /**
     * The code for the unit group that can be shown in reports and table views
     */
    code?: string;
    /**
     * The name for the unit group
     */
    name?: string;
    /**
     * The description for the unit group
     */
    description?: string;
    /**
     * The unit group type
     */
    type?: EmbeddedUnitGroupModel.TypeEnum;
}
export namespace EmbeddedUnitGroupModel {
    export type TypeEnum = 'BedRoom' | 'MeetingRoom' | 'EventSpace' | 'ParkingLot' | 'Other';
    export const TypeEnum = {
        BedRoom: 'BedRoom' as TypeEnum,
        MeetingRoom: 'MeetingRoom' as TypeEnum,
        EventSpace: 'EventSpace' as TypeEnum,
        ParkingLot: 'ParkingLot' as TypeEnum,
        Other: 'Other' as TypeEnum
    };
}


