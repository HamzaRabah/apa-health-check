import {Component, OnInit} from '@angular/core';
import {
  FeatureSettingsService,
  FolioService,
  PropertyItemModel,
  PropertyService,
  ReservationService,
  ServiceService
} from "../../../apaleo-client";
import * as moment from "moment";
import {MatSelectChange} from "@angular/material/select";
import {FormControl, FormGroup} from "@angular/forms";
import {AccountStatisticTypeModel, StatisticType} from "./account-statistic-type.model";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-account-health',
  templateUrl: './account-health.component.html',
  styleUrls: ['./account-health.component.scss']
})
export class AccountHealthComponent implements OnInit {
  properties: Array<PropertyItemModel> = [];
  selectedPropertyId: string = '';
  range = new FormGroup({
    start: new FormControl<Date>(moment().subtract(6, "days").toDate()), end: new FormControl<Date>(moment().toDate()),
  });

  statisticData: Array<AccountStatisticTypeModel> = [];

  constructor(private propertyService: PropertyService,
              private reservationService: ReservationService,
              private servicesService: ServiceService,
              private folioService: FolioService,
              private featureSettingsService: FeatureSettingsService) {
    this.range.valueChanges.subscribe(changes => {
      if (changes.end && changes.start) this.refreshData();
    })
  }

  private get selectedPropertiesIds() {
    return this.selectedPropertyId ? [this.selectedPropertyId] : undefined;
  }

  private get startDate() {
    return moment(this.range.get('start')?.value).format();
  }

  private get endDate() {
    return moment(this.range.get('end')?.value).format();
  }

  ngOnInit(): void {
    this.fillProperties();
    this.refreshData();
  }

  propertyChanged($event: MatSelectChange) {
    this.refreshData();
  }

  private refreshData() {
    this.fillReservationsWarnings()
    this.fillServicesWithoutSubAccount();
    this.fillFolioIssues();
    this.fillReservationsWithoutFees();
    this.fillReservationsCheckedOutWithOpenBalance();
  }

  private fillFolioIssues() {
    let statisticPSPItem = this.statisticData.find(i => i.id === StatisticType.FOLIOS_WITHOUT_PSP);
    if (!statisticPSPItem) {
      statisticPSPItem = new AccountStatisticTypeModel(StatisticType.FOLIOS_WITHOUT_PSP,
        'Manual Payment Transactions',
        0,
        'These are payments that have not been processed by apaleo but were added directly and manually on the reservation folio.\nThese entries are prone to error when selecting the payment type.',
        'https://apaleo.zendesk.com/hc/en-us/articles/360009884959-How-can-I-ensure-a-proper-daily-accounting-check-',
        'receipt'
      );
      this.statisticData.push(statisticPSPItem);
    }
    let statisticChargesItem = this.statisticData.find(i => i.id === StatisticType.FOLIOS_WITH_MANUAL_CHARGES);
    if (!statisticChargesItem) {
      statisticChargesItem = new AccountStatisticTypeModel(StatisticType.FOLIOS_WITH_MANUAL_CHARGES,
        'Folios With Manual Charges',
        0,
        'From Apaleo’s experience: The more manual charges are posted, the more likely it is, that the financial data in not accurate. Can you avoid this by using pre-defined services?',
        '',
        'back_hand'
      );
      this.statisticData.push(statisticChargesItem);
    }
    let statisticPaymentItem = this.statisticData.find(i => i.id === StatisticType.FOLIOS_WITH_UNUSUAL_PAYMENTS);
    if (!statisticPaymentItem) {
      statisticPaymentItem = new AccountStatisticTypeModel(StatisticType.FOLIOS_WITH_UNUSUAL_PAYMENTS,
        'Folios With Unusual Payments Methods',
        0,
        'See those reservations to verify that the correct payment method has been selected.',
        '',
        'radar'
      );
      this.statisticData.push(statisticPaymentItem);
    }
    this.folioService.financeFoliosGet(this.selectedPropertiesIds, undefined, undefined, undefined, false, undefined, undefined, undefined, this.startDate, this.endDate, undefined, undefined, undefined, undefined, undefined, undefined, ["payments", "charges"])
      .subscribe(result => {
        if (statisticPSPItem) statisticPSPItem.value = result?.folios?.filter(item => item.reservation && item.payments && item.payments.filter(pay => !pay.externalReference?.pspReference && !['Other', 'Voucher', 'Lunchcheck', 'Cheque'].includes(pay.method)))?.length ?? 0;
        if (statisticChargesItem) statisticChargesItem.value = result?.folios?.filter(item => item.charges && item.charges.some(charge => !charge.translatedNames))?.length ?? 0;
        if (statisticPaymentItem) statisticPaymentItem.value = result?.folios?.filter(item => item.payments && item.payments.some(pay => ['Other', 'Voucher', 'Lunchcheck', 'CreditCard'].includes(pay.method)))?.length ?? 0;
      })
  }


  private fillReservationsWarnings() {
    let statisticItem = this.statisticData.find(i => i.id === StatisticType.RESERVATION_WARNINGS);
    if (!statisticItem) {
      statisticItem = new AccountStatisticTypeModel(StatisticType.RESERVATION_WARNINGS,
        'Reservations with Warnings',
        0,
        'Reservations with Warnings are not necessarily a problem but need to be monitored.\nAn unusually high number could point to incorrect rate/restriction setup or conflicting settings with your channel manager/OTA.',
        'https://apaleo.zendesk.com/hc/en-us/articles/360009197699-How-do-I-prevent-Over-Bookings-',
        'warning'
      );
      this.statisticData.push(statisticItem);
    }
    this.reservationService.bookingReservationscountGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creation", moment(this.range.get('start')?.value).format(), moment(this.range.get('end')?.value).format(), undefined, undefined, ["OfferNotAvailable", "AutoUnitAssignment"]).subscribe(result => {
      if (statisticItem) statisticItem.value = result?.count ?? 0;
    })
  }

  private fillReservationsWithoutFees() {
    let statisticItem = this.statisticData.find(i => i.id === StatisticType.RESERVATION_CANCELED_WITHOUT_FEE);
    if (!statisticItem) {
      statisticItem = new AccountStatisticTypeModel(StatisticType.RESERVATION_CANCELED_WITHOUT_FEE,
        'Canceled\\NoShow Reservations Without Fees',
        0,
        'Reservations on this list have the status Cancelled/No-Show, but the corresponding pre-set fee has no been added to the folio.',
        'https://apaleo.zendesk.com/hc/en-us/articles/360000987751-Payment-Automation',
        'event_busy'
      );
      this.statisticData.push(statisticItem);
    }
    this.reservationService.bookingReservationscountGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, ["Canceled", "NoShow"], "Creation", moment(this.range.get('start')?.value).format(), moment(this.range.get('end')?.value).format(), undefined, undefined, undefined, undefined, undefined, ["neq_0"]).subscribe(result => {
      if (statisticItem) statisticItem.value = result?.count ?? 0;
    })
  }

  private fillReservationsCheckedOutWithOpenBalance() {
    let statisticItem = this.statisticData.find(i => i.id === StatisticType.RESERVATION_CHECKED_OUT_OPEN_BALANCE);
    if (!statisticItem) {
      statisticItem = new AccountStatisticTypeModel(StatisticType.RESERVATION_CHECKED_OUT_OPEN_BALANCE,
        'Checked-Out but Open Balance',
        0,
        'Here, reservations are flagged, where the balance has not been settled. Reasons could be: Payment is missing, charges have not been corrected (e.g. cancellation) etc.\nMake sure your staff is aligned on your processes.',
        'https://apaleo.zendesk.com/hc/en-us/articles/360018120939-How-to-check-my-open-balances-',
        'balance'
      );
      this.statisticData.push(statisticItem);
    }
    this.reservationService.bookingReservationsGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creation", moment(this.range.get('start')?.value).format(), moment(this.range.get('end')?.value).format(), undefined, undefined, undefined, undefined, undefined, ["neq_0"], undefined, undefined, undefined).subscribe(result => {
      if (statisticItem) statisticItem.value = result?.reservations?.filter(r => moment(r.checkOutTime).isBefore(this.endDate))?.length ?? 0;
    })
  }

  private fillProperties() {
    this.propertyService.inventoryPropertiesGet().subscribe(properties => {
      this.properties = properties.properties;
    })
  }

  private async fillServicesWithoutSubAccount() {
    let statisticItem = this.statisticData.find(i => i.id === StatisticType.SERVICES_WITHOUT_SUB_ACCOUNTS);
    if (!statisticItem) {
      statisticItem = new AccountStatisticTypeModel(StatisticType.SERVICES_WITHOUT_SUB_ACCOUNTS,
        'Services Without Sub-Accounts',
        0,
        'The services listed have no financial sub-account allocated, hence the revenues will end up in a high-level collective revenue account and reporting on this service is difficult.',
        'https://apaleo.zendesk.com/hc/en-us/articles/360019336180-Sub-',
        'priority_high'
      );
      this.statisticData.push(statisticItem);
    }
    if (this.selectedPropertyId) {
      const subAccountEnabled = await this._isSubAccountsEnabledInProperty(this.selectedPropertyId);
      if (!subAccountEnabled) {
        statisticItem.value = 0;
        return;
      }
    }
    this.servicesService
      .rateplanServicesGet(this.selectedPropertyId ? this.selectedPropertyId : undefined, undefined, undefined, undefined, undefined)
      .subscribe(async servicesResult => {
        if (statisticItem) {
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
          statisticItem.value = servicesWithoutSubAccounts.length;
        }
      })
  }

  private async _isSubAccountsEnabledInProperty(propertyId: string) {
    const featureResult = await firstValueFrom(this.featureSettingsService.settingsFeaturesByPropertyIdGet(propertyId));
    return featureResult.areCustomRevenueSubAccountsEnabled;
  }
}
