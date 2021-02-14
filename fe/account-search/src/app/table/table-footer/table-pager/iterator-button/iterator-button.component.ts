import { Component, Input, OnInit } from '@angular/core';
import { TableService } from 'src/app/table/table.service';
import { assetUrl } from 'src/single-spa/asset-url';
import { Direction } from './direction.enum';

@Component({
  selector: 'as-iterator-button',
  templateUrl: './iterator-button.component.html',
  styleUrls: ['./iterator-button.component.css']
})
export class IteratorButtonComponent implements OnInit {

  private leftIconUrl: string = assetUrl("img/left.png");
  private rightIconUrl: string = assetUrl("img/right.png");

  @Input() direction: Direction = Direction.None;

  iconUrl: string;

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.iconUrl = this.direction == Direction.Left ? this.leftIconUrl : this.rightIconUrl;
  }

  turn() {
    if (this.direction === Direction.Left) {
      this.tableService.prevPage();
    } else if (this.direction === Direction.Right) {
      this.tableService.nextPage();
    }
  }

}
