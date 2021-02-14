import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
import { TableService } from '../../table.service';

@Component({
  selector: 'as-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.css']
})
export class RefreshButtonComponent implements OnInit {

  refreshIconUrl: string = assetUrl("img/refresh.png");

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
  }

  refresh() {
    this.tableService.refresh();
  }

}
