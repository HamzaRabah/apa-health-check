import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AccountService } from './api/account.service';
import { AccountActionsService } from './api/accountActions.service';
import { AgeCategoryService } from './api/ageCategory.service';
import { AvailabilityService } from './api/availability.service';
import { BlockService } from './api/block.service';
import { BlockActionsService } from './api/blockActions.service';
import { BookingService } from './api/booking.service';
import { BookingLogsService } from './api/bookingLogs.service';
import { CancellationPolicyService } from './api/cancellationPolicy.service';
import { CapturePoliciesService } from './api/capturePolicies.service';
import { CityTaxService } from './api/cityTax.service';
import { CompanyService } from './api/company.service';
import { CorporateCodesService } from './api/corporateCodes.service';
import { CustomSubAccountsService } from './api/customSubAccounts.service';
import { FeatureSettingsService } from './api/featureSettings.service';
import { FinanceLogsService } from './api/financeLogs.service';
import { FolioService } from './api/folio.service';
import { FolioActionsService } from './api/folioActions.service';
import { FolioPaymentsService } from './api/folioPayments.service';
import { GroupService } from './api/group.service';
import { InvoiceService } from './api/invoice.service';
import { InvoiceActionService } from './api/invoiceAction.service';
import { InvoiceAddressService } from './api/invoiceAddress.service';
import { LanguagesService } from './api/languages.service';
import { MaintenanceService } from './api/maintenance.service';
import { NoShowPolicyService } from './api/noShowPolicy.service';
import { OfferService } from './api/offer.service';
import { OperationsService } from './api/operations.service';
import { PromoCodesService } from './api/promoCodes.service';
import { PropertyService } from './api/property.service';
import { PropertySettingsService } from './api/propertySettings.service';
import { RateService } from './api/rate.service';
import { RatePlanService } from './api/ratePlan.service';
import { RatePlanCodesService } from './api/ratePlanCodes.service';
import { ReportsService } from './api/reports.service';
import { ReservationService } from './api/reservation.service';
import { ReservationActionsService } from './api/reservationActions.service';
import { ReservationAvailabilityService } from './api/reservationAvailability.service';
import { ServiceService } from './api/service.service';
import { SubLedgerService } from './api/subLedger.service';
import { TimeSliceDefinitionsService } from './api/timeSliceDefinitions.service';
import { TypesService } from './api/types.service';
import { UnitService } from './api/unit.service';
import { UnitAttributeService } from './api/unitAttribute.service';
import { UnitGroupService } from './api/unitGroup.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
