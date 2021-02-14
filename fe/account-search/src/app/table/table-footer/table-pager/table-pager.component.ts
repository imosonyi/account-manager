import { Component, Input, OnInit } from '@angular/core';
import { Direction } from './iterator-button/direction.enum';

@Component({
  selector: 'as-table-pager',
  templateUrl: './table-pager.component.html',
  styleUrls: ['./table-pager.component.css']
})
export class TablePagerComponent implements OnInit {

  @Input() first: boolean;
  @Input() last: boolean;

  left: Direction = Direction.Left;
  right: Direction = Direction.Right;

  constructor() { }

  ngOnInit(): void {
  }

}
