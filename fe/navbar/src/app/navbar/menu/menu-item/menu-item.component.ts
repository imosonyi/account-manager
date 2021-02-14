import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'nav-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
