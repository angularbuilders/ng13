import { Component, OnInit } from '@angular/core';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css'],
})
export class AgenciesPage implements OnInit {
  public agencies: Agency[];
  constructor(agenciesApi: AgenciesApi) {
    this.agencies = agenciesApi.getAll();
  }

  ngOnInit(): void {}

  public onReload(list: string) {
    console.warn(`♻️ Reloading ${list}`);
  }
}
