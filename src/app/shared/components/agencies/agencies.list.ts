import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/core/api/agencies.service';
import { Agency } from 'src/app/core/api/agency.interface';

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
