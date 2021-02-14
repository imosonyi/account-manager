import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'as-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.css']
})
export class CreateButtonComponent implements OnInit {

  createIconUrl: string = assetUrl("img/plus.png");

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['account-details']);
  }

}
