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
import { MonetaryValueModel } from './monetaryValueModel';
import { PaymentPaidChargesRequest } from './paymentPaidChargesRequest';


export interface CreateCustomPaymentRequest { 
    /**
     * The payment method. Use \'CreditCard\', if none of the specific credit cards types matches. \'Booking.com\' only makes sense, if  the property (hotel) configured Booking.com > Finance to be \'Payments by Booking.com\'
     */
    method: CreateCustomPaymentRequest.MethodEnum;
    /**
     * The optional receipt you want to store for the payment. It defaults to the reservation or external folio id.  This field is required if you are adding payment to the house account
     */
    receipt?: string;
    /**
     * The business date of the payment. Defaults to the current date.  In some cases you might want to post the payments to the previous business date, this is only possible until 6 AM of the current day.
     */
    businessDate?: string;
    amount: MonetaryValueModel;
    /**
     * List of charges and amount being covered by this payment.
     */
    paidCharges?: Array<PaymentPaidChargesRequest>;
}
export namespace CreateCustomPaymentRequest {
    export type MethodEnum = 'Cash' | 'BankTransfer' | 'CreditCard' | 'Amex' | 'VisaCredit' | 'VisaDebit' | 'MasterCard' | 'MasterCardDebit' | 'Maestro' | 'GiroCard' | 'DiscoverCard' | 'Diners' | 'Jcb' | 'BookingCom' | 'VPay' | 'PayPal' | 'Postcard' | 'Reka' | 'Twint' | 'Lunchcheck' | 'Voucher' | 'ChinaUnionPay' | 'Other' | 'Cheque' | 'Airbnb' | 'HolidayCheck';
    export const MethodEnum = {
        Cash: 'Cash' as MethodEnum,
        BankTransfer: 'BankTransfer' as MethodEnum,
        CreditCard: 'CreditCard' as MethodEnum,
        Amex: 'Amex' as MethodEnum,
        VisaCredit: 'VisaCredit' as MethodEnum,
        VisaDebit: 'VisaDebit' as MethodEnum,
        MasterCard: 'MasterCard' as MethodEnum,
        MasterCardDebit: 'MasterCardDebit' as MethodEnum,
        Maestro: 'Maestro' as MethodEnum,
        GiroCard: 'GiroCard' as MethodEnum,
        DiscoverCard: 'DiscoverCard' as MethodEnum,
        Diners: 'Diners' as MethodEnum,
        Jcb: 'Jcb' as MethodEnum,
        BookingCom: 'BookingCom' as MethodEnum,
        VPay: 'VPay' as MethodEnum,
        PayPal: 'PayPal' as MethodEnum,
        Postcard: 'Postcard' as MethodEnum,
        Reka: 'Reka' as MethodEnum,
        Twint: 'Twint' as MethodEnum,
        Lunchcheck: 'Lunchcheck' as MethodEnum,
        Voucher: 'Voucher' as MethodEnum,
        ChinaUnionPay: 'ChinaUnionPay' as MethodEnum,
        Other: 'Other' as MethodEnum,
        Cheque: 'Cheque' as MethodEnum,
        Airbnb: 'Airbnb' as MethodEnum,
        HolidayCheck: 'HolidayCheck' as MethodEnum
    };
}

