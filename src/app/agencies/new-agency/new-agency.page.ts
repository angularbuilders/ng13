import { Component, OnInit } from '@angular/core';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';
import { IdNameApi } from 'src/app/core/api/id-name.api';
import { IdName } from 'src/app/core/api/id-name.interface';

@Component({
  selector: 'app-new-agency',
  templateUrl: './new-agency.page.html',
  styleUrls: ['./new-agency.page.css'],
})
export class NewAgencyPage implements OnInit {
  public ranges: IdName[] = [];
  public statuses: string[] = [];

  constructor(idNameApi: IdNameApi, private agencyApi: AgenciesApi) {
    idNameApi
      .getRanges$()
      .subscribe((ranges: IdName[]) => (this.ranges = ranges));
    idNameApi
      .getStatuses$()
      .subscribe((statuses: string[]) => (this.statuses = statuses));
  }

  public onSave(newAgencyData: Agency) {
    this.agencyApi
      .post$(newAgencyData)
      .subscribe((agency: any) => console.warn('Sent agency ', agency));
  }

  ngOnInit(): void {}
}
