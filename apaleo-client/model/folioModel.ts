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
import { ChargeModel } from './chargeModel';
import { EmbeddedPropertyModel } from './embeddedPropertyModel';
import { EmbeddedReservationModel } from './embeddedReservationModel';
import { TransitoryChargeModel } from './transitoryChargeModel';
import { AllowanceModel } from './allowanceModel';
import { EmbeddedCompanyModel } from './embeddedCompanyModel';
import { EmbeddedFolioModel } from './embeddedFolioModel';
import { MonetaryValueModel } from './monetaryValueModel';
import { FolioDebitorModel } from './folioDebitorModel';
import { EmbeddedInvoiceModel } from './embeddedInvoiceModel';
import { PendingPaymentModel } from './pendingPaymentModel';
import { PaymentModel } from './paymentModel';


export interface FolioModel { 
    /**
     * The id of the folio
     */
    id: string;
    /**
     * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    created: string;
    /**
     * Date of update<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\">ISO8601:2004</a>
     */
    updated: string;
    /**
     * The folio type
     */
    type?: FolioModel.TypeEnum;
    debitor?: FolioDebitorModel;
    /**
     * The date when the folio has been closed
     */
    closingDate?: string;
    reservation?: EmbeddedReservationModel;
    company?: EmbeddedCompanyModel;
    property: EmbeddedPropertyModel;
    /**
     * The list of charges
     */
    charges?: Array<ChargeModel>;
    /**
     * The list of charges
     */
    transitoryCharges?: Array<TransitoryChargeModel>;
    /**
     * The list of payments - <b>DEPRECATED: This field will be removed on July 3rd 2020. Use GET /finance/v1/folios/{folioId}/payments or GET /finance/v1/folios/{folioId}/refunds instead.</b>
     */
    payments?: Array<PaymentModel>;
    /**
     * The list of pending payments - <b>DEPRECATED: This field will be removed on July 3rd 2020. Use GET /finance/v1/folios/{folioId}/payments instead.</b>
     */
    pendingPayments?: Array<PendingPaymentModel>;
    /**
     * The list of allowances
     */
    allowances?: Array<AllowanceModel>;
    balance: MonetaryValueModel;
    /**
     * Set to {true}, if the folio has been checked out on accounts receivable.  If you create an invoice from this folio, it will display the outstanding payments
     */
    checkedOutOnAccountsReceivable?: boolean;
    /**
     * Set to {true} if this is a main folio for the reservation
     */
    isMainFolio?: boolean;
    /**
     * Set to {true} if the folio has no unmoved [transitory] charges, unmoved payments, and allowances.
     */
    isEmpty?: boolean;
    /**
     * All folios that are related to this folio. Either because they belong to the same reservation, or because charges where moved  between them. This is only set on folios of type \'guest\'
     */
    relatedFolios?: Array<EmbeddedFolioModel>;
    /**
     * All invoices that have been created for this folio. This is only set on folios of type \'guest\'
     */
    relatedInvoices?: Array<EmbeddedInvoiceModel>;
    /**
     * Depending on the state of the folio, certain warnings are shown.  This list includes all folio warnings.
     */
    folioWarnings?: Array<FolioModel.FolioWarningsEnum>;
    /**
     * Depending on the state of the folio, certain actions are allowed or not.  This list includes all actions you can perform on this folio.
     */
    allowedActions?: Array<FolioModel.AllowedActionsEnum>;
    /**
     * The maximum payment that can be posted on this folio
     */
    allowedPayment?: number;
    /**
     * The maximum allowance (gross) that can be posted on this folio
     */
    maximumAllowance?: number;
    /**
     * Status of the folio
     */
    status: FolioModel.StatusEnum;
}
export namespace FolioModel {
    export type TypeEnum = 'House' | 'Guest' | 'External';
    export const TypeEnum = {
        House: 'House' as TypeEnum,
        Guest: 'Guest' as TypeEnum,
        External: 'External' as TypeEnum
    };
    export type FolioWarningsEnum = 'IncompleteBillingAddress';
    export const FolioWarningsEnum = {
        IncompleteBillingAddress: 'IncompleteBillingAddress' as FolioWarningsEnum
    };
    export type AllowedActionsEnum = 'AddCharge' | 'AddAllowance' | 'AddCancellationFee' | 'AddNoShowFee' | 'AddPayment' | 'AddRefund' | 'CheckoutOnAr' | 'Close' | 'PostOpenCharges' | 'CorrectFolio' | 'ChangeAddress' | 'ChangeAddressWithSimpleDebitor' | 'Delete' | 'Reopen' | 'CreateInvoice' | 'CreateAdvanceInvoice' | 'CancelLastInvoice' | 'CreateInvoiceWithSimpleDebitor' | 'CreatePrepaymentNotice';
    export const AllowedActionsEnum = {
        AddCharge: 'AddCharge' as AllowedActionsEnum,
        AddAllowance: 'AddAllowance' as AllowedActionsEnum,
        AddCancellationFee: 'AddCancellationFee' as AllowedActionsEnum,
        AddNoShowFee: 'AddNoShowFee' as AllowedActionsEnum,
        AddPayment: 'AddPayment' as AllowedActionsEnum,
        AddRefund: 'AddRefund' as AllowedActionsEnum,
        CheckoutOnAr: 'CheckoutOnAr' as AllowedActionsEnum,
        Close: 'Close' as AllowedActionsEnum,
        PostOpenCharges: 'PostOpenCharges' as AllowedActionsEnum,
        CorrectFolio: 'CorrectFolio' as AllowedActionsEnum,
        ChangeAddress: 'ChangeAddress' as AllowedActionsEnum,
        ChangeAddressWithSimpleDebitor: 'ChangeAddressWithSimpleDebitor' as AllowedActionsEnum,
        Delete: 'Delete' as AllowedActionsEnum,
        Reopen: 'Reopen' as AllowedActionsEnum,
        CreateInvoice: 'CreateInvoice' as AllowedActionsEnum,
        CreateAdvanceInvoice: 'CreateAdvanceInvoice' as AllowedActionsEnum,
        CancelLastInvoice: 'CancelLastInvoice' as AllowedActionsEnum,
        CreateInvoiceWithSimpleDebitor: 'CreateInvoiceWithSimpleDebitor' as AllowedActionsEnum,
        CreatePrepaymentNotice: 'CreatePrepaymentNotice' as AllowedActionsEnum
    };
    export type StatusEnum = 'Open' | 'Closed' | 'ClosedWithInvoice';
    export const StatusEnum = {
        Open: 'Open' as StatusEnum,
        Closed: 'Closed' as StatusEnum,
        ClosedWithInvoice: 'ClosedWithInvoice' as StatusEnum
    };
}


