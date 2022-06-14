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
import { CustomSubAccountModel } from './customSubAccountModel';


export interface CustomSubAccountsListModel { 
    /**
     * List of sub-accounts.
     */
    subAccounts: Array<CustomSubAccountModel>;
    /**
     * Total count of items
     */
    count: number;
}

