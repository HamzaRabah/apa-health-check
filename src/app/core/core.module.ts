import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    BrowserAnimationsModule,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ]
})
export class CoreModule {
}
