import asTuple from './index';

describe('asTuple', () => {
  it('should return array from params', () => {
    const arr = [1, 2, 3, 4, 5, 6];

    expect(asTuple(...arr)).toEqual(arr);
  });
});
