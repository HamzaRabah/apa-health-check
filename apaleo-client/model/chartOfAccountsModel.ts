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


export interface ChartOfAccountsModel { 
    /**
     * The predefined list of global accounts of a property\'s subledger
     */
    globalAccounts: Array<SlimFinanceAccountModel>;
    /**
     * The predefined list of guest specific accounts of a property\'s subledger.
     */
    guestAccounts: Array<SlimFinanceAccountModel>;
    /**
     * The predefined list of external accounts of a property\'s subledger.
     */
    externalAccounts: Array<SlimFinanceAccountModel>;
}
