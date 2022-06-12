import {Component, OnInit} from '@angular/core';
import {AuthService} from "./core/services/auth.service";

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'apaleo Health Check';

  constructor(public authService: AuthService) {

  }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) this.authService.login();
  }
}
