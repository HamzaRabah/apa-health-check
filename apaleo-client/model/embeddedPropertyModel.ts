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


export interface EmbeddedPropertyModel { 
    /**
     * The property id
     */
    id: string;
    /**
     * The code for the property that can be shown in reports and table views
     */
    code?: string;
    /**
     * The name for the property
     */
    name?: string;
    /**
     * The description for the property
     */
    readonly description?: string;
}

