import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninCallbackComponent} from "./auth/signin-callback/signin-callback.component";

const routes: Routes = [{
  path: 'signin-callback', component: SigninCallbackComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
