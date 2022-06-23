import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-signin-callback',
  templateUrl: './signin-callback.component.html',
  styleUrls: ['./signin-callback.component.sass']
})
export class SigninCallbackComponent implements OnInit {

  constructor(private readonly _router: Router, private readonly _authService: AuthService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this._authService.handleAuthCallback();
    const redirectUrl = this.route.snapshot.queryParamMap.get('redirectTo') ?? ''
    await this._router.navigateByUrl(redirectUrl);
  }

}
