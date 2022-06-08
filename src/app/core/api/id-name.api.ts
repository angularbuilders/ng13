import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IdName } from './id-name.interface';

@Injectable({
  providedIn: 'root',
})
export class IdNameApi {
  private ranges: IdName[] = [
    { id: 'Orbital', name: '🌎 Orbiting around the earth' },
    {
      id: 'Interplanetary',
      name: '🌕 To the moon and other plantes',
    },
    { id: 'Interstellar', name: '💫 Traveling to other stars' },
  ];
  private statuses = ['Active', 'Pending'];

  public getRanges$(): Observable<IdName[]> {
    return of(this.ranges);
  }
  public getStatuses$(): Observable<string[]> {
    return of(this.statuses);
  }
}
