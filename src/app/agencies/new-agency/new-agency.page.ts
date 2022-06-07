import { Component, OnInit } from '@angular/core';
import { Agency } from 'src/app/core/api/agency.interface';
import { IdNameApi } from 'src/app/core/api/id-name.api';
import { IdName } from 'src/app/core/api/id-name.interface';

@Component({
  selector: 'app-new-agency',
  templateUrl: './new-agency.page.html',
  styleUrls: ['./new-agency.page.css'],
})
export class NewAgencyPage implements OnInit {
  public ranges: IdName[];
  public statuses: string[];

  constructor(idNameApi: IdNameApi) {
    this.ranges = idNameApi.getRanges();
    this.statuses = idNameApi.getStatuses();
  }

  public onSave(newAgencyData: Agency) {
    console.warn('Send register data ', newAgencyData);
  }

  ngOnInit(): void {}
}
