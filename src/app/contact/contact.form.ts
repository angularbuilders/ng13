import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BaseForm } from '../core/base/base-form';
import { FormMessagesService } from '../core/services/form-messages.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css'],
})
export class ContactForm extends BaseForm implements OnInit {
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
