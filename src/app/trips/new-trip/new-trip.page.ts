import { Component, OnInit } from '@angular/core';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';

@Component({
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.css'],
})
export class NewTripPage implements OnInit {
  public agencies: Agency[] = [];

  constructor(agenciesApi: AgenciesApi, private tripsApi: TripsApi) {
    agenciesApi.getAll$().subscribe((agencies) => (this.agencies = agencies));
  }

  public onSave(newTripData: Partial<Trip>) {
    this.tripsApi.post$(newTripData).subscribe();
  }

  ngOnInit(): void {}
}
