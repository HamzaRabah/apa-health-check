import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  healthCheckAppUrl: string = 'https://app.apaleo.com/apps';

  constructor() {
  }

  ngOnInit(): void {
  }

}
