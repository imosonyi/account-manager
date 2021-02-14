import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'ad-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  iconUrl: string = assetUrl("img/edit.png");

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
