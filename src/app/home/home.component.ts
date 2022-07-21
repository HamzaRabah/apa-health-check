import {Component, OnInit} from '@angular/core';
import {AuthService} from "../core/services/auth.service";

@Component({
  selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  healthCheckAppUrl: string = '';

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.authService.login();
    } else {
      this.authService.getAppUrlInApaleoPMS().then(value => {
        this.healthCheckAppUrl = value;
      })
    }
  }

}
