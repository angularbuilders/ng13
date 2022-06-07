import { Component, OnInit } from '@angular/core';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public agencies: Agency[] = [];
  constructor(private agenciesApi: AgenciesApi) {
    agenciesApi.getAll$().subscribe((agencies) => (this.agencies = agencies));
  }
  public onReload(list: string) {
    console.warn(`♻️ Reloading ${list}`);
    if (list === 'agencies') {
      this.agenciesApi
        .getAll$()
        .subscribe((agencies) => (this.agencies = agencies));
    }
  }
  public ngOnInit(): void {}
}
