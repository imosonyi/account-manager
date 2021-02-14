import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from '../search/search.service';
import { Header } from '../table/header';
import { Page } from '../table/page';
import { Paging } from '../table/paging';
import { AccountListItem } from './account-list-item';

@Component({
  selector: 'as-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  headers: Header[] = [
    new Header("id", "Id"),
    new Header("firstname", "Firstname"),
    new Header("lastname", "Lastname"),
    new Header("status", "Status"),
    new Header("createdDate", "Created Date"),
  ];
  page: Page<AccountListItem> = {
    content: [],
    first: true,
    last: true
  };

  private searchSubscription: Subscription;

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.findAll().subscribe(page => {
      this.page = page;
    });
    this.searchSubscription = this.searchService.getSearchResult().subscribe(page => {
      this.page = page;
    });
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  onSelect(accountListItem: AccountListItem) {
    this.router.navigate(['account-details', accountListItem.id]);
  }

  refresh(paging: Paging) {
    this.searchService.searchPage(paging);
  }

}
