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
import { BookerModel } from './bookerModel';
import { CreatePaymentAccountModel } from './createPaymentAccountModel';
import { CreateReservationModel } from './createReservationModel';


/**
 * With this request you can create a booking
 */
export interface CreateBookingModel { 
    paymentAccount?: CreatePaymentAccountModel;
    booker: BookerModel;
    /**
     * Additional information and comments
     */
    comment?: string;
    /**
     * Additional information and comments by the booker
     */
    bookerComment?: string;
    /**
     * List of reservations to create
     */
    reservations: Array<CreateReservationModel>;
    /**
     * The reference of a payment transaction. This should be set when a payment transaction has been initiated and should be used to complete the transaction upon reservation creation.  When set, the payment transaction completion is always triggered regardless of the reservation guarantee type and payment automation settings.
     */
    transactionReference?: string;
}

