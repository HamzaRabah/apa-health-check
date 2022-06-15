import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {SigninCallbackComponent} from './auth/signin-callback/signin-callback.component';
import { HomeComponent } from './home/home.component';
import {ApiModule} from "../../apaleo-client";
import {AuthService} from "./core/services/auth.service";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [AppComponent, SigninCallbackComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule,     MatButtonModule,
    ApiModule.forRoot(AuthService.GetApiConfiguration), MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
