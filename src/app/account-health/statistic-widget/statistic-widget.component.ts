import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountStatisticTypeModel, StatisticType} from "../account-statistic-type.model";
import {AnalyticsService} from "../../shared/services/analytics.service";

@Component({
  selector: 'app-statistic-widget',
  templateUrl: './statistic-widget.component.html',
  styleUrls: ['./statistic-widget.component.scss']
})
export class StatisticWidgetComponent implements OnInit {

  @Input() statisticType!: AccountStatisticTypeModel;
  @Output() statisticClicked = new EventEmitter<AccountStatisticTypeModel>();

  constructor(public analyticsService: AnalyticsService) {
  }

  ngOnInit(): void {
  }

  detailsClicked() {
    if (this.statisticType.value > 0) {
      this.analyticsService.trackEvent(`${StatisticType[this.statisticType.id]}_DETAILS`);
      this.statisticClicked.emit(this.statisticType);
    }
  }

  guideClicked() {
    this.analyticsService.trackEvent(`${StatisticType[this.statisticType.id]}_GUIDE`);
  }
}
