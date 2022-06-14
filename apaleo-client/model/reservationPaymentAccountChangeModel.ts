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


export interface ReservationPaymentAccountChangeModel { 
    /**
     * The account number (e.g. masked credit card number or last 4 digits)
     */
    accountNumber?: string;
    /**
     * The account holder (e.g. card holder)
     */
    accountHolder?: string;
    /**
     * The credit card\'s expiration month
     */
    expiryMonth?: string;
    /**
     * The credit card\'s expiration year
     */
    expiryYear?: string;
    /**
     * The payment method (e.g. visa)
     */
    paymentMethod?: string;
    /**
     * The email address of the shopper / customer
     */
    payerEmail?: string;
    /**
     * Indicates if the payment account is a virtual credit card
     */
    isVirtual?: boolean;
    /**
     * Indicates if the payment account can be used for capturing payments. A payment account is active, when it has a valid payer reference set
     */
    isActive?: boolean;
}

