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
import { UnitMaintenanceModel } from './unitMaintenanceModel';


export interface UnitStatusModel { 
    isOccupied: boolean;
    condition: UnitStatusModel.ConditionEnum;
    maintenance?: UnitMaintenanceModel;
}
export namespace UnitStatusModel {
    export type ConditionEnum = 'Clean' | 'CleanToBeInspected' | 'Dirty';
    export const ConditionEnum = {
        Clean: 'Clean' as ConditionEnum,
        CleanToBeInspected: 'CleanToBeInspected' as ConditionEnum,
        Dirty: 'Dirty' as ConditionEnum
    };
}


