import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from './trip.interface';

@Injectable({
  providedIn: 'root',
})
export class TripsApi {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getAll$(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl + '/agencies');
  }
  public getById$(id: string): Observable<Trip> {
    return this.http.get<Trip>(this.apiUrl + '/agencies/' + id);
  }

  public post$(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl + '/agencies', trip);
  }
}
