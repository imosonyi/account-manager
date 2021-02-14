import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  { path: 'account-details/:id/edit', component: AccountEditComponent },
  { path: 'account-details/:id', component: DetailsViewComponent },
  { path: 'account-details', component: AccountEditComponent },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
