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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { MessageItemCollection } from '../model/messageItemCollection';
// @ts-ignore
import { ServiceOffersModel } from '../model/serviceOffersModel';
// @ts-ignore
import { StayOffersModel } from '../model/stayOffersModel';
// @ts-ignore
import { TimeSliceListModel } from '../model/timeSliceListModel';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class OfferService {

    protected basePath = 'https://api.apaleo.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Returns offers with rates and availabilities for the specified range.
     * Calculates and returns offers per time slice for a specific rate plan, arrival and departure date.&lt;br&gt;You must have at least one of these scopes: \&#39;offer-index.read, offers.read\&#39;.
     * @param ratePlanId
     * @param from &lt;br /&gt;Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot;&gt;ISO8601:2004&lt;/a&gt;
     * @param to &lt;br /&gt;Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot;&gt;ISO8601:2004&lt;/a&gt;
     * @param channelCode
     * @param pageNumber Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page.
     * @param pageSize Page size. If this is not set, the pageNumber will be ignored and all values returned.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public bookingOfferIndexGet(ratePlanId: string, from: string, to: string, channelCode: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<TimeSliceListModel>;
    public bookingOfferIndexGet(ratePlanId: string, from: string, to: string, channelCode: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<TimeSliceListModel>>;
    public bookingOfferIndexGet(ratePlanId: string, from: string, to: string, channelCode: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<TimeSliceListModel>>;
    public bookingOfferIndexGet(ratePlanId: string, from: string, to: string, channelCode: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (ratePlanId === null || ratePlanId === undefined) {
            throw new Error('Required parameter ratePlanId was null or undefined when calling bookingOfferIndexGet.');
        }
        if (from === null || from === undefined) {
            throw new Error('Required parameter from was null or undefined when calling bookingOfferIndexGet.');
        }
        if (to === null || to === undefined) {
            throw new Error('Required parameter to was null or undefined when calling bookingOfferIndexGet.');
        }
        if (channelCode === null || channelCode === undefined) {
            throw new Error('Required parameter channelCode was null or undefined when calling bookingOfferIndexGet.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (ratePlanId !== undefined && ratePlanId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>ratePlanId, 'ratePlanId');
        }
        if (from !== undefined && from !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>from, 'from');
        }
        if (to !== undefined && to !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>to, 'to');
        }
        if (channelCode !== undefined && channelCode !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>channelCode, 'channelCode');
        }
        if (pageNumber !== undefined && pageNumber !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>pageNumber, 'pageNumber');
        }
        if (pageSize !== undefined && pageSize !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>pageSize, 'pageSize');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (oauth2) required
        localVarCredential = this.configuration.lookupCredential('oauth2');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.get<TimeSliceListModel>(`${this.configuration.basePath}/booking/v1/offer-index`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns offers for one specific stay.
     * Calculates and returns available offers for a specific property, arrival and departure date.&lt;br&gt;You must have at least one of these scopes: \&#39;offers.read, reservations.manage\&#39;.
     * @param propertyId The property ID
     * @param arrival Date and optional time of arrival&lt;br /&gt;Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot;&gt;ISO8601:2004&lt;/a&gt;
     * @param departure Date and optional time of departure. Cannot be more than 5 years after arrival.&lt;br /&gt;Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot;&gt;ISO8601:2004&lt;/a&gt;
     * @param adults The number of adults you want offers for
     * @param timeSliceTemplate The time slice template used to filter the rate plans, defaults to \&#39;over night\&#39;
     * @param timeSliceDefinitionIds Time slice definition IDs, used to filter rate plans
     * @param unitGroupIds Unit group IDs, used to filter rate plans
     * @param unitGroupTypes Unit group types, used to filter rate plans
     * @param channelCode Channel code, used to filter the rate plans
     * @param promoCode The promo code associated with a certain special offer
     * @param corporateCode The code associated with a corporate rate
     * @param childrenAges The ages of the children you want offers for
     * @param includeUnavailable Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public bookingOffersGet(propertyId: string, arrival: string, departure: string, adults: number, timeSliceTemplate?: 'DayUse' | 'OverNight', timeSliceDefinitionIds?: Array<string>, unitGroupIds?: Array<string>, unitGroupTypes?: Array<'BedRoom' | 'MeetingRoom' | 'EventSpace' | 'ParkingLot' | 'Other'>, channelCode?: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', promoCode?: string, corporateCode?: string, childrenAges?: Array<number>, includeUnavailable?: boolean, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<StayOffersModel>;
    public bookingOffersGet(propertyId: string, arrival: string, departure: string, adults: number, timeSliceTemplate?: 'DayUse' | 'OverNight', timeSliceDefinitionIds?: Array<string>, unitGroupIds?: Array<string>, unitGroupTypes?: Array<'BedRoom' | 'MeetingRoom' | 'EventSpace' | 'ParkingLot' | 'Other'>, channelCode?: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', promoCode?: string, corporateCode?: string, childrenAges?: Array<number>, includeUnavailable?: boolean, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<StayOffersModel>>;
    public bookingOffersGet(propertyId: string, arrival: string, departure: string, adults: number, timeSliceTemplate?: 'DayUse' | 'OverNight', timeSliceDefinitionIds?: Array<string>, unitGroupIds?: Array<string>, unitGroupTypes?: Array<'BedRoom' | 'MeetingRoom' | 'EventSpace' | 'ParkingLot' | 'Other'>, channelCode?: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', promoCode?: string, corporateCode?: string, childrenAges?: Array<number>, includeUnavailable?: boolean, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<StayOffersModel>>;
    public bookingOffersGet(propertyId: string, arrival: string, departure: string, adults: number, timeSliceTemplate?: 'DayUse' | 'OverNight', timeSliceDefinitionIds?: Array<string>, unitGroupIds?: Array<string>, unitGroupTypes?: Array<'BedRoom' | 'MeetingRoom' | 'EventSpace' | 'ParkingLot' | 'Other'>, channelCode?: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', promoCode?: string, corporateCode?: string, childrenAges?: Array<number>, includeUnavailable?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (propertyId === null || propertyId === undefined) {
            throw new Error('Required parameter propertyId was null or undefined when calling bookingOffersGet.');
        }
        if (arrival === null || arrival === undefined) {
            throw new Error('Required parameter arrival was null or undefined when calling bookingOffersGet.');
        }
        if (departure === null || departure === undefined) {
            throw new Error('Required parameter departure was null or undefined when calling bookingOffersGet.');
        }
        if (adults === null || adults === undefined) {
            throw new Error('Required parameter adults was null or undefined when calling bookingOffersGet.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (propertyId !== undefined && propertyId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>propertyId, 'propertyId');
        }
        if (arrival !== undefined && arrival !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>arrival, 'arrival');
        }
        if (departure !== undefined && departure !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>departure, 'departure');
        }
        if (timeSliceTemplate !== undefined && timeSliceTemplate !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>timeSliceTemplate, 'timeSliceTemplate');
        }
        if (timeSliceDefinitionIds) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                timeSliceDefinitionIds.join(COLLECTION_FORMATS['csv']), 'timeSliceDefinitionIds');
        }
        if (unitGroupIds) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                unitGroupIds.join(COLLECTION_FORMATS['csv']), 'unitGroupIds');
        }
        if (unitGroupTypes) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                unitGroupTypes.join(COLLECTION_FORMATS['csv']), 'unitGroupTypes');
        }
        if (channelCode !== undefined && channelCode !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>channelCode, 'channelCode');
        }
        if (promoCode !== undefined && promoCode !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>promoCode, 'promoCode');
        }
        if (corporateCode !== undefined && corporateCode !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>corporateCode, 'corporateCode');
        }
        if (adults !== undefined && adults !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>adults, 'adults');
        }
        if (childrenAges) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                childrenAges.join(COLLECTION_FORMATS['csv']), 'childrenAges');
        }
        if (includeUnavailable !== undefined && includeUnavailable !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>includeUnavailable, 'includeUnavailable');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (oauth2) required
        localVarCredential = this.configuration.lookupCredential('oauth2');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.get<StayOffersModel>(`${this.configuration.basePath}/booking/v1/offers`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns offers for a specific rate plan.
     * Calculates and returns available offers for a specific rate plan, arrival and departure date.&lt;br&gt;You must have at least one of these scopes: \&#39;offers.read, reservations.manage\&#39;.
     * @param ratePlanId The rate plan ID
     * @param arrival Date and optional time of arrival&lt;br /&gt;Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot;&gt;ISO8601:2004&lt;/a&gt;
     * @param departure Date and optional time of departure. Cannot be more than 5 years after arrival.&lt;br /&gt;Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot;&gt;ISO8601:2004&lt;/a&gt;
     * @param adults The number of adults you want offers for
     * @param channelCode The channel code
     * @param childrenAges The ages of the children you want offers for
     * @param includeUnavailable Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned
     * @param overridePrices Desired prices for each timeslice
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public bookingRatePlanOffersGet(ratePlanId: string, arrival: string, departure: string, adults: number, channelCode?: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', childrenAges?: Array<number>, includeUnavailable?: boolean, overridePrices?: Array<number>, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<StayOffersModel>;
    public bookingRatePlanOffersGet(ratePlanId: string, arrival: string, departure: string, adults: number, channelCode?: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', childrenAges?: Array<number>, includeUnavailable?: boolean, overridePrices?: Array<number>, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<StayOffersModel>>;
    public bookingRatePlanOffersGet(ratePlanId: string, arrival: string, departure: string, adults: number, channelCode?: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', childrenAges?: Array<number>, includeUnavailable?: boolean, overridePrices?: Array<number>, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<StayOffersModel>>;
    public bookingRatePlanOffersGet(ratePlanId: string, arrival: string, departure: string, adults: number, channelCode?: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', childrenAges?: Array<number>, includeUnavailable?: boolean, overridePrices?: Array<number>, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (ratePlanId === null || ratePlanId === undefined) {
            throw new Error('Required parameter ratePlanId was null or undefined when calling bookingRatePlanOffersGet.');
        }
        if (arrival === null || arrival === undefined) {
            throw new Error('Required parameter arrival was null or undefined when calling bookingRatePlanOffersGet.');
        }
        if (departure === null || departure === undefined) {
            throw new Error('Required parameter departure was null or undefined when calling bookingRatePlanOffersGet.');
        }
        if (adults === null || adults === undefined) {
            throw new Error('Required parameter adults was null or undefined when calling bookingRatePlanOffersGet.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (ratePlanId !== undefined && ratePlanId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>ratePlanId, 'ratePlanId');
        }
        if (arrival !== undefined && arrival !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>arrival, 'arrival');
        }
        if (departure !== undefined && departure !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>departure, 'departure');
        }
        if (channelCode !== undefined && channelCode !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>channelCode, 'channelCode');
        }
        if (adults !== undefined && adults !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>adults, 'adults');
        }
        if (childrenAges) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                childrenAges.join(COLLECTION_FORMATS['csv']), 'childrenAges');
        }
        if (includeUnavailable !== undefined && includeUnavailable !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>includeUnavailable, 'includeUnavailable');
        }
        if (overridePrices) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                overridePrices.join(COLLECTION_FORMATS['csv']), 'overridePrices');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (oauth2) required
        localVarCredential = this.configuration.lookupCredential('oauth2');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.get<StayOffersModel>(`${this.configuration.basePath}/booking/v1/rate-plan-offers`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns service offers for one specific stay.
     * &lt;br&gt;You must have at least one of these scopes: \&#39;offers.read, reservations.manage\&#39;.
     * @param ratePlanId The rate plan ID
     * @param arrival Date and optional time of arrival&lt;br /&gt;Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot;&gt;ISO8601:2004&lt;/a&gt;
     * @param departure Date and optional time of departure. Cannot be more than 5 years after arrival.&lt;br /&gt;Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot;&gt;ISO8601:2004&lt;/a&gt;
     * @param adults The number of adults you want offers for
     * @param channelCode The channel code used to filter the services
     * @param childrenAges The ages of the children you want offers for
     * @param onlyDefaultDates Depending on the postNextDay setting of a service it will be posted before or after midnight.  Breakfast is usually delivered on the next morning, having \&#39;postNextDay\&#39; set to true. Its \&#39;default dates\&#39; are from the day after  arrival until the departure day. For services like dinner \&#39;postNextDay\&#39; is false, and default dates are day of arrival until one  day before departure.  With this query parameter set to \&#39;false\&#39;, you can also ask for dates outside of those default dates. It defaults to true.
     * @param includeUnavailable Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public bookingServiceOffersGet(ratePlanId: string, arrival: string, departure: string, adults: number, channelCode?: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', childrenAges?: Array<number>, onlyDefaultDates?: boolean, includeUnavailable?: boolean, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<ServiceOffersModel>;
    public bookingServiceOffersGet(ratePlanId: string, arrival: string, departure: string, adults: number, channelCode?: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', childrenAges?: Array<number>, onlyDefaultDates?: boolean, includeUnavailable?: boolean, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<ServiceOffersModel>>;
    public bookingServiceOffersGet(ratePlanId: string, arrival: string, departure: string, adults: number, channelCode?: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', childrenAges?: Array<number>, onlyDefaultDates?: boolean, includeUnavailable?: boolean, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<ServiceOffersModel>>;
    public bookingServiceOffersGet(ratePlanId: string, arrival: string, departure: string, adults: number, channelCode?: 'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs', childrenAges?: Array<number>, onlyDefaultDates?: boolean, includeUnavailable?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (ratePlanId === null || ratePlanId === undefined) {
            throw new Error('Required parameter ratePlanId was null or undefined when calling bookingServiceOffersGet.');
        }
        if (arrival === null || arrival === undefined) {
            throw new Error('Required parameter arrival was null or undefined when calling bookingServiceOffersGet.');
        }
        if (departure === null || departure === undefined) {
            throw new Error('Required parameter departure was null or undefined when calling bookingServiceOffersGet.');
        }
        if (adults === null || adults === undefined) {
            throw new Error('Required parameter adults was null or undefined when calling bookingServiceOffersGet.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (ratePlanId !== undefined && ratePlanId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>ratePlanId, 'ratePlanId');
        }
        if (arrival !== undefined && arrival !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>arrival, 'arrival');
        }
        if (departure !== undefined && departure !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>departure, 'departure');
        }
        if (channelCode !== undefined && channelCode !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>channelCode, 'channelCode');
        }
        if (adults !== undefined && adults !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>adults, 'adults');
        }
        if (childrenAges) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                childrenAges.join(COLLECTION_FORMATS['csv']), 'childrenAges');
        }
        if (onlyDefaultDates !== undefined && onlyDefaultDates !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>onlyDefaultDates, 'onlyDefaultDates');
        }
        if (includeUnavailable !== undefined && includeUnavailable !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>includeUnavailable, 'includeUnavailable');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (oauth2) required
        localVarCredential = this.configuration.lookupCredential('oauth2');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.get<ServiceOffersModel>(`${this.configuration.basePath}/booking/v1/service-offers`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
