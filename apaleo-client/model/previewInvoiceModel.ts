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
import { StayInfoModel } from './stayInfoModel';
import { CommercialInfoModel } from './commercialInfoModel';
import { InvoicePaymentModel } from './invoicePaymentModel';
import { InvoiceRecipientModel } from './invoiceRecipientModel';
import { TaxDetailModel } from './taxDetailModel';
import { InvoiceLineItemsModel } from './invoiceLineItemsModel';
import { EmbeddedCompanyModel } from './embeddedCompanyModel';
import { MonetaryValueModel } from './monetaryValueModel';
import { InvoiceSenderModel } from './invoiceSenderModel';
import { BankAccountModel } from './bankAccountModel';
import { CreateInvoiceWarningModel } from './createInvoiceWarningModel';


export interface PreviewInvoiceModel { 
    to?: InvoiceRecipientModel;
    /**
     * Describes what will happen, when you try to create an invoice with the folio in the state it is in now.
     */
    createInvoiceAction: PreviewInvoiceModel.CreateInvoiceActionEnum;
    createInvoiceWarning?: CreateInvoiceWarningModel;
    /**
     * Date the invoice has been created
     */
    invoiceDate: string;
    /**
     * The folio this invoice was requested for
     */
    folioId: string;
    from: InvoiceSenderModel;
    commercialInformation: CommercialInfoModel;
    bankAccount?: BankAccountModel;
    /**
     * Specification of the payment terms, as defined in the property
     */
    paymentTerms?: string;
    lineItems: InvoiceLineItemsModel;
    /**
     * A list of all payments
     */
    payments?: Array<InvoicePaymentModel>;
    outstandingPayment?: MonetaryValueModel;
    /**
     * The subtotal, displaying net and tax amount for each VAT type
     */
    taxDetails?: Array<TaxDetailModel>;
    total: MonetaryValueModel;
    stayInfo?: StayInfoModel;
    /**
     * The ID of the property
     */
    propertyId: string;
    /**
     * The country code of the property
     */
    propertyCountryCode: string;
    /**
     * Language which was used to create the invoice
     */
    languageCode: string;
    company?: EmbeddedCompanyModel;
}
export namespace PreviewInvoiceModel {
    export type CreateInvoiceActionEnum = 'CannotCreateInvoice' | 'CreatesInvoice' | 'CreatesInvoiceAndClosesFolio' | 'CreatesArInvoiceAndClosesFolio';
    export const CreateInvoiceActionEnum = {
        CannotCreateInvoice: 'CannotCreateInvoice' as CreateInvoiceActionEnum,
        CreatesInvoice: 'CreatesInvoice' as CreateInvoiceActionEnum,
        CreatesInvoiceAndClosesFolio: 'CreatesInvoiceAndClosesFolio' as CreateInvoiceActionEnum,
        CreatesArInvoiceAndClosesFolio: 'CreatesArInvoiceAndClosesFolio' as CreateInvoiceActionEnum
    };
}

