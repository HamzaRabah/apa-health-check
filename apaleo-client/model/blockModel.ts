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
import { EmbeddedPropertyModel } from './embeddedPropertyModel';
import { EmbeddedGroupModel } from './embeddedGroupModel';
import { MonetaryValueModel } from './monetaryValueModel';
import { EmbeddedUnitGroupModel } from './embeddedUnitGroupModel';
import { BlockTimeSliceModel } from './blockTimeSliceModel';
import { ActionModelBlockActionNotAllowedBlockActionReason } from './actionModelBlockActionNotAllowedBlockActionReason';
import { EmbeddedRatePlanModel } from './embeddedRatePlanModel';


export interface BlockModel { 
    /**
     * Block id
     */
    id: string;
    group: EmbeddedGroupModel;
    /**
     * Status of the block. Tentative will just mark inventory as requested, but still allows to sell it  through other channels. Definite will block the inventory for selling through other channels
     */
    status: BlockModel.StatusEnum;
    property: EmbeddedPropertyModel;
    ratePlan: EmbeddedRatePlanModel;
    unitGroup: EmbeddedUnitGroupModel;
    grossDailyRate: MonetaryValueModel;
    /**
     * Start date and time from which the inventory will be blocked<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    from: string;
    /**
     * End date and time until which the inventory will be blocked<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    to: string;
    /**
     * Number of reservations already picked from this block
     */
    pickedReservations: number;
    /**
     * The promo code associated with a certain special offer used to create the block
     */
    promoCode?: string;
    /**
     * The corporate code associated with a certain special offer used to create the block
     */
    corporateCode?: string;
    /**
     * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    created: string;
    /**
     * Date of last modification<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    modified: string;
    /**
     * The list of time slices for this block
     */
    timeSlices?: Array<BlockTimeSliceModel>;
    /**
     * The list of actions for this block
     */
    actions?: Array<ActionModelBlockActionNotAllowedBlockActionReason>;
}
export namespace BlockModel {
    export type StatusEnum = 'Tentative' | 'Definite' | 'Canceled';
    export const StatusEnum = {
        Tentative: 'Tentative' as StatusEnum,
        Definite: 'Definite' as StatusEnum,
        Canceled: 'Canceled' as StatusEnum
    };
}

