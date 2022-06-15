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
import { AmountModel } from './amountModel';


export interface ServiceOfferItemModel { 
    /**
     * The date this service is delivered
     */
    serviceDate: string;
    amount: AmountModel;
    /**
     * Depending on the postNextDay setting of the service it will by default be posted before or after midnight.  Breakfast is usually delivered on the next morning, so all the dates from the day after arrival to the departure day  are default dates and will have this flag set to true. Those are also the dates the service will be booked for if  you do not specify dates in the book-service call. Still, you can override this and also book the dates set to IsDefaultDate = false.
     */
    isDefaultDate: boolean;
    /**
     * Rate plans can have additional services. When booking an offer for such rate plans, those services are automatically booked.  They are marked as mandatory and they cannot be removed.
     */
    isMandatory: boolean;
    /**
     * The number of services available.
     */
    availableCount?: number;
}
