import {Component, OnInit} from '@angular/core';
import {
  FolioService, PropertyItemModel, PropertyService, ReservationService, ServiceService
} from "../../../apaleo-client";
import * as moment from "moment";
import {MatSelectChange} from "@angular/material/select";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-account-health',
  templateUrl: './account-health.component.html',
  styleUrls: ['./account-health.component.scss']
})
export class AccountHealthComponent implements OnInit {
  properties: Array<PropertyItemModel> = [];
  selectedPropertyId: string = '';
  range = new FormGroup({
    start: new FormControl<Date>(moment().startOf('month').toDate()), end: new FormControl<Date>(moment().toDate()),
  });
  servicesWithoutSubAccountCount: number = 0;
  reservationsWarningsCount: number = 0;
  foliosWithoutPspCount: number = 0;
  foliosWithManualChargesCount: number = 0;
  foliosWithUnusualPaymentsCount: number = 0;
  reservationsWithoutFeesCount: number = 0;
  reservationsWithOpenBalanceCount: number = -1;
  foliosOpenCount: number = -1;

  constructor(private propertyService: PropertyService, private reservationService: ReservationService, private servicesService: ServiceService, private folioService: FolioService) {
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
    this.refreshData();
    this.fillProperties();
  }

  propertyChanged($event: MatSelectChange) {
    this.refreshData();
  }

  private refreshData() {
    this.fillReservationsWarnings()
    this.fillServicesWithoutSubAccount();
    this.fillFolioIssues();
    this.fillReservationsWithoutFees();
  }

  private fillFolioIssues() {
    this.folioService.financeFoliosGet(this.selectedPropertiesIds, undefined, undefined, undefined, false, undefined, undefined, undefined, this.startDate, this.endDate, undefined, undefined, undefined, undefined, undefined, undefined, ["payments", "charges"])
      .subscribe(result => {
        this.foliosWithoutPspCount = result?.folios?.filter(item => item.reservation && item.payments && item.payments.filter(pay => !pay.externalReference?.pspReference && !['Other', 'Voucher', 'Lunchcheck', 'Cheque'].includes(pay.method)))?.length ?? 0;
        this.foliosWithManualChargesCount = result?.folios?.filter(item => item.charges && item.charges.some(charge => !charge.translatedNames))?.length ?? 0;
        this.foliosWithUnusualPaymentsCount = result?.folios?.filter(item => item.payments && item.payments.some(pay => ['Other', 'Voucher', 'Lunchcheck', 'CreditCard'].includes(pay.method)))?.length ?? 0;
      })
  }

  private fillReservationsWarnings() {
    this.reservationService.bookingReservationscountGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Creation", moment(this.range.get('start')?.value).format(), moment(this.range.get('end')?.value).format(), undefined, undefined, ["OfferNotAvailable", "AutoUnitAssignment"]).subscribe(result => {
      this.reservationsWarningsCount = result?.count ?? 0;
    })
  }

  private fillReservationsWithoutFees() {
    this.reservationService.bookingReservationscountGet(undefined, this.selectedPropertiesIds, undefined, undefined, undefined, undefined, undefined, undefined, ["Canceled", "NoShow"], "Creation", moment(this.range.get('start')?.value).format(), moment(this.range.get('end')?.value).format(), undefined, undefined, undefined, undefined, undefined, ["neq_0"]).subscribe(result => {
      this.reservationsWithoutFeesCount = result?.count ?? 0;
    })
  }

  private fillProperties() {
    this.propertyService.inventoryPropertiesGet().subscribe(properties => {
      this.properties = properties.properties;
    })
  }

  private fillServicesWithoutSubAccount() {
    this.servicesService
      .rateplanServicesGet(this.selectedPropertyId ? this.selectedPropertyId : undefined, undefined, undefined, undefined, undefined)
      .subscribe(services => {
        this.servicesWithoutSubAccountCount = services.services.filter(s => !s.subAccountId).length;
      })
  }
}
