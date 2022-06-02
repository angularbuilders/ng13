import { Component, OnInit } from '@angular/core';
import { AgenciesService } from '../core/api/agencies.service';
import { Agency } from '../core/api/agency.interface';

@Component({
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css'],
})
export class AgenciesPage implements OnInit {
  public agencies: Agency[] = [];
  constructor(private agenciesService: AgenciesService) {
    agenciesService
      .getAgencies$()
      .subscribe((agencies) => (this.agencies = agencies));
  }

  ngOnInit(): void {}

  public onReload(list: string) {
    console.warn(`♻️ Reloading ${list}`);
    this.agenciesService
      .getAgencies$()
      .subscribe((agencies) => (this.agencies = agencies));
  }
}
