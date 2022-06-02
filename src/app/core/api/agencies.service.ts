import { Injectable } from '@angular/core';
import { Agency } from './agency.interface';
import { IdName } from './id-name.interface';

@Injectable({
  providedIn: 'root',
})
export class AgenciesService {
  private agencies: Agency[] = [
    {
      id: 'space-y',
      name: 'Space Y',
      range: 'Interplanetary',
      status: 'Active',
    },
    {
      id: 'green-origin',
      name: 'Green Origin',
      range: 'Orbital',
      status: 'Active',
    },
    {
      id: 'virgin-way',
      name: 'Virgin Way',
      range: 'Orbital',
      status: 'Pending',
    },
  ];
  private ranges: IdName[] = [
    { id: 'Orbital', name: '🌎 Orbiting around the earth' },
    {
      id: 'Interplanetary',
      name: '🌕 To the moon and other plantes',
    },
    { id: 'Interstellar', name: '💫 Traveling to other stars' },
  ];
  private statuses = ['Active', 'Pending'];
  constructor() {}

  public getRanges() {
    return this.ranges;
  }
  public getStatuses() {
    return this.statuses;
  }

  public getAgencies() {
    return this.agencies;
  }

  public postAgency(agency: Agency) {
    this.agencies.push(agency);
  }
}
