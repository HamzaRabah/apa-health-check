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
import { ReservationStayOfferServiceModel } from './reservationStayOfferServiceModel';
import { MonetaryValueModel } from './monetaryValueModel';
import { OfferUnitGroupModel } from './offerUnitGroupModel';
import { AmountModel } from './amountModel';
import { EmbeddedRatePlanModel } from './embeddedRatePlanModel';


export interface ReservationStayOfferTimeSliceModel { 
    /**
     * The start date and time for this time slice<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    from: string;
    /**
     * The end date and time for this time slice<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    to: string;
    ratePlan: EmbeddedRatePlanModel;
    unitGroup: OfferUnitGroupModel;
    baseAmount: AmountModel;
    totalGrossAmount: MonetaryValueModel;
    /**
     * The breakdown for services included in the offer
     */
    includedServices?: Array<ReservationStayOfferServiceModel>;
}
