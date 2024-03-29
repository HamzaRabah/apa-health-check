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
import { ActionReasonModelNotAllowedPropertyActionReason } from './actionReasonModelNotAllowedPropertyActionReason';


export interface ActionModelPropertyActionNotAllowedPropertyActionReason { 
    action: ActionModelPropertyActionNotAllowedPropertyActionReason.ActionEnum;
    isAllowed: boolean;
    reasons?: Array<ActionReasonModelNotAllowedPropertyActionReason>;
}
export namespace ActionModelPropertyActionNotAllowedPropertyActionReason {
    export type ActionEnum = 'Delete' | 'Archive' | 'SetLive' | 'DeleteTransactionalData';
    export const ActionEnum = {
        Delete: 'Delete' as ActionEnum,
        Archive: 'Archive' as ActionEnum,
        SetLive: 'SetLive' as ActionEnum,
        DeleteTransactionalData: 'DeleteTransactionalData' as ActionEnum
    };
}


