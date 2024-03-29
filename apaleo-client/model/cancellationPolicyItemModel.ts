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


export interface CancellationPolicyItemModel { 
    /**
     * Id
     */
    id: string;
    /**
     * Name
     */
    name: string;
    /**
     * The code for the cancellation policy
     */
    code: string;
    /**
     * Description
     */
    description: string;
    /**
     * The id of the property where the cancellation policy was created
     */
    propertyId: string;
    periodFromReference: PeriodModel;
    /**
     * The due date for the cancellation policy will be calculated based on this reference point, and the defined time period.  <br /><br />  Examples:<br />  - 1 day and 12 hours prior to arrival<br />  - 0 prior to arrival (meaning, cancellations are always free)<br />  - 24 hours after booking<br />  - 0 after booking (meaning, cancellations ar never free)
     */
    reference: CancellationPolicyItemModel.ReferenceEnum;
    fee: FeeDetailsModel;
}
export namespace CancellationPolicyItemModel {
    export type ReferenceEnum = 'PriorToArrival' | 'AfterBooking';
    export const ReferenceEnum = {
        PriorToArrival: 'PriorToArrival' as ReferenceEnum,
        AfterBooking: 'AfterBooking' as ReferenceEnum
    };
}


