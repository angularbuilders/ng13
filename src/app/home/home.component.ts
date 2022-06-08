import { Component, OnInit } from '@angular/core';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public agencies: Agency[];
  public trips: Trip[];

  constructor(private agenciesApi: AgenciesApi, private tripsApi: TripsApi) {
    this.agencies = agenciesApi.getAll();
    this.trips = tripsApi.getAll();
  }

  public onReload(list: string) {
    console.warn(`♻️ Reloading ${list}`);
    if (list === 'agencies') {
      this.agencies = this.agenciesApi.getAll();
    } else if (list === 'trips') {
      this.trips = this.tripsApi.getAll();
    }
  }

  public ngOnInit(): void {}
}
