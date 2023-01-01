import timesConst from './index';

describe('timesConst', () => {
  const length = 10;
  const uniqSymbol = Symbol('uniq');

  const arr = timesConst(length, uniqSymbol);
  it('should return array with same value', () => {
    arr.forEach((v) => expect(v).toBe(uniqSymbol));
  });
  it('should return value with correct length', () => {
    expect(arr).toHaveLength(length);
  });
});
