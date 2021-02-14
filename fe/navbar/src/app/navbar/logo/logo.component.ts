import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'nav-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  logoUrl: string = assetUrl("img/logo.png");

  constructor() { }

  ngOnInit(): void {
  }

}
