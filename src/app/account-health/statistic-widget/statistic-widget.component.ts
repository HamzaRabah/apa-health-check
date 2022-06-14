import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistic-widget',
  templateUrl: './statistic-widget.component.html',
  styleUrls: ['./statistic-widget.component.scss']
})
export class StatisticWidgetComponent implements OnInit {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() icon: string = 'warning';
  @Input() caption: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
