import noop from './index';

describe('noop', () => {
  it('should do nothing', () => {
    noop();
  });
  it('should return undefined', () => {
    expect(noop()).toBeUndefined();
  });
});
