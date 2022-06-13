import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninCallbackComponent} from "./auth/signin-callback/signin-callback.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [{
  path: 'signin-callback', component: SigninCallbackComponent
}, {
  path: '', component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
