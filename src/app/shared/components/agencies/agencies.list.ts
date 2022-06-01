import { Component, OnInit } from '@angular/core';
import { Agency } from 'src/app/core/api/models/agency.interface';
import { AgenciesService } from 'src/app/core/api/services/agencies.service';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css'],
})
export class AgenciesList implements OnInit {
  public agencies: Agency[];
  public reloading = false;

  constructor(agencies: AgenciesService) {
    this.agencies = agencies.getAgencies();
  }

  ngOnInit(): void {}

  public reload(list: string) {
    this.reloading = true;
    console.warn(`♻️ Reloading ${list}`);
  }

  public getAgenciesCounter() {
    return this.agencies.length;
  }
}
