import { IdName } from './id-name.interface';

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

  public getRanges() {
    return this.ranges;
  }
  public getStatuses() {
    return this.statuses;
  }
}
