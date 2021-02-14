import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SearchComponent } from './search/search.component';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { SearchButtonComponent } from './search/search-button/search-button.component';
import { ResultComponent } from './result/result.component';
import { TableComponent } from './table/table.component';
import { TableFooterComponent } from './table/table-footer/table-footer.component';
import { CreateButtonComponent } from './table/table-footer/create-button/create-button.component';
import { RefreshButtonComponent } from './table/table-footer/refresh-button/refresh-button.component';
import { TablePagerComponent } from './table/table-footer/table-pager/table-pager.component';
import { PageSelectorComponent } from './table/table-footer/table-pager/page-selector/page-selector.component';
import { IteratorButtonComponent } from './table/table-footer/table-pager/iterator-button/iterator-button.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    SearchComponent,
    SearchInputComponent,
    SearchButtonComponent,
    ResultComponent,
    TableComponent,
    TableFooterComponent,
    CreateButtonComponent,
    RefreshButtonComponent,
    TablePagerComponent,
    PageSelectorComponent,
    IteratorButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
