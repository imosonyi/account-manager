import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Paging } from './paging';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private readonly pagingSubject: Subject<Paging> = new Subject();
  private readonly paging: Paging = new Paging(10, 0);

  constructor() { }

  getPaging(): Observable<Paging> {
    return this.pagingSubject.asObservable();
  }

  refresh() {
    this.pagingSubject.next(this.paging);
  }

  setSize(size: number) {
    if (size <= 0) {
      this.paging.size = 0;
      this.paging.page = 0;
    } else {
      this.paging.size = size;
    }
    this.refresh();
  }

  nextPage() {
    if (this.paging.size > 0) {
      this.paging.page += 1;
    }
    this.refresh();
  }

  prevPage() {
    if (this.paging.size > 0 && this.paging.page > 0) {
      this.paging.page -= 1;
    }
    this.refresh();
  }

}
