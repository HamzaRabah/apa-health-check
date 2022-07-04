import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountStatisticTypeModel, StatisticType} from "../account-statistic-type.model";

@Component({
  selector: 'app-statistic-widget',
  templateUrl: './statistic-widget.component.html',
  styleUrls: ['./statistic-widget.component.scss']
})
export class StatisticWidgetComponent implements OnInit {

  @Input()
  statisticType!: AccountStatisticTypeModel;
  @Output() statisticClicked = new EventEmitter<AccountStatisticTypeModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clicked() {
    if (this.statisticType.value > 0) {
      this.statisticClicked.emit(this.statisticType);
    }
  }

  getAnalyticClass(statisticType: AccountStatisticTypeModel, element: string) {
    return `umami--click--${StatisticType[statisticType.id]}_${element}`;
  }
}
