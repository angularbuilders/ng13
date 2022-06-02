import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css'],
})
export class AgenciesList implements OnInit {
  @Input() public agencies: Agency[] = [];
  @Output() public reload = new EventEmitter<string>();
  public reloading = false;

  constructor() {}

  ngOnInit(): void {}

  public onReloadClick(list: string) {
    this.reloading = true;
    this.reload.next(list);
  }

  public getAgenciesCounter() {
    return this.agencies.length;
  }
}
