import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidatorService {
  constructor() {}

  public passwordMatch(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (!password || !confirmPassword) {
      return {
        passwordMatch: '🔥 No password provided',
      };
    }
    if (password.value !== confirmPassword.value) {
      return {
        passwordMatch: "🔥 Passwords don't match",
      };
    }
    return null;
  }

  public complexPassword(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    if (!password) {
      return {
        complexPassword: '🔥 No password provided',
      };
    }
    // has numbers and letters
    const hasNumbers = /[0-9]/.test(password.value);
    const hasLetters = /[a-z]/.test(password.value);
    if (!hasNumbers || !hasLetters) {
      return {
        complexPassword: '🔥 Password must contain numbers and letters',
      };
    }
    return null;
  }
}
