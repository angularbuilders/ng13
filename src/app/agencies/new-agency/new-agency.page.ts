import { Component, OnInit } from '@angular/core';
import { AgenciesService } from 'src/app/core/api/agencies.service';
import { Agency } from 'src/app/core/api/agency.interface';
import { IdName } from 'src/app/core/api/id-name.interface';

@Component({
  selector: 'app-new-agency',
  templateUrl: './new-agency.page.html',
  styleUrls: ['./new-agency.page.css'],
})
export class NewAgencyPage implements OnInit {
  public ranges: IdName[];
  public statuses: string[];

  constructor(agencies: AgenciesService) {
    this.ranges = agencies.getRanges();
    this.statuses = agencies.getStatuses();
  }

  public onSave(newAgencyData: Agency) {
    console.warn('Send register data ', newAgencyData);
  }

  ngOnInit(): void {}
}
