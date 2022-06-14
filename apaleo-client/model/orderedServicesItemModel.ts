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
import { OrderedServicesUnitGroupModel } from './orderedServicesUnitGroupModel';
import { OrderedServicesReservationModel } from './orderedServicesReservationModel';
import { OrderedServicesGuestModel } from './orderedServicesGuestModel';
import { OrderedServicesUnitModel } from './orderedServicesUnitModel';


export interface OrderedServicesItemModel { 
    /**
     * The service id
     */
    id: string;
    /**
     * The code for the service
     */
    code: string;
    /**
     * The name for the service
     */
    name: string;
    /**
     * The date this service is delivered
     */
    serviceDate: string;
    /**
     * The count of services ordered
     */
    count: number;
    guest?: OrderedServicesGuestModel;
    reservation: OrderedServicesReservationModel;
    unit?: OrderedServicesUnitModel;
    unitGroup: OrderedServicesUnitGroupModel;
}

