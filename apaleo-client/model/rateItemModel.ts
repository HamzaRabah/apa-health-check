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
import { RateRestrictionsModel } from './rateRestrictionsModel';
import { CalculatedRateModel } from './calculatedRateModel';
import { MonetaryValueModel } from './monetaryValueModel';


export interface RateItemModel { 
    /**
     * Date and time the rate begins<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    from: string;
    /**
     * Date and time the rate ends<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    to: string;
    price?: MonetaryValueModel;
    includedServicesPrice?: MonetaryValueModel;
    /**
     * A list of prices for occupancies 2 or higher. Only set, if the rate plan defines surcharges for different occupancies
     */
    calculatedPrices?: Array<CalculatedRateModel>;
    restrictions?: RateRestrictionsModel;
}

