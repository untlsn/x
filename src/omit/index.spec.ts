import omit from './index';

describe('omit', () => {
  it('should return object without keys', () => {
    const obj = {
      a: 1, b: 2, c: 3, d: 4, e: 5,
    };
    const omitted = omit(obj, ['a', 'b']);

    expect(omitted).toEqual({ c: 3, d: 4, e: 5 });
  });
});
