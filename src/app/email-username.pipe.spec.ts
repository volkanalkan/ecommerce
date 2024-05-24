import { EmailUsernamePipe } from './email-username.pipe';

describe('EmailUsernamePipe', () => {
  it('create an instance', () => {
    const pipe = new EmailUsernamePipe();
    expect(pipe).toBeTruthy();
  });
});
