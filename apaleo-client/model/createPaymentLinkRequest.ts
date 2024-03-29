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


export interface CreatePaymentLinkRequest { 
    /**
     * The date that the link expires<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    expiresAt: string;
    /**
     * The payer\'s country code. Used to provide suitable for the payer payment methods and use default country language
     */
    countryCode: string;
    /**
     * Payment description. It will be shown on the payment form of the link
     */
    description?: string;
    /**
     * The email address of the payer or cardholder. It can be used to verify the identity of the payer and  allow to catch a fraudulent usage of the payment account if the email address does not match the one  on file at the bank
     */
    payerEmail?: string;
    amount: MonetaryValueModel;
    /**
     * List of charges and amount being covered by this payment.
     */
    paidCharges?: Array<PaymentPaidChargesRequest>;
}

