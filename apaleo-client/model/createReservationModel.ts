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
import { CreateReservationTimeSliceModel } from './createReservationTimeSliceModel';
import { MonetaryValueModel } from './monetaryValueModel';
import { GuestModel } from './guestModel';
import { CommissionModel } from './commissionModel';
import { BookReservationServiceModel } from './bookReservationServiceModel';


/**
 * With this request you can create a reservation
 */
export interface CreateReservationModel { 
    /**
     * Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    arrival: string;
    /**
     * Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    departure: string;
    /**
     * Number of adults
     */
    adults: number;
    /**
     * Ages of the children
     */
    childrenAges?: Array<number>;
    /**
     * Additional information and comments
     */
    comment?: string;
    /**
     * Additional information and comments by the guest
     */
    guestComment?: string;
    /**
     * Code in some system
     */
    externalCode?: string;
    /**
     * Channel code
     */
    channelCode: CreateReservationModel.ChannelCodeEnum;
    /**
     * Source of the reservation
     */
    source?: string;
    primaryGuest?: GuestModel;
    /**
     * Additional guests of the reservation.
     */
    additionalGuests?: Array<GuestModel>;
    /**
     * The guarantee that has to be applied for this reservation. It has to be the same or stronger than  the minimum guarantee required by the selected rate plan
     */
    guaranteeType?: CreateReservationModel.GuaranteeTypeEnum;
    /**
     * Purpose of the trip, leisure or business
     */
    travelPurpose?: CreateReservationModel.TravelPurposeEnum;
    /**
     * Gross prices including services and taxes for each time slice. They will be applied to the reservation timeslices  in the order specified from arrival to departure
     */
    timeSlices: Array<CreateReservationTimeSliceModel>;
    /**
     * Additional services (extras, add-ons) that should be added to the reservation
     */
    services?: Array<BookReservationServiceModel>;
    /**
     * Set this if this reservation belongs to a company
     */
    companyId?: string;
    /**
     * Corporate code provided during creation. Used to find offers during amend.
     */
    corporateCode?: string;
    prePaymentAmount?: MonetaryValueModel;
    commission?: CommissionModel;
    /**
     * The promo code associated with a certain special offer
     */
    promoCode?: string;
}
export namespace CreateReservationModel {
    export type ChannelCodeEnum = 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs';
    export const ChannelCodeEnum = {
        Direct: 'Direct' as ChannelCodeEnum,
        BookingCom: 'BookingCom' as ChannelCodeEnum,
        Ibe: 'Ibe' as ChannelCodeEnum,
        ChannelManager: 'ChannelManager' as ChannelCodeEnum,
        Expedia: 'Expedia' as ChannelCodeEnum,
        Homelike: 'Homelike' as ChannelCodeEnum,
        Hrs: 'Hrs' as ChannelCodeEnum
    };
    export type GuaranteeTypeEnum = 'PM6Hold' | 'CreditCard' | 'Prepayment' | 'Company';
    export const GuaranteeTypeEnum = {
        Pm6Hold: 'PM6Hold' as GuaranteeTypeEnum,
        CreditCard: 'CreditCard' as GuaranteeTypeEnum,
        Prepayment: 'Prepayment' as GuaranteeTypeEnum,
        Company: 'Company' as GuaranteeTypeEnum
    };
    export type TravelPurposeEnum = 'Business' | 'Leisure';
    export const TravelPurposeEnum = {
        Business: 'Business' as TravelPurposeEnum,
        Leisure: 'Leisure' as TravelPurposeEnum
    };
}


