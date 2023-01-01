import negate from './index';

describe('negate', () => {
  it('should return negate truly value', () => {
    const truly = [true, 'value', 10, {}, [], Symbol('true')];

    truly.forEach((v) => {
      expect(negate(v)).toBe(false);
    });
  });
  it('should return negate falsy value', () => {
    const falsy = [false, '', 0, undefined, null, NaN];

    falsy.forEach((v) => {
      expect(negate(v)).toBe(true);
    });
  });
});
