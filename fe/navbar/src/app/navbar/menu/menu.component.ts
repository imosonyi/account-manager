import { Component, OnInit } from '@angular/core';
import { Item } from './menu-item/item';

@Component({
  selector: 'nav-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: Item[] = [
    new Item("/account-search", "Account Search"),
    new Item("/account-details", "Create Account")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
