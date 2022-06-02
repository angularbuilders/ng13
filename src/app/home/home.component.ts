import { Component, OnInit } from '@angular/core';
import { AgenciesService } from '../core/api/agencies.service';
import { Agency } from '../core/api/agency.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public agencies: Agency[] = [];
  constructor(private agenciesService: AgenciesService) {
    agenciesService
      .getAgencies$()
      .subscribe((agencies) => (this.agencies = agencies));
  }
  public onReload(list: string) {
    console.warn(`♻️ Reloading ${list}`);
    if (list === 'agencies') {
      this.agenciesService
        .getAgencies$()
        .subscribe((agencies) => (this.agencies = agencies));
    }
  }
  public ngOnInit(): void {}
}
