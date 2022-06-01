import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BaseForm } from 'src/app/core/base/base-form';
import { FormMessagesService } from 'src/app/core/services/form-messages.service';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm extends BaseForm implements OnInit {
  // public form: FormGroup;
  public ranges = [
    { id: 'Orbital', name: '🌎 Orbiting around the earth' },
    {
      id: 'Interplanetary',
      name: '🌕 To the moon and other plantes',
    },
    { id: 'Interstellar', name: '💫 Traveling to other stars' },
  ];
  public statuses = ['Active', 'Pending'];

  constructor(formMessages: FormMessagesService, formBuilder: FormBuilder) {
    super(formMessages);
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
    const id = this.getDashId(name);
    const newAgencyData = { id, name, range, status };
    console.warn('Send register data ', newAgencyData);
  }

  private getDashId(str: string): string {
    return str.toLocaleLowerCase().replace(/ /g, '-');
  }

  ngOnInit(): void {}
}
