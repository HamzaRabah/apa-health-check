import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
  ]
})
export class CoreModule {
}
