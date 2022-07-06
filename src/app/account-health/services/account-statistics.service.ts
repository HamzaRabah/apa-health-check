import {Injectable} from '@angular/core';
import {FeatureSettingsService, ServiceService} from "../../../../apaleo-client";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountStatisticsService {
  selectedPropertyId: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor(private servicesService: ServiceService,
              private featureSettingsService: FeatureSettingsService) {
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
