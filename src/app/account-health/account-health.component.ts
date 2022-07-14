import {Component, OnDestroy, OnInit} from '@angular/core';
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
import {MatDialog} from "@angular/material/dialog";
import {StatisticDetailsComponent} from "./statistic-details/statistic-details.component";
import {AccountStatisticsService} from "./services/account-statistics.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-account-health',
  templateUrl: './account-health.component.html',
  styleUrls: ['./account-health.component.scss']
})
export class AccountHealthComponent implements OnInit, OnDestroy {
  properties: Array<PropertyItemModel> = [];
  selectedPropertyId: string = '';
  range = new FormGroup({
    start: new FormControl<Date>(moment().subtract(6, "days").toDate()), end: new FormControl<Date>(moment().toDate()),
  });

  readonly statisticData: Array<AccountStatisticTypeModel> = this.getStatisticsDataItems();
  private _subscriptionsList: Subscription[] = [];

  constructor(private propertyService: PropertyService,
              private reservationService: ReservationService,
              private servicesService: ServiceService,
              private folioService: FolioService,
              private featureSettingsService: FeatureSettingsService,
              private matDialog: MatDialog,
              private accountStatisticsService: AccountStatisticsService) {
    this.range.valueChanges.subscribe(changes => {
      if (changes.end && changes.start) this.refreshData();
    })
  }

  ngOnDestroy(): void {
    for (const subscription of this._subscriptionsList) {
      subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.fillProperties();
    this.subscribeToData();
    this.refreshData();
  }

  propertyChanged($event: MatSelectChange) {
    this.refreshData();
  }

  onStatisticClicked(item: AccountStatisticTypeModel) {
    this.matDialog.open(StatisticDetailsComponent, {
      data: item
    });
  }

  private getStatisticsDataItems() {
    return [
      new AccountStatisticTypeModel(StatisticType.RESERVATION_CHECKED_OUT_OPEN_BALANCE,
        'Checked-Out but Open Balance',
        0,
        'Here, reservations are flagged, where the balance has not been settled. Reasons could be: Payment is missing, charges have not been corrected (e.g. cancellation) etc.\nMake sure your staff is aligned on your processes.',
        'https://apaleo.zendesk.com/hc/en-us/articles/360018120939-How-to-check-my-open-balances-',
        'balance'
      ),
      new AccountStatisticTypeModel(StatisticType.RESERVATION_WARNINGS,
        'Reservations with Warnings',
        0,
        'Reservations with Warnings are not necessarily a problem but need to be monitored.\nAn unusually high number could point to incorrect rate/restriction setup or conflicting settings with your channel manager/OTA.',
        'https://apaleo.zendesk.com/hc/en-us/articles/360009197699-How-do-I-prevent-Over-Bookings-',
        'warning'
      ),
      new AccountStatisticTypeModel(StatisticType.RESERVATION_CANCELED_WITHOUT_FEE,
        'Canceled\\NoShow Reservations Without Fees',
        0,
        'Reservations on this list have the status Cancelled/No-Show, but the corresponding pre-set fee has no been added to the folio.',
        'https://apaleo.zendesk.com/hc/en-us/articles/360000987751-Payment-Automation',
        'event_busy'
      ),
      new AccountStatisticTypeModel(StatisticType.SERVICES_WITHOUT_SUB_ACCOUNTS,
        'Services Without Sub-Accounts',
        0,
        'The services listed have no financial sub-account allocated, hence the revenues will end up in a high-level collective revenue account and reporting on this service is difficult.',
        'https://apaleo.zendesk.com/hc/en-us/articles/360019336180-Sub-',
        'priority_high'),
      new AccountStatisticTypeModel(StatisticType.FOLIOS_WITHOUT_PSP,
        'Manual Payment Transactions',
        0,
        'These are payments that have not been processed by apaleo but were added directly and manually on the reservation folio.\nThese entries are prone to error when selecting the payment type.',
        'https://apaleo.zendesk.com/hc/en-us/articles/360009884959-How-can-I-ensure-a-proper-daily-accounting-check-',
        'receipt',
        "Except 'Other', 'Voucher', 'Lunchcheck', 'Cheque'"
      ),
      new AccountStatisticTypeModel(StatisticType.FOLIOS_WITH_MANUAL_CHARGES,
        'Folios With Manual Charges',
        0,
        'From Apaleo’s experience: The more manual charges are posted, the more likely it is, that the financial data in not accurate. Can you avoid this by using pre-defined services?',
        '',
        'back_hand'
      ),
      new AccountStatisticTypeModel(StatisticType.FOLIOS_WITH_UNUSUAL_PAYMENTS,
        'Folios With Unusual Payments Methods',
        0,
        'See those reservations to verify that the correct payment method has been selected.',
        '',
        'radar',
        "'Other', 'Voucher', 'Lunchcheck', 'CreditCard'"
      ),
    ];
  }

  private refreshData() {
    this.accountStatisticsService.selectedPropertyId = this.selectedPropertyId;
    this.accountStatisticsService.startDate = moment(this.range.get('start')?.value).format();
    this.accountStatisticsService.endDate = moment(this.range.get('end')?.value).format();
    this.fillReservationsWarnings().then();
    this.fillServicesWithoutSubAccount().then();
    this.fillFolioIssues();
    this.fillReservationsWithoutFees().then();
    this.fillReservationsCheckedOutWithOpenBalance().then();
  }

  private fillFolioIssues() {
    const statisticPSPItem = this.statisticData.find(i => i.id === StatisticType.FOLIOS_WITHOUT_PSP)!;
    statisticPSPItem.isLoading = true;
    this.accountStatisticsService.fetchFoliosWithoutPSPCount().finally(() => {
      statisticPSPItem.isLoading = false;
    });

    const statisticChargesItem = this.statisticData.find(i => i.id === StatisticType.FOLIOS_WITH_MANUAL_CHARGES)!;
    statisticChargesItem.isLoading = true;
    this.accountStatisticsService.fetchFoliosWithManualChargesCount().finally(() => {
      statisticChargesItem.isLoading = false;
    });

    const statisticPaymentItem = this.statisticData.find(i => i.id === StatisticType.FOLIOS_WITH_UNUSUAL_PAYMENTS)!;
    statisticPaymentItem.isLoading = true;
    this.accountStatisticsService.fetchFoliosWithUnusualPaymentsCount().finally(() => {
      statisticPaymentItem.isLoading = false;
    });
  }


  private async fillReservationsWarnings() {
    const statisticItem = this.statisticData.find(i => i.id === StatisticType.RESERVATION_WARNINGS)!;
    try {
      statisticItem.isLoading = true;
      await this.accountStatisticsService.fetchReservationsWithWarningsCount();
    } finally {
      statisticItem.isLoading = false;
    }
  }

  private async fillReservationsWithoutFees() {
    let statisticItem = this.statisticData.find(i => i.id === StatisticType.RESERVATION_CANCELED_WITHOUT_FEE);
    if (!statisticItem)
      return;
    try {
      statisticItem.isLoading = true;
      await this.accountStatisticsService.fetchReservationsWithoutFeeCount();
    } finally {
      statisticItem.isLoading = false;
    }
  }

  private async fillReservationsCheckedOutWithOpenBalance() {
    const statisticItem = this.statisticData.find(i => i.id === StatisticType.RESERVATION_CHECKED_OUT_OPEN_BALANCE);
    if (!statisticItem)
      return;
    try {
      statisticItem.isLoading = true;
      await this.accountStatisticsService.fetchReservationsWithOpenBalanceCount();
    } finally {
      statisticItem.isLoading = false;
    }
  }

  private fillProperties() {
    this.propertyService.inventoryPropertiesGet().subscribe(properties => {
      this.properties = properties.properties;
    })
  }

  private async fillServicesWithoutSubAccount() {
    let statisticItem = this.statisticData.find(i => i.id === StatisticType.SERVICES_WITHOUT_SUB_ACCOUNTS);
    if (!statisticItem)
      return;
    try {
      statisticItem.isLoading = true;
      await this.accountStatisticsService.fetchServicesWithoutSubAccountsCount();
    } finally {
      statisticItem.isLoading = false;
    }
  }

  private subscribeToData() {
    this._subscriptionsList = [
      this.accountStatisticsService.reservationsWithOpenBalanceCount.subscribe(value => {
        const item = this.statisticData.find(i => i.id === StatisticType.RESERVATION_CHECKED_OUT_OPEN_BALANCE);
        if (item) item.value = value;
      }),
      this.accountStatisticsService.reservationsWithWarningCount.subscribe(value => {
        const item = this.statisticData.find(i => i.id === StatisticType.RESERVATION_WARNINGS);
        if (item) item.value = value;
      }),
      this.accountStatisticsService.reservationsWithoutFeeCount.subscribe(value => {
        const item = this.statisticData.find(i => i.id === StatisticType.RESERVATION_CANCELED_WITHOUT_FEE);
        if (item) item.value = value;
      }),
      this.accountStatisticsService.servicesWithoutSubAccountsCount.subscribe(value => {
        const item = this.statisticData.find(i => i.id === StatisticType.SERVICES_WITHOUT_SUB_ACCOUNTS);
        if (item) item.value = value;
      }),
      this.accountStatisticsService.foliosWithoutPSPCount.subscribe(value => {
        const item = this.statisticData.find(i => i.id === StatisticType.FOLIOS_WITHOUT_PSP);
        if (item) item.value = value;
      }),
      this.accountStatisticsService.foliosWithUnusualPaymentsCount.subscribe(value => {
        const item = this.statisticData.find(i => i.id === StatisticType.FOLIOS_WITH_UNUSUAL_PAYMENTS);
        if (item) item.value = value;
      }),
      this.accountStatisticsService.foliosWithManualChargesCount.subscribe(value => {
        const item = this.statisticData.find(i => i.id === StatisticType.FOLIOS_WITH_MANUAL_CHARGES);
        if (item) item.value = value;
      }),
    ];
  }
}
