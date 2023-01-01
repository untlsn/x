import strictKeys from './index';

describe('strictKeys', () => {
  it('should be Object.keys', () => {
    expect(strictKeys).toBe(Object.keys);
  });
});
