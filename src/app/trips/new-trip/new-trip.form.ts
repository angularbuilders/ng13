import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Agency } from 'src/app/core/api/agency.interface';
import { Trip } from 'src/app/core/api/trip.interface';
import { FormBase } from 'src/app/core/utils/form-base';
import { FormMessagesService } from 'src/app/core/utils/form-messages.service';

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.css'],
})
export class NewTripForm extends FormBase implements OnInit {
  @Input() public agencies: Agency[] = [];
  @Output() public save = new EventEmitter<Partial<Trip>>();
  constructor(formBuilder: FormBuilder, fms: FormMessagesService) {
    super(fms);
    this.form = formBuilder.group(
      {
        agencyId: new FormControl('', [Validators.required]),
        destination: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        places: new FormControl(1, [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]),
        startDate: new FormControl(),
        endDate: new FormControl('03/08/2002'),
      },
      {
        validators: [this.datesRange],
      }
    );
  }

  public onSubmitClick() {
    const { agencyId, destination, places, startDate, endDate } =
      this.form.value;
    const id = this.getDashId(agencyId + ' ' + destination);
    const newTripData = {
      id,
      agencyId,
      destination,
      places,
      startDate,
      endDate,
    };
    console.warn('Send trip data ', newTripData);
    this.save.emit(newTripData);
  }

  private datesRange(form: AbstractControl): ValidationErrors | null {
    const startDate = form.get('startDate');
    const endDate = form.get('endDate');
    if (!startDate || !endDate) {
      return {
        datesRange: 'No dates provided',
      };
    }
    if (startDate.value > endDate.value) {
      return {
        datesRange: 'Dates are not in a range',
      };
    }
    return null;
  }

  public getDatesRangeMessage() {
    const errors = this.form.errors;
    if (!errors) return '';
    if (errors['datesRange']) return errors['datesRange'];
    return '';
  }

  private getDashId(str: string): string {
    return str.toLocaleLowerCase().replace(/ /g, '-');
  }

  ngOnInit(): void {}
}
