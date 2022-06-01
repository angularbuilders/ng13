import { FormMessagesService } from '../services/form-messages.service';
import { FormBase } from './form-base';

describe('FormBase', () => {
  it('should create an instance', () => {
    expect(new FormBase(new FormMessagesService())).toBeTruthy();
  });
});
