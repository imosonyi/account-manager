import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Header } from './header';
import { Page } from './page';
import { Paging } from './paging';
import { TableService } from './table.service';

@Component({
  selector: 'as-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private pagingSubscription: Subscription;

  @Input() headers: Header[];
  @Input() page: Page<any>;
  @Input() onRowClick: Subscriber<any>;
  @Output() pagingParams: EventEmitter<Paging> = new EventEmitter();

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.pagingSubscription = this.tableService.getPaging().subscribe(paging => {
      this.refresh(paging);
    });
  }

  ngOnDestroy() {
    this.pagingSubscription.unsubscribe();
  }

  refresh(paging: Paging) {
    this.pagingParams.next(paging);
  }

}
