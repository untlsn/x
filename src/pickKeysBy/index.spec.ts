import pickKeysBy from './index';

describe('pickKeysBy', () => {
  it('should work like pickBy, but return only keys', () => {
    const obj = {
      a: 1, b: 2, c: 3, d: 4, e: 5,
    };
    const even = pickKeysBy(obj || {}, (num) => num % 2 == 0);

    expect(even).toContain('b');
    expect(even).toContain('d');
  });
});
