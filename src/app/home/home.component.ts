import {Component, OnInit} from '@angular/core';
import {AuthService} from "../core/services/auth.service";

@Component({
  selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  healthCheckAppUrl: string = 'https://app.apaleo.com/apps';

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) this.authService.login();
  }

}
