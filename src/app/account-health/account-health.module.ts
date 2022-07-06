import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountHealthRoutingModule} from './account-health-routing.module';
import {AccountHealthComponent} from './account-health.component';
import {SharedModule} from "../shared/shared.module";
import { StatisticWidgetComponent } from './statistic-widget/statistic-widget.component';
import { StatisticDetailsComponent } from './statistic-details/statistic-details.component';


@NgModule({
  declarations: [
    AccountHealthComponent,
    StatisticWidgetComponent,
    StatisticDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountHealthRoutingModule,
    SharedModule
  ]
})
export class AccountHealthModule {
}
