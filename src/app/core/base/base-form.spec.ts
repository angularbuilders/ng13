import { FormMessagesService } from '../services/form-messages.service';
import { BaseForm } from './base-form';

describe('BaseForm', () => {
  it('should create an instance', () => {
    expect(new BaseForm(new FormMessagesService())).toBeTruthy();
  });
});
