import { Component, Input, OnInit } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'as-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.css']
})
export class TableFooterComponent implements OnInit {

  @Input() page: Page<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
