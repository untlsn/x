import mapValues from './index';

describe('mapValues', () => {
  it('should change values', () => {
    const obj = {
      a: 1, b: 2, c: 3, d: 4, e: 5,
    };

    const doubled = mapValues(obj, (num) => num * 2);

    expect(doubled).toEqual({
      a: 2, b: 4, c: 6, d: 8, e: 10,
    });
  });
});
