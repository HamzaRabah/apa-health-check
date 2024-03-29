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


export interface CreateTerminalPaymentRequest { 
    /**
     * Terminal to be used for the payment
     */
    terminalId: string;
    amount: MonetaryValueModel;
    /**
     * List of charges and amount being covered by this payment.
     */
    paidCharges?: Array<PaymentPaidChargesRequest>;
}

