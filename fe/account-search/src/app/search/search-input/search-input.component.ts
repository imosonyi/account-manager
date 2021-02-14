import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'as-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @Output() private searchValueEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setSearchValue(searchValue: string) {
    this.searchValueEvent.emit(searchValue);
  }

}
