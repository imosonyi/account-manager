import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountDetails } from './account-details';
import { AccountDetailsService } from './account-details.service';
import { Detail } from './detail/detail';

@Component({
  selector: 'ad-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  details: Detail[] = [];

  constructor(
    private route: ActivatedRoute,
    private accountDetailsService: AccountDetailsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.setDetails(paramMap.get('id'));
    });
  }

  private setDetails(id: string) {
    this.accountDetailsService.findById(id).subscribe(account => {
      this.details = [
        new Detail("Id", account.id),
        new Detail("Name", account.firstname + account.lastname),
        new Detail("E-mail", account.email),
        new Detail("Phone", account.phone),
        new Detail("Status", account.status)
      ];
    });
  }

}
