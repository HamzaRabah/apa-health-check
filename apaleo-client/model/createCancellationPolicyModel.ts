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
import { FeeDetailsModel } from './feeDetailsModel';
import { PeriodModel } from './periodModel';


export interface CreateCancellationPolicyModel { 
    /**
     * The code for the cancellation policy, used to assemble its id
     */
    code: string;
    /**
     * The name for the cancellation policy
     */
    name: { [key: string]: string; };
    /**
     * The description for the cancellation policy
     */
    description: { [key: string]: string; };
    /**
     * The id of the property where the cancellation policy will be created
     */
    propertyId: string;
    periodFromReference?: PeriodModel;
    /**
     * The due date for the cancellation policy will be calculated based on this reference point
     */
    reference: CreateCancellationPolicyModel.ReferenceEnum;
    fee: FeeDetailsModel;
}
export namespace CreateCancellationPolicyModel {
    export type ReferenceEnum = 'PriorToArrival' | 'AfterBooking';
    export const ReferenceEnum = {
        PriorToArrival: 'PriorToArrival' as ReferenceEnum,
        AfterBooking: 'AfterBooking' as ReferenceEnum
    };
}

