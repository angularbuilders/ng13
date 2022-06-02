import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Agency } from './agency.interface';
import { IdName } from './id-name.interface';

@Injectable({
  providedIn: 'root',
})
export class AgenciesService {
  private ranges: IdName[] = [
    { id: 'Orbital', name: '🌎 Orbiting around the earth' },
    {
      id: 'Interplanetary',
      name: '🌕 To the moon and other plantes',
    },
    { id: 'Interstellar', name: '💫 Traveling to other stars' },
  ];
  private statuses = ['Active', 'Pending'];

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getRanges$(): Observable<IdName[]> {
    return of(this.ranges);
  }
  public getStatuses$(): Observable<string[]> {
    return of(this.statuses);
  }

  public getAgencies$(): Observable<Agency[]> {
    return this.http.get<Agency[]>(this.apiUrl + '/agencies');
  }
  public getAgency$(id: string): Observable<Agency> {
    return this.http.get<Agency>(this.apiUrl + '/agencies/' + id);
  }

  public postAgency$(agency: Agency): Observable<Agency> {
    return this.http.post<Agency>(this.apiUrl + '/agencies', agency);
  }
}
