import mapConstValues from './index';

describe('mapConstValues', () => {
  it('should change values to same value', () => {
    const obj = {
      a: 1, b: 2, c: 3, d: 4, e: 5,
    };
    const uniqSymbol = Symbol('uniq');

    const onlySymbol = mapConstValues(obj, uniqSymbol);

    expect(onlySymbol).toEqual({
      a: uniqSymbol, b: uniqSymbol, c: uniqSymbol, d: uniqSymbol, e: uniqSymbol,
    });
  });
});
