import {Injectable} from '@angular/core';
import {FeatureSettingsService, ReservationService, ServiceService} from "../../../../apaleo-client";
import {firstValueFrom, retry} from "rxjs";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AccountStatisticsService {
  selectedPropertyId: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(private servicesService: ServiceService,
              private featureSettingsService: FeatureSettingsService,
              private reservationService: ReservationService) {
  }

  private get selectedPropertiesIds() {
    return this.selectedPropertyId ? [this.selectedPropertyId] : undefined;
  }

  async getReservationsWithOpenBalanceData() {
    const result = await firstValueFrom(this.reservationService.bookingReservationsGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creation", moment(this.startDate).format(), moment(this.endDate).format(), undefined, undefined, undefined, undefined, undefined, ["neq_0"], undefined, undefined, undefined));
    return result?.reservations?.filter(r => moment(r.checkOutTime).isBefore(this.endDate)) ?? [];
  }


  async getReservationsWithOpenBalanceCount() {
    const result = await this.getReservationsWithOpenBalanceData();
    return result.length;
  }

  async getReservationsWithWarningsData() {
    const result = await firstValueFrom(this.reservationService.bookingReservationsGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creation", moment(this.startDate).format(), moment(this.endDate).format(), undefined, undefined, ["OfferNotAvailable", "AutoUnitAssignment"]));
    return result?.reservations ?? [];
  }

  async getReservationsWithWarningsCount() {
    const result = await firstValueFrom(this.reservationService.bookingReservationscountGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creation", moment(this.startDate).format(), moment(this.endDate).format(), undefined, undefined, ["OfferNotAvailable", "AutoUnitAssignment"]));
    return result?.count ?? 0;
  }

  async getReservationsWithoutFeeData() {
    const result = await firstValueFrom(this.reservationService.bookingReservationsGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, ["Canceled", "NoShow"], "Creation", moment(this.startDate).format(), moment(this.endDate).format(), undefined, undefined, undefined, undefined, undefined, ["neq_0"]));
    return result?.reservations ?? [];
  }

  async getReservationsWithoutFeeCount() {
    const result = await firstValueFrom(this.reservationService.bookingReservationscountGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, ["Canceled", "NoShow"], "Creation", moment(this.startDate).format(), moment(this.endDate).format(), undefined, undefined, undefined, undefined, undefined, ["neq_0"]));
    return result?.count ?? 0;
  }


  async getServicesWithoutSubAccountsCount() {
    if (this.selectedPropertyId) {
      const subAccountEnabled = await this._isSubAccountsEnabledInProperty(this.selectedPropertyId);
      if (!subAccountEnabled) {
        return 0;
      }
    }
    const servicesWithoutSubAccounts = await this.getServicesWithoutSubAccountsData();
    return servicesWithoutSubAccounts.length;
  }

  async getServicesWithoutSubAccountsData() {
    const servicesResult = await firstValueFrom(this.servicesService
      .rateplanServicesGet(this.selectedPropertyId ? this.selectedPropertyId : undefined, undefined, undefined, undefined, undefined));
    let servicesWithoutSubAccounts = servicesResult?.services?.filter(s => !s.subAccountId) ?? [];
    if (!this.selectedPropertyId && servicesWithoutSubAccounts.length > 0) {
      const servicesPropertyIds = new Set(servicesWithoutSubAccounts.map(s => s.property.id));
      for (const servicesPropertyId of servicesPropertyIds) {
        const subAccountEnabled = await this._isSubAccountsEnabledInProperty(servicesPropertyId);
        if (!subAccountEnabled) {
          servicesWithoutSubAccounts = servicesWithoutSubAccounts.filter(s => s.property.id != servicesPropertyId);
        }
      }
    }
    return servicesWithoutSubAccounts;
  }

  private async _isSubAccountsEnabledInProperty(propertyId: string) {
    const featureResult = await firstValueFrom(this.featureSettingsService.settingsFeaturesByPropertyIdGet(propertyId));
    return featureResult.areCustomRevenueSubAccountsEnabled;
  }
}
