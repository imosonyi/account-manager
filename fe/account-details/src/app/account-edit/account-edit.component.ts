import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { assetUrl } from 'src/single-spa/asset-url';
import { AccountUpdateRequest } from './account-update-request';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDetailsService } from '../details-view/account-details.service';

@Component({
  selector: 'ad-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  private id: string;

  readonly saveIconUrl: string = assetUrl('img/save.png');
  readonly cancelIconUrl: string = assetUrl('img/cancel.png');
  readonly statuses: string[] = [ 'OPEN', 'CLOSED' ];

  request: AccountUpdateRequest = new AccountUpdateRequest('', '', '', '', 'OPEN');

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private accountDetailsService: AccountDetailsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      if (this.id) {
        this.accountDetailsService.findById(this.id).subscribe(accountDetails => {
          this.request = new AccountUpdateRequest(
            accountDetails.firstname,
            accountDetails.lastname,
            accountDetails.email,
            accountDetails.phone,
            accountDetails.status
          );
        });
      }
    });
  }

  save() {
    this.id ? this.update() : this.create();
  }

  create() {
    this.accountDetailsService.create(this.request).subscribe((response) => {
      this.router.navigate(['account-details', response.headers.get('location')]);
    })
  }

  update() {
    this.accountDetailsService.update(this.id, this.request).subscribe(() => {
      this.router.navigate(['account-details', this.id]);
    })
  }

  cancel() {
    this.location.back();
  }

}
