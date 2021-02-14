import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './navbar/logo/logo.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { MenuItemComponent } from './navbar/menu/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    NavbarComponent,
    LogoComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
