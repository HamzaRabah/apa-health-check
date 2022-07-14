import {Injectable} from '@angular/core';
import {FeatureSettingsService, FolioService, ReservationService, ServiceService} from "../../../../apaleo-client";
import {BehaviorSubject, firstValueFrom, retry} from "rxjs";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AccountStatisticsService {
  selectedPropertyId: string = '';
  startDate: string = '';
  endDate: string = '';
  private _reservationsWithOpenBalanceCountSubject = new BehaviorSubject<number>(0);
  private _reservationsWithWarningCountSubject = new BehaviorSubject<number>(0);
  private _reservationsWithoutFeeCountSubject = new BehaviorSubject<number>(0);
  private _servicesWithoutSubAccountsCountSubject = new BehaviorSubject<number>(0);
  private _foliosWithoutPSPCountSubject = new BehaviorSubject<number>(0);
  private _foliosWithManualChargesCountSubject = new BehaviorSubject<number>(0);
  private _foliosWithUnusualPaymentsCountSubject = new BehaviorSubject<number>(0);

  constructor(private servicesService: ServiceService,
              private featureSettingsService: FeatureSettingsService,
              private reservationService: ReservationService,
              private folioService: FolioService) {
  }

  public get reservationsWithOpenBalanceCount() {
    return this._reservationsWithOpenBalanceCountSubject.asObservable();
  }

  public get reservationsWithWarningCount() {
    return this._reservationsWithWarningCountSubject.asObservable();
  }

  public get reservationsWithoutFeeCount() {
    return this._reservationsWithoutFeeCountSubject.asObservable();
  }

  public get servicesWithoutSubAccountsCount() {
    return this._servicesWithoutSubAccountsCountSubject.asObservable();
  }

  public get foliosWithoutPSPCount() {
    return this._foliosWithoutPSPCountSubject.asObservable();
  }

  public get foliosWithManualChargesCount() {
    return this._foliosWithManualChargesCountSubject.asObservable();
  }

  public get foliosWithUnusualPaymentsCount() {
    return this._foliosWithUnusualPaymentsCountSubject.asObservable();
  }

  private get selectedPropertiesIds() {
    return this.selectedPropertyId ? [this.selectedPropertyId] : undefined;
  }

  async getReservationsWithOpenBalanceData() {
    const result = await firstValueFrom(this.reservationService.bookingReservationsGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creation", moment(this.startDate).format(), moment(this.endDate).format(), undefined, undefined, undefined, undefined, undefined, ["neq_0"], undefined, undefined, undefined));
    return result?.reservations?.filter(r => moment(r.checkOutTime).isBefore(this.endDate)) ?? [];
  }


  async fetchReservationsWithOpenBalanceCount() {
    const result = await this.getReservationsWithOpenBalanceData();
    this._reservationsWithOpenBalanceCountSubject.next(result.length);
  }

  async getReservationsWithWarningsData() {
    const result = await firstValueFrom(this.reservationService.bookingReservationsGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creation", moment(this.startDate).format(), moment(this.endDate).format(), undefined, undefined, ["OfferNotAvailable", "AutoUnitAssignment"]));
    return result?.reservations ?? [];
  }

  async fetchReservationsWithWarningsCount() {
    const result = await firstValueFrom(this.reservationService.bookingReservationscountGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creation", moment(this.startDate).format(), moment(this.endDate).format(), undefined, undefined, ["OfferNotAvailable", "AutoUnitAssignment"]));
    this._reservationsWithWarningCountSubject.next(result?.count ?? 0);
  }

  async getReservationsWithoutFeeData() {
    const result = await firstValueFrom(this.reservationService.bookingReservationsGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, ["Canceled", "NoShow"], "Creation", moment(this.startDate).format(), moment(this.endDate).format(), undefined, undefined, undefined, undefined, undefined, ["neq_0"]));
    return result?.reservations ?? [];
  }

  async fetchReservationsWithoutFeeCount() {
    const result = await firstValueFrom(this.reservationService.bookingReservationscountGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, ["Canceled", "NoShow"], "Creation", moment(this.startDate).format(), moment(this.endDate).format(), undefined, undefined, undefined, undefined, undefined, ["neq_0"]));
    this._reservationsWithoutFeeCountSubject.next(result?.count ?? 0);
  }

  async fetchFoliosWithoutPSPCount() {
    const result = await this.getFoliosWithoutPSPData();
    this._foliosWithoutPSPCountSubject.next(result.length);
  }

  async getFoliosWithoutPSPData() {
    const result = await firstValueFrom(this.folioService.financeFoliosGet(this.selectedPropertiesIds, undefined, undefined, undefined, false, undefined, undefined, undefined, this.startDate, this.endDate, undefined, undefined, undefined, undefined, undefined, undefined, ["payments"]));
    return result?.folios?.filter(item => item.reservation && item.payments && item.payments.some(pay => !pay.externalReference?.pspReference && !['Other', 'Voucher', 'Lunchcheck', 'Cheque'].includes(pay.method))) ?? [];
  }

  async fetchFoliosWithManualChargesCount() {
    const result = await this.getFoliosWithManualChargesData();
    this._foliosWithManualChargesCountSubject.next(result.length);
  }

  async getFoliosWithManualChargesData() {
    const result = await firstValueFrom(this.folioService.financeFoliosGet(this.selectedPropertiesIds, undefined, undefined, undefined, false, undefined, undefined, undefined, this.startDate, this.endDate, undefined, undefined, undefined, undefined, undefined, undefined, ["charges"]));
    return result?.folios?.filter(item => item.charges && item.charges.some(charge => !charge.translatedNames)) ?? [];
  }

  async fetchFoliosWithUnusualPaymentsCount() {
    const result = await this.getFoliosWithUnusualPaymentsData();
    this._foliosWithUnusualPaymentsCountSubject.next(result.length);
  }

  async getFoliosWithUnusualPaymentsData() {
    const result = await firstValueFrom(this.folioService.financeFoliosGet(this.selectedPropertiesIds, undefined, undefined, undefined, false, undefined, undefined, undefined, this.startDate, this.endDate, undefined, undefined, undefined, undefined, undefined, undefined, ["payments"]));
    return result?.folios?.filter(item => item.payments && item.payments.some(pay => ['Other', 'Voucher', 'Lunchcheck', 'CreditCard'].includes(pay.method))) ?? [];
  }


  async fetchServicesWithoutSubAccountsCount() {
    if (this.selectedPropertyId) {
      const subAccountEnabled = await this._isSubAccountsEnabledInProperty(this.selectedPropertyId);
      if (!subAccountEnabled) {
        this._servicesWithoutSubAccountsCountSubject.next(0);
        return;
      }
    }
    const servicesWithoutSubAccounts = await this.getServicesWithoutSubAccountsData();
    this._servicesWithoutSubAccountsCountSubject.next(servicesWithoutSubAccounts.length);
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
