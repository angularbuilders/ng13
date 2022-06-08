import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from './agency.interface';

@Injectable({
  providedIn: 'root',
})
export class AgenciesApi {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getAll$(): Observable<Agency[]> {
    return this.http.get<Agency[]>(this.apiUrl + '/agencies');
  }
  public getById$(id: string): Observable<Agency> {
    return this.http.get<Agency>(this.apiUrl + '/agencies/' + id);
  }

  public post$(agency: Agency): Observable<Agency> {
    return this.http.post<Agency>(this.apiUrl + '/agencies', agency);
  }
}
