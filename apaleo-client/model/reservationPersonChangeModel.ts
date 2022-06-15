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
import { ReservationCompanyChangeModel } from './reservationCompanyChangeModel';
import { ReservationAddressChangeModel } from './reservationAddressChangeModel';


export interface ReservationPersonChangeModel { 
    /**
     * Title of the guest
     */
    title?: ReservationPersonChangeModel.TitleEnum;
    /**
     * Gender of the booker
     */
    gender?: ReservationPersonChangeModel.GenderEnum;
    /**
     * First name of the guest
     */
    firstName?: string;
    /**
     * Middle initial of the guest
     */
    middleInitial?: string;
    /**
     * Last name of the guest
     */
    lastName?: string;
    /**
     * Email address of the guest
     */
    email?: string;
    /**
     * Phone number of the guest
     */
    phone?: string;
    address?: ReservationAddressChangeModel;
    /**
     * The guest\'s nationality, in ISO 3166-1 alpha-2 code
     */
    nationalityCountryCode?: string;
    /**
     * The guest\'s identification number for the given identificationType.
     */
    identificationNumber?: string;
    /**
     * The issue date of the guest\'s identification document.
     */
    identificationIssueDate?: string;
    /**
     * The type of the identificationNumber
     */
    identificationType?: ReservationPersonChangeModel.IdentificationTypeEnum;
    /**
     * Two-letter code (ISO Alpha-2) of a language preferred for contact
     */
    preferredLanguage?: string;
    /**
     * Guest\'s birthdate
     */
    birthDate?: string;
    /**
     * Guest\'s place of birth
     */
    birthPlace?: string;
    company?: ReservationCompanyChangeModel;
}
export namespace ReservationPersonChangeModel {
    export type TitleEnum = 'Mr' | 'Ms' | 'Dr' | 'Prof' | 'Mrs' | 'Other';
    export const TitleEnum = {
        Mr: 'Mr' as TitleEnum,
        Ms: 'Ms' as TitleEnum,
        Dr: 'Dr' as TitleEnum,
        Prof: 'Prof' as TitleEnum,
        Mrs: 'Mrs' as TitleEnum,
        Other: 'Other' as TitleEnum
    };
    export type GenderEnum = 'Female' | 'Male' | 'Other';
    export const GenderEnum = {
        Female: 'Female' as GenderEnum,
        Male: 'Male' as GenderEnum,
        Other: 'Other' as GenderEnum
    };
    export type IdentificationTypeEnum = 'SocialInsuranceNumber' | 'PassportNumber' | 'IdNumber' | 'DriverLicenseNumber';
    export const IdentificationTypeEnum = {
        SocialInsuranceNumber: 'SocialInsuranceNumber' as IdentificationTypeEnum,
        PassportNumber: 'PassportNumber' as IdentificationTypeEnum,
        IdNumber: 'IdNumber' as IdentificationTypeEnum,
        DriverLicenseNumber: 'DriverLicenseNumber' as IdentificationTypeEnum
    };
}

