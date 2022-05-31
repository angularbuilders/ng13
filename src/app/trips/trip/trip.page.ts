import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.css'],
})
export class TripPage implements OnInit {
  public tripId = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tripId = this.route.snapshot.paramMap.get('id') || '';
  }
}
