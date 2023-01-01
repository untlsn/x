import pickBy from './index';

describe('pickBy', () => {
  it('should pick even elements', () => {
    const obj = {
      a: 1, b: 2, c: 3, d: 4, e: 5,
    };
    const even = pickBy(obj || {}, (num) => num % 2 == 0);

    expect(even).toEqual({ b: 2, d: 4 });
  });
});
