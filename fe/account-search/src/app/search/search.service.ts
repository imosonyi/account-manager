import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AccountListItem } from '../result/account-list-item';
import { Page } from '../table/page';
import { Paging } from '../table/paging';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly accountManagerUrl = 'http://localhost:8080/accounts'
  private readonly searchSubject: Subject<Page<AccountListItem>> = new Subject();
  private readonly paging: Paging = new Paging(10, 0);
  
  private query: string = "";

  constructor(private http: HttpClient) { }

  findAll(): Observable<Page<AccountListItem>> {
    if (this.paging.size == 0) {
      return this.http.get<any>(this.accountManagerUrl);
    }
    let params = new HttpParams()
        .set('size', `${this.paging.size}`)
        .set('page', `${this.paging.page}`);
    return this.http.get<any>(this.accountManagerUrl, { params: params });
  }

  searchValue(searchValue: string) {
    this.query = searchValue;
    this.search();
  }

  searchPage(paging: Paging) {
    if (paging.size >= 0) {
      this.paging.size = paging.size;
    }
    if (paging.page >= 0) {
      this.paging.page = paging.page;
    }
    this.search();
  }

  search() {
    let params = new HttpParams().set('query', this.query);
    if (this.paging.size != 0) {
      params = params
          .set('size', `${this.paging.size}`)
          .set('page', `${this.paging.page}`);
    }
    this.http.get<any>(this.accountManagerUrl, { params: params }).subscribe(page => {
      this.searchSubject.next(page);
    });
  }

  getSearchResult(): Observable<Page<AccountListItem>> {
    return this.searchSubject.asObservable();
  }

}
