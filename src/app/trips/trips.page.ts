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
    this.tripsApi.getAll$().subscribe((trips) => (this.trips = trips));
  }

  public onReload() {
    this.tripsApi.getAll$().subscribe((trips) => (this.trips = trips));
  }

  ngOnInit(): void {}
}
