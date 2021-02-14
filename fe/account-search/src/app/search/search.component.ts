import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'as-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search() {
    this.searchService.search();
  }

  searchValue(searchValue: string) {
    this.searchService.searchValue(searchValue);
  }

}
