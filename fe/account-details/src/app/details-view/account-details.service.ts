import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountUpdateRequest } from '../account-edit/account-update-request';
import { AccountDetails } from './account-details';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

  private readonly accountManagerUrl = 'http://localhost:8080/accounts'

  constructor(private http: HttpClient) { }

  create(request: AccountUpdateRequest): Observable<HttpResponse<void>> {
    return this.http.post<void>(this.accountManagerUrl, request, { observe: 'response' });
  }

  update(id: string, request: AccountUpdateRequest): Observable<void> {
    return this.http.put<void>(`${this.accountManagerUrl}/${id}`, request);
  }

  findById(id: string): Observable<AccountDetails> {
    return this.http.get<AccountDetails>(`${this.accountManagerUrl}/${id}`);
  }

  deleteById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.accountManagerUrl}/${id}`);
  }

}
