import { FormBase } from './form-base';
import { FormMessagesService } from './form-messages.service';

describe('FormBase', () => {
  it('should create an instance', () => {
    expect(new FormBase(new FormMessagesService())).toBeTruthy();
  });
});
