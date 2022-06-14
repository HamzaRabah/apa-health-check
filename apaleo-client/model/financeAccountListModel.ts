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
import { SlimFinanceAccountModel } from './slimFinanceAccountModel';


export interface FinanceAccountListModel { 
    /**
     * List of accounts in a property, having one specific parent.
     */
    accounts: Array<SlimFinanceAccountModel>;
    /**
     * Total count of items
     */
    count: number;
}

