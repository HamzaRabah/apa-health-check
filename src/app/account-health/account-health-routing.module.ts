import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountHealthComponent} from './account-health.component';
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes = [{path: '', component: AccountHealthComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountHealthRoutingModule {
}
