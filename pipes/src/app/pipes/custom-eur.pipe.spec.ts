import { CustomEurPipe } from './custom-eur.pipe';

describe('CustomEurPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomEurPipe();
    expect(pipe).toBeTruthy();
  });
});
