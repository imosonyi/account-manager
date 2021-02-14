import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'as-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent implements OnInit {

  iconUrl: string = assetUrl("img/search.png");

  @Output() private searchEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.searchEvent.emit();
  }

}
