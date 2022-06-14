import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninCallbackComponent} from "./auth/signin-callback/signin-callback.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [{
  path: 'signin-callback', component: SigninCallbackComponent
}, {
  path: '', component: HomeComponent
},
  { path: 'account', loadChildren: () => import('./account-health/account-health.module').then(m => m.AccountHealthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
