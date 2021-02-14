import { Component, Input, OnInit } from '@angular/core';
import { Detail } from './detail';

@Component({
  selector: 'ad-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() detail: Detail;

  constructor() { }

  ngOnInit(): void {
  }

}
