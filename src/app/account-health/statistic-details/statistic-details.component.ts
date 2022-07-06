import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AccountStatisticTypeModel, StatisticType} from "../account-statistic-type.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {AccountStatisticsService} from "../services/account-statistics.service";
import {MatSort} from "@angular/material/sort";
import {DomSanitizer} from "@angular/platform-browser";
import * as moment from "moment";

@Component({
  selector: 'app-statistic-details',
  templateUrl: './statistic-details.component.html',
  styleUrls: ['./statistic-details.component.scss']
})
export class StatisticDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  columns: Array<{
    columnDef: string; header: string
  }> = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = [];
  isLoadingResults = true;

  constructor(@Inject(MAT_DIALOG_DATA) public item: AccountStatisticTypeModel,
              private accountStatisticsService: AccountStatisticsService,
              public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this._fillData().then();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
  }

  private async _fillData() {
    switch (this.item.id) {
      case StatisticType.RESERVATION_WARNINGS:
        await this._fillReservationsWarningsData();
        break;
      case StatisticType.SERVICES_WITHOUT_SUB_ACCOUNTS:
        await this._fillServicesWithoutSubAccountsData();
        break;
      case StatisticType.FOLIOS_WITHOUT_PSP:
        break;
      case StatisticType.RESERVATION_CHECKED_OUT_OPEN_BALANCE:
        await this._fillReservationsWithOpenBalanceData();
        break;
      case StatisticType.RESERVATION_CANCELED_WITHOUT_FEE:
        await this._fillReservationsWithoutFeeData();
        break;
      case StatisticType.FOLIOS_WITH_UNUSUAL_PAYMENTS:
        break;
      case StatisticType.FOLIOS_WITH_MANUAL_CHARGES:
        break;
    }
    this.isLoadingResults = false;
    this.displayedColumns = this.columns.map(x => x.columnDef);
  }

  private async _fillServicesWithoutSubAccountsData() {
    this.columns = [
      {columnDef: "name", header: "Service Name"},
      {columnDef: "propertyId", header: "Property Code"},
    ];
    const servicesWithoutSubAccounts = await this.accountStatisticsService.getServicesWithoutSubAccountsData();
    this.dataSource.data = servicesWithoutSubAccounts.map(item => {
      return {
        name: `<a mat-button style="color: #000" target="_blank" href="https://app.apaleo.com/${item.property.id}/rates/services/${item.id}">${item.name}</a>`,
        propertyId: item.property.id
      };
    })
  }

  private async _fillReservationsWithOpenBalanceData() {
    this.columns = [
      {columnDef: "id", header: "Reservation ID"},
      {columnDef: "property", header: "Property"},
      {columnDef: "status", header: "Status"},
      {columnDef: "departure", header: "Departure"},
      {columnDef: "balance", header: "Balance"},
    ];
    const data = await this.accountStatisticsService.getReservationsWithOpenBalanceData();
    this.dataSource.data = data.map(item => {
      return {
        id: `<a mat-button style="color: #000" target="_blank" href="https://app.apaleo.com/${item.property.id}/reservations/${item.id}/folio">${item.id}</a>`,
        property: `${item.property.name} (${item.property.code})`,
        status: item.status,
        departure: moment(item.departure).format("MMM DD, yyyy"),
        balance: item.balance.amount.toLocaleString(undefined, {
          style: 'currency',
          currency: item.balance.currency,
          maximumFractionDigits: 0
        }),
      };
    })
  }

  private async _fillReservationsWarningsData() {
    this.columns = [
      {columnDef: "id", header: "Reservation ID"},
      {columnDef: "property", header: "Property"},
      {columnDef: "status", header: "Status"},
      {columnDef: "warning", header: "Warning"},
    ];
    const data = await this.accountStatisticsService.getReservationsWithWarningsData();
    this.dataSource.data = data.map(item => {
      return {
        id: `<a mat-button style="color: #000" target="_blank" href="https://app.apaleo.com/${item.property.id}/reservations/${item.id}">${item.id}</a>`,
        property: `${item.property.name} (${item.property.code})`,
        status: item.status,
        warning: item.validationMessages?.map(i => i.message)?.join('<br>') ?? '',
      };
    })
  }

  private async _fillReservationsWithoutFeeData() {
    this.columns = [
      {columnDef: "id", header: "Reservation ID"},
      {columnDef: "property", header: "Property"},
      {columnDef: "status", header: "Status"},
    ];
    const data = await this.accountStatisticsService.getReservationsWithoutFeeData();
    this.dataSource.data = data.map(item => {
      return {
        id: `<a mat-button style="color: #000" target="_blank" href="https://app.apaleo.com/${item.property.id}/reservations/${item.id}/folio">${item.id}</a>`,
        property: `${item.property.name} (${item.property.code})`,
        status: item.status
      };
    })
  }
}
