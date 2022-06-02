import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgenciesService } from 'src/app/core/api/agencies.service';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.css'],
})
export class AgencyPage implements OnInit {
  public agency: Agency = {} as Agency;
  constructor(route: ActivatedRoute, agenciesService: AgenciesService) {
    const agencyId = route.snapshot.paramMap.get('id') || '';
    agenciesService
      .getAgency$(agencyId)
      .subscribe((agency) => (this.agency = agency));
  }

  ngOnInit(): void {}
}
