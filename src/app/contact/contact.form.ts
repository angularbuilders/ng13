import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormBase } from '../core/utils/form-base';
import { FormMessagesService } from '../core/utils/form-messages.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css'],
})
export class ContactForm extends FormBase implements OnInit {
  constructor(formMessages: FormMessagesService, formBuilder: FormBuilder) {
    super(formMessages);
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('Get in contact', [Validators.minLength(9)]),
    });
  }

  ngOnInit(): void {}

  public onSubmitClick() {
    const contact = this.form.value;
    console.warn('Send contact message', contact);
  }
}
