import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from "./shared/services/analytics.service";

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Health Check';

  constructor(private analyticsService: AnalyticsService) {

  }

  ngOnInit(): void {
    this.analyticsService.initialize();
  }
}
