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
  public ranges: IdName[] = [];
  public statuses: string[] = [];

  constructor(private agencies: AgenciesService) {
    agencies.getRanges$().subscribe((ranges) => (this.ranges = ranges));
    agencies.getStatuses$().subscribe((statuses) => (this.statuses = statuses));
  }

  public onSave(newAgencyData: Agency) {
    this.agencies
      .postAgency$(newAgencyData)
      .subscribe((agency) => console.warn('Sent agency ', agency));
  }

  ngOnInit(): void {}
}
