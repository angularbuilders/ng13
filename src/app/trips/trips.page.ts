import { Component, OnInit } from '@angular/core';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.css'],
})
export class TripsPage implements OnInit {
  public trips: Trip[] = [];
  public reloading = false;

  constructor(private tripsApi: TripsApi) {
    this.trips = tripsApi.getAll();
  }

  public onReload() {
    this.trips = this.tripsApi.getAll();
  }

  ngOnInit(): void {}
}
