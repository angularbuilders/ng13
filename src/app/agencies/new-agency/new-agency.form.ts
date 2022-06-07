import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { IdNameApi } from 'src/app/core/api/id-name.api';
import { IdName } from 'src/app/core/api/id-name.interface';
import { FormBase } from 'src/app/core/utils/form-base';
import { FormMessagesService } from 'src/app/core/utils/form-messages.service';
import { TransformationsService } from 'src/app/core/utils/transformations.service';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm extends FormBase implements OnInit {
  public ranges: IdName[];
  public statuses: string[];

  constructor(
    private agenciesApi: AgenciesApi,
    private idNamesApi: IdNameApi,
    formBuilder: FormBuilder,
    formMessages: FormMessagesService,
    private transformations: TransformationsService
  ) {
    super(formMessages);
    this.ranges = idNamesApi.getRanges();
    this.statuses = idNamesApi.getStatuses();
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[0]),
    });
  }

  public onChange(field: string, event: Event) {
    const control = this.getControl(field);
    if (!control) return;
    const selectElement = event.target as HTMLSelectElement;
    control.setValue(selectElement.value, { onlySelf: true });
  }

  public onSubmitClick() {
    const { name, range, status } = this.form.value;
    const id = this.transformations.getDashId(name);
    const newAgencyData = { id, name, range, status };
    console.warn('Send register data ', newAgencyData);
    this.agenciesApi.post(newAgencyData);
  }

  ngOnInit(): void {}
}
