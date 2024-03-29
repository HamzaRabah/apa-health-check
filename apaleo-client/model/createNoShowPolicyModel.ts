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


export interface CreateNoShowPolicyModel { 
    /**
     * The code for the no-show policy, used to assemble its id
     */
    code: string;
    /**
     * The name for the no-show policy
     */
    name: { [key: string]: string; };
    /**
     * The description for the no-show policy
     */
    description: { [key: string]: string; };
    /**
     * The id of the property where the no-show policy will be created
     */
    propertyId: string;
    fee: FeeDetailsModel;
}

