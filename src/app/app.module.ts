import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {SigninCallbackComponent} from './auth/signin-callback/signin-callback.component';
import {SharedModule} from "./shared/shared.module";
import { HomeComponent } from './home/home.component';
import {ApiModule} from "../../apaleo-client";
import {AuthService} from "./core/services/auth.service";

@NgModule({
  declarations: [AppComponent, SigninCallbackComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule,
    ApiModule.forRoot(AuthService.GetApiConfiguration)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
