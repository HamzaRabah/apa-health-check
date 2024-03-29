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


export interface InvoicePaymentModel { 
    /**
     * Id of the payment. This is unique within one folio.
     */
    id: string;
    /**
     * The Payment Method type.
     */
    method: InvoicePaymentModel.MethodEnum;
    /**
     * The Payment Method name translated in the requested language of the invoice
     */
    methodName: string;
    amount: MonetaryValueModel;
    /**
     * The date when the payment was done<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    paymentDate?: string;
    /**
     * The business date of the payment, can be different from the payment date for some payments posted after midnight and before 6AM.
     */
    businessDate?: string;
}
export namespace InvoicePaymentModel {
    export type MethodEnum = 'Cash' | 'BankTransfer' | 'CreditCard' | 'Invoice' | 'Amex' | 'VisaCredit' | 'VisaDebit' | 'MasterCard' | 'MasterCardDebit' | 'Maestro' | 'GiroCard' | 'DiscoverCard' | 'Diners' | 'Jcb' | 'BookingCom' | 'VPay' | 'PayPal' | 'Postcard' | 'Reka' | 'Twint' | 'Lunchcheck' | 'Voucher' | 'ChinaUnionPay' | 'Other' | 'Cheque' | 'Airbnb' | 'HolidayCheck' | 'PspCash' | 'PspDebit' | 'PspBanking' | 'PspOpenInvoice' | 'PspWallet';
    export const MethodEnum = {
        Cash: 'Cash' as MethodEnum,
        BankTransfer: 'BankTransfer' as MethodEnum,
        CreditCard: 'CreditCard' as MethodEnum,
        Invoice: 'Invoice' as MethodEnum,
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
        HolidayCheck: 'HolidayCheck' as MethodEnum,
        PspCash: 'PspCash' as MethodEnum,
        PspDebit: 'PspDebit' as MethodEnum,
        PspBanking: 'PspBanking' as MethodEnum,
        PspOpenInvoice: 'PspOpenInvoice' as MethodEnum,
        PspWallet: 'PspWallet' as MethodEnum
    };
}


