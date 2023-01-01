import pick from './index';

describe('pick', () => {
  it('should return object with only keys', () => {
    const obj = {
      a: 1, b: 2, c: 3, d: 4, e: 5,
    };
    const picked = pick(obj, ['a', 'b']);

    expect(picked).toEqual({ a: 1, b: 2 });
  });
});
