import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.css'],
})
export class AgencyPage implements OnInit {
  public agency: Agency = {} as Agency;
  constructor(route: ActivatedRoute, agenciesApi: AgenciesApi) {
    const agencyId = route.snapshot.paramMap.get('id') || '';
    agenciesApi
      .getById$(agencyId)
      .subscribe((agency) => (this.agency = agency));
  }

  ngOnInit(): void {}
}
