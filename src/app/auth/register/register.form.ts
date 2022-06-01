import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BaseForm } from 'src/app/core/base/base-form';
import { FormMessagesService } from 'src/app/core/services/form-messages.service';
import { FormValidatorService } from 'src/app/core/services/form-validator.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css'],
})
export class RegisterForm extends BaseForm implements OnInit {
  constructor(
    formMessages: FormMessagesService,
    formValidator: FormValidatorService,
    formBuilder: FormBuilder
  ) {
    super(formMessages);
    this.form = formBuilder.group(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          formValidator.complexPassword,
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        acceptTerms: new FormControl(false, [Validators.requiredTrue]),
      },
      {
        validators: formValidator.passwordMatch,
      }
    );
  }

  ngOnInit(): void {}

  public getPasswordMatchError() {
    if (!this.form.errors) return '';
    return this.form.errors['passwordMatch'];
  }

  public onSubmitClick() {
    const { name, email, password } = this.form.value;
    const registerData = { name, email, password };
    console.warn('Send register data ', registerData);
  }
}
