import {Component} from '@angular/core';
import {AuthService} from "./core/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'apa-health-check';

  constructor(private authService: AuthService) {
  }

  async onLogin() {
    await this.authService.login();
  }

  async onLogout() {
    await this.authService.logout();
  }
}
