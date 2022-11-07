import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from "../core/services/auth.service";

@Component({
  selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {
  healthCheckAppUrl: string = '';

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.authService.login();
    }
  }

  ngDoCheck(): void {
    if (this.healthCheckAppUrl.length > 0 || !this.authService.isAuthenticated())
      return;
    this.authService.getAppUrlInApaleoPMS().then(value => {
      this.healthCheckAppUrl = value;
    });
  }
}
