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
import { EmbeddedFolioModel } from './embeddedFolioModel';
import { AmountModel } from './amountModel';


export interface AllowanceModel { 
    /**
     * ID for allowances. This is unique within one folio.
     */
    id: string;
    amount: AmountModel;
    /**
     * Reason why this allowance was posted
     */
    reason: string;
    serviceType: AllowanceModel.ServiceTypeEnum;
    serviceDate: string;
    /**
     * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    created: string;
    movedFrom?: EmbeddedFolioModel;
    movedTo?: EmbeddedFolioModel;
    /**
     * A reason why move operation was performed
     */
    movedReason?: string;
    /**
     * ID of a charge allowance posted for. `Null` if posted for folio
     */
    sourceChargeId?: string;
    /**
     * ID of the custom sub-account the allowance has been posted to
     */
    subAccountId?: string;
}
export namespace AllowanceModel {
    export type ServiceTypeEnum = 'Other' | 'Accommodation' | 'FoodAndBeverages' | 'CancellationFees' | 'NoShow' | 'CityTax';
    export const ServiceTypeEnum = {
        Other: 'Other' as ServiceTypeEnum,
        Accommodation: 'Accommodation' as ServiceTypeEnum,
        FoodAndBeverages: 'FoodAndBeverages' as ServiceTypeEnum,
        CancellationFees: 'CancellationFees' as ServiceTypeEnum,
        NoShow: 'NoShow' as ServiceTypeEnum,
        CityTax: 'CityTax' as ServiceTypeEnum
    };
}


