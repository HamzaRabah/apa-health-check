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
import { ReservationCreatedModel } from './reservationCreatedModel';


export interface BookingCreatedModel { 
    /**
     * Booking id
     */
    id: string;
    /**
     * List of ids for newly created reservations
     */
    reservationIds: Array<ReservationCreatedModel>;
}

