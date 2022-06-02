import { Component, OnInit } from '@angular/core';
import { AgenciesService } from '../core/api/agencies.service';
import { Agency } from '../core/api/agency.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public agencies: Agency[];
  constructor(agencies: AgenciesService) {
    this.agencies = agencies.getAgencies();
  }
  public onReload(list: string) {
    console.warn(`♻️ Reloading ${list}`);
  }
  public ngOnInit(): void {}
}
