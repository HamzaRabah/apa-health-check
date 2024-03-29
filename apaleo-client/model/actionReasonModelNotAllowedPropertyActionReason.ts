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


export interface ActionReasonModelNotAllowedPropertyActionReason { 
    code: ActionReasonModelNotAllowedPropertyActionReason.CodeEnum;
    message: string;
}
export namespace ActionReasonModelNotAllowedPropertyActionReason {
    export type CodeEnum = 'DeleteNotAllowedForPropertyNotInStatusTest' | 'ArchiveNotAllowedForPropertyNotInStatusLive' | 'ArchiveNotAllowedForPropertyWhichIsAlreadyArchived' | 'SetToLiveNotAllowedForPropertyNotInStatusTest' | 'SetToLiveNotAllowedForPropertyInNonLiveAccount' | 'DeleteTransactionalDataNotAllowedForPropertyNotInStatusTest';
    export const CodeEnum = {
        DeleteNotAllowedForPropertyNotInStatusTest: 'DeleteNotAllowedForPropertyNotInStatusTest' as CodeEnum,
        ArchiveNotAllowedForPropertyNotInStatusLive: 'ArchiveNotAllowedForPropertyNotInStatusLive' as CodeEnum,
        ArchiveNotAllowedForPropertyWhichIsAlreadyArchived: 'ArchiveNotAllowedForPropertyWhichIsAlreadyArchived' as CodeEnum,
        SetToLiveNotAllowedForPropertyNotInStatusTest: 'SetToLiveNotAllowedForPropertyNotInStatusTest' as CodeEnum,
        SetToLiveNotAllowedForPropertyInNonLiveAccount: 'SetToLiveNotAllowedForPropertyInNonLiveAccount' as CodeEnum,
        DeleteTransactionalDataNotAllowedForPropertyNotInStatusTest: 'DeleteTransactionalDataNotAllowedForPropertyNotInStatusTest' as CodeEnum
    };
}


