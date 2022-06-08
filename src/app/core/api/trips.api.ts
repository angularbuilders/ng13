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
    return this.http.get<Trip[]>(this.apiUrl + '/trips');
  }
  public getById$(id: string): Observable<Trip> {
    return this.http.get<Trip>(this.apiUrl + '/trips/' + id);
  }

  public post$(trip: Partial<Trip>): Observable<Partial<Trip>> {
    return this.http.post<Partial<Trip>>(this.apiUrl + '/trips', trip);
  }
}
