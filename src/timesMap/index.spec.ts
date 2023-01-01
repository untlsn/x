import timesMap from './index';

describe('timesMap', () => {
  const length = 10;
  const uniqSymbol = Symbol('uniq');

  it('should return array with same value', () => {
    const arr = timesMap(length, () => uniqSymbol);
    arr.forEach((v) => expect(v).toBe(uniqSymbol));
  });
  it('should return value with correct length', () => {
    const arr = timesMap(length, () => uniqSymbol);
    expect(arr).toHaveLength(length);
  });
  it('should return string with correct number', () => {
    const arr = timesMap(length, (i) => `-->${i}<--`);
    arr.forEach((v, i) => expect(v).toBe(`-->${i}<--`));
  });
});
