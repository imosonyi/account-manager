import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { assetUrl } from 'src/single-spa/asset-url';
import { AccountDetailsService } from '../account-details.service';

@Component({
  selector: 'ad-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {

  iconUrl: string = assetUrl("img/delete.png");

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private accountDetailsService: AccountDetailsService
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.accountDetailsService.deleteById(this.route.snapshot.paramMap.get('id')).subscribe(() => {
      this.router.navigate(['account-search']);
    });
  }

}
