import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/table/table.service';

@Component({
  selector: 'as-page-selector',
  templateUrl: './page-selector.component.html',
  styleUrls: ['./page-selector.component.css']
})
export class PageSelectorComponent implements OnInit {

  sizes: string[] = [ "10", "20", "50", "All" ];

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
  }

  changeSize(size: string) {
    if (size === "All") {
      this.tableService.setSize(0);
    } else {
      this.tableService.setSize(parseInt(size));
    }
  }

}
