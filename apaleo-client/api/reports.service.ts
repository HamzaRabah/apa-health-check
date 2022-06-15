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
import { CompaniesVatReportListModel } from '../model/companiesVatReportListModel';
// @ts-ignore
import { GuestReportModel } from '../model/guestReportModel';
// @ts-ignore
import { MessageItemCollection } from '../model/messageItemCollection';
// @ts-ignore
import { OrderedServicesListModel } from '../model/orderedServicesListModel';
// @ts-ignore
import { PropertyPerformanceReportModel } from '../model/propertyPerformanceReportModel';
// @ts-ignore
import { RevenuesReportItemModel } from '../model/revenuesReportItemModel';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ReportsService {

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
     * Returns the number of arrivals in a month for a property
     * Returns number of arriving guests for a property for a certain month. Only over-night rateplans are considered.&lt;br /&gt;  Includes statistical information on purpose of travel, and nationality. The data is taken from the primary guest only.  The status considered are: in-house, confirmed, and checked out.&lt;br&gt;You must have this scope: \&#39;reports.read\&#39;.
     * @param propertyId Requested property.
     * @param month Requested month for the report.
     * @param year Requested year for the report.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public reportsReportsArrivalsGet(propertyId: string, month: number, year: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<GuestReportModel>;
    public reportsReportsArrivalsGet(propertyId: string, month: number, year: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<GuestReportModel>>;
    public reportsReportsArrivalsGet(propertyId: string, month: number, year: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<GuestReportModel>>;
    public reportsReportsArrivalsGet(propertyId: string, month: number, year: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (propertyId === null || propertyId === undefined) {
            throw new Error('Required parameter propertyId was null or undefined when calling reportsReportsArrivalsGet.');
        }
        if (month === null || month === undefined) {
            throw new Error('Required parameter month was null or undefined when calling reportsReportsArrivalsGet.');
        }
        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling reportsReportsArrivalsGet.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (propertyId !== undefined && propertyId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>propertyId, 'propertyId');
        }
        if (month !== undefined && month !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>month, 'month');
        }
        if (year !== undefined && year !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>year, 'year');
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

        return this.httpClient.get<GuestReportModel>(`${this.configuration.basePath}/reports/v1/reports/arrivals`,
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
     * Returns the list of company invoices with information on the company and the VAT breakdown
     * &lt;br&gt;You must have this scope: \&#39;reports.read\&#39;.
     * @param propertyId Property ID
     * @param companyIds Company IDs the report should be generated for
     * @param dateFilter Set a date interval to get the report for. Cannot be more than 1 month.&lt;br /&gt;You can provide an array of string expressions which all need to apply.&lt;br /&gt;Each expression has the form of \&#39;OPERATION_VALUE\&#39; where VALUE needs to be of the valid format of the property type and OPERATION can be:&lt;br /&gt;\&#39;eq\&#39; for equals&lt;br /&gt;\&#39;neq\&#39; for not equals&lt;br /&gt;\&#39;lt\&#39; for less than&lt;br /&gt;\&#39;gt\&#39; for greater than&lt;br /&gt;\&#39;lte\&#39; for less than or equals&lt;br /&gt;\&#39;gte\&#39; for greater than or equals&lt;br /&gt;For instance&lt;br /&gt;\&#39;eq_5\&#39; would mean the value should equal 5&lt;br /&gt;\&#39;lte_7\&#39; would mean the value should be less than or equal to 7
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public reportsReportsCompanyInvoicesVatGet(propertyId: string, companyIds?: Array<string>, dateFilter?: Array<string>, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<CompaniesVatReportListModel>;
    public reportsReportsCompanyInvoicesVatGet(propertyId: string, companyIds?: Array<string>, dateFilter?: Array<string>, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<CompaniesVatReportListModel>>;
    public reportsReportsCompanyInvoicesVatGet(propertyId: string, companyIds?: Array<string>, dateFilter?: Array<string>, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<CompaniesVatReportListModel>>;
    public reportsReportsCompanyInvoicesVatGet(propertyId: string, companyIds?: Array<string>, dateFilter?: Array<string>, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (propertyId === null || propertyId === undefined) {
            throw new Error('Required parameter propertyId was null or undefined when calling reportsReportsCompanyInvoicesVatGet.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (propertyId !== undefined && propertyId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>propertyId, 'propertyId');
        }
        if (companyIds) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                companyIds.join(COLLECTION_FORMATS['csv']), 'companyIds');
        }
        if (dateFilter) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                dateFilter.join(COLLECTION_FORMATS['csv']), 'dateFilter');
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

        return this.httpClient.get<CompaniesVatReportListModel>(`${this.configuration.basePath}/reports/v1/reports/company-invoices-vat`,
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
     * List of ordered services
     * Returns a list of ordered services per day with information about the guest and the reservation this service was ordered for.&lt;br&gt;You must have this scope: \&#39;reports.read\&#39;.
     * @param propertyId Property Id
     * @param serviceIds Service ids the report should be generated for
     * @param from The inclusive start date of the interval.
     * @param to The exclusive end date of the interval.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public reportsReportsOrderedServicesGet(propertyId: string, serviceIds: Array<string>, from: string, to: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<OrderedServicesListModel>;
    public reportsReportsOrderedServicesGet(propertyId: string, serviceIds: Array<string>, from: string, to: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<OrderedServicesListModel>>;
    public reportsReportsOrderedServicesGet(propertyId: string, serviceIds: Array<string>, from: string, to: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<OrderedServicesListModel>>;
    public reportsReportsOrderedServicesGet(propertyId: string, serviceIds: Array<string>, from: string, to: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (propertyId === null || propertyId === undefined) {
            throw new Error('Required parameter propertyId was null or undefined when calling reportsReportsOrderedServicesGet.');
        }
        if (serviceIds === null || serviceIds === undefined) {
            throw new Error('Required parameter serviceIds was null or undefined when calling reportsReportsOrderedServicesGet.');
        }
        if (from === null || from === undefined) {
            throw new Error('Required parameter from was null or undefined when calling reportsReportsOrderedServicesGet.');
        }
        if (to === null || to === undefined) {
            throw new Error('Required parameter to was null or undefined when calling reportsReportsOrderedServicesGet.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (propertyId !== undefined && propertyId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>propertyId, 'propertyId');
        }
        if (serviceIds) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                serviceIds.join(COLLECTION_FORMATS['csv']), 'serviceIds');
        }
        if (from !== undefined && from !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>from, 'from');
        }
        if (to !== undefined && to !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>to, 'to');
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

        return this.httpClient.get<OrderedServicesListModel>(`${this.configuration.basePath}/reports/v1/reports/ordered-services`,
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
     * Returns the property performance report which includes the ADR and the RevPAR for each business day.
     * The property performance API return you key performance indicator for the selected property like occupancy, ADR and RevPAR.  It only considers the originally booked amounts for sold units excluding any additional services or manually posted charges  or allowances. The results can be filterd to only show you data for a certain part of the business. For example you can exclude  day-use reservations or complimentary rate plans.&lt;br&gt;You must have this scope: \&#39;reports.read\&#39;.
     * @param propertyId The ID of the property
     * @param from The inclusive start date of the interval
     * @param to The inclusive end date of the interval
     * @param companyIds The company IDs used to filter the retrieved data
     * @param ratePlanIds The rate plan IDs used to filter the retrieved data
     * @param unitGroupTypes The unit group types used to filter the retrieved data
     * @param unitGroupIds The unit group IDs used to filter the retrieved data
     * @param timeSliceDefinitionIds The time slice definition IDs used to filter the retrieved data
     * @param channelCodes The channel codes used to filter the retrieved data
     * @param travelPurpose The travel purpose to filter the retrieved data
     * @param expand List of all embedded resources that should be expanded in the response. Possible values are: businessDays. All other values will be silently ignored.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public reportsReportsPropertyPerformanceGet(propertyId: string, from: string, to: string, companyIds?: Array<string>, ratePlanIds?: Array<string>, unitGroupTypes?: Array<'BedRoom' | 'MeetingRoom' | 'EventSpace' | 'ParkingLot' | 'Other'>, unitGroupIds?: Array<string>, timeSliceDefinitionIds?: Array<string>, channelCodes?: Array<'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs'>, travelPurpose?: 'Business' | 'Leisure', expand?: Array<'businessDays'>, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<PropertyPerformanceReportModel>;
    public reportsReportsPropertyPerformanceGet(propertyId: string, from: string, to: string, companyIds?: Array<string>, ratePlanIds?: Array<string>, unitGroupTypes?: Array<'BedRoom' | 'MeetingRoom' | 'EventSpace' | 'ParkingLot' | 'Other'>, unitGroupIds?: Array<string>, timeSliceDefinitionIds?: Array<string>, channelCodes?: Array<'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs'>, travelPurpose?: 'Business' | 'Leisure', expand?: Array<'businessDays'>, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<PropertyPerformanceReportModel>>;
    public reportsReportsPropertyPerformanceGet(propertyId: string, from: string, to: string, companyIds?: Array<string>, ratePlanIds?: Array<string>, unitGroupTypes?: Array<'BedRoom' | 'MeetingRoom' | 'EventSpace' | 'ParkingLot' | 'Other'>, unitGroupIds?: Array<string>, timeSliceDefinitionIds?: Array<string>, channelCodes?: Array<'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs'>, travelPurpose?: 'Business' | 'Leisure', expand?: Array<'businessDays'>, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<PropertyPerformanceReportModel>>;
    public reportsReportsPropertyPerformanceGet(propertyId: string, from: string, to: string, companyIds?: Array<string>, ratePlanIds?: Array<string>, unitGroupTypes?: Array<'BedRoom' | 'MeetingRoom' | 'EventSpace' | 'ParkingLot' | 'Other'>, unitGroupIds?: Array<string>, timeSliceDefinitionIds?: Array<string>, channelCodes?: Array<'Direct' | 'BookingCom' | 'Ibe' | 'ChannelManager' | 'Expedia' | 'Homelike' | 'Hrs'>, travelPurpose?: 'Business' | 'Leisure', expand?: Array<'businessDays'>, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (propertyId === null || propertyId === undefined) {
            throw new Error('Required parameter propertyId was null or undefined when calling reportsReportsPropertyPerformanceGet.');
        }
        if (from === null || from === undefined) {
            throw new Error('Required parameter from was null or undefined when calling reportsReportsPropertyPerformanceGet.');
        }
        if (to === null || to === undefined) {
            throw new Error('Required parameter to was null or undefined when calling reportsReportsPropertyPerformanceGet.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (propertyId !== undefined && propertyId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>propertyId, 'propertyId');
        }
        if (from !== undefined && from !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>from, 'from');
        }
        if (to !== undefined && to !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>to, 'to');
        }
        if (companyIds) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                companyIds.join(COLLECTION_FORMATS['csv']), 'companyIds');
        }
        if (ratePlanIds) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                ratePlanIds.join(COLLECTION_FORMATS['csv']), 'ratePlanIds');
        }
        if (unitGroupTypes) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                unitGroupTypes.join(COLLECTION_FORMATS['csv']), 'unitGroupTypes');
        }
        if (unitGroupIds) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                unitGroupIds.join(COLLECTION_FORMATS['csv']), 'unitGroupIds');
        }
        if (timeSliceDefinitionIds) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                timeSliceDefinitionIds.join(COLLECTION_FORMATS['csv']), 'timeSliceDefinitionIds');
        }
        if (channelCodes) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                channelCodes.join(COLLECTION_FORMATS['csv']), 'channelCodes');
        }
        if (travelPurpose !== undefined && travelPurpose !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>travelPurpose, 'travelPurpose');
        }
        if (expand) {
            localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                expand.join(COLLECTION_FORMATS['csv']), 'expand');
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

        return this.httpClient.get<PropertyPerformanceReportModel>(`${this.configuration.basePath}/reports/v1/reports/property-performance`,
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
     * Returns the revenues report for a property
     * &lt;br&gt;You must have this scope: \&#39;reports.read\&#39;.
     * @param propertyId Property ID
     * @param from The inclusive start date of the interval.
     * @param to The exclusive end date of the interval. The interval is limited to 3 months.
     * @param languageCode The language for the the report
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public reportsReportsRevenuesGet(propertyId: string, from: string, to: string, languageCode?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<RevenuesReportItemModel>;
    public reportsReportsRevenuesGet(propertyId: string, from: string, to: string, languageCode?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpResponse<RevenuesReportItemModel>>;
    public reportsReportsRevenuesGet(propertyId: string, from: string, to: string, languageCode?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<HttpEvent<RevenuesReportItemModel>>;
    public reportsReportsRevenuesGet(propertyId: string, from: string, to: string, languageCode?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext}): Observable<any> {
        if (propertyId === null || propertyId === undefined) {
            throw new Error('Required parameter propertyId was null or undefined when calling reportsReportsRevenuesGet.');
        }
        if (from === null || from === undefined) {
            throw new Error('Required parameter from was null or undefined when calling reportsReportsRevenuesGet.');
        }
        if (to === null || to === undefined) {
            throw new Error('Required parameter to was null or undefined when calling reportsReportsRevenuesGet.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (propertyId !== undefined && propertyId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>propertyId, 'propertyId');
        }
        if (from !== undefined && from !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>from, 'from');
        }
        if (to !== undefined && to !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>to, 'to');
        }
        if (languageCode !== undefined && languageCode !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>languageCode, 'languageCode');
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

        return this.httpClient.get<RevenuesReportItemModel>(`${this.configuration.basePath}/reports/v1/reports/revenues`,
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