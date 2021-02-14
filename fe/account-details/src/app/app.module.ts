import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { DetailComponent } from './details-view/detail/detail.component';
import { EditButtonComponent } from './details-view/edit-button/edit-button.component';
import { DeleteButtonComponent } from './details-view/delete-button/delete-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    DetailsViewComponent,
    AccountEditComponent,
    DetailComponent,
    EditButtonComponent,
    DeleteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
