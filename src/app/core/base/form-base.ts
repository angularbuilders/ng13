import { AbstractControl, FormGroup } from '@angular/forms';
import { FormMessagesService } from '../services/form-messages.service';

export class FormBase {
  public form!: FormGroup;

  constructor(private formMessages: FormMessagesService) {}

  public hasError(controlName: string): boolean {
    return this.formMessages.hasError(this.form, controlName);
  }

  public mustShowMessage(controlName: string): boolean {
    return this.formMessages.mustShowMessage(this.form, controlName);
  }

  public getErrorMessage(controlName: string): string {
    return this.formMessages.getErrorMessage(this.form, controlName);
  }

  protected getControl(controlName: string): AbstractControl | null {
    return this.formMessages.getControl(this.form, controlName);
  }
}
