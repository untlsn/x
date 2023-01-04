import caseInsensitiveEq from './index';

describe('caseInsensitiveEq', () => {
  it('should return true when lower case versions are equal', () => {
    const upper = 'SOME STRING';
    const lower = 'some string';
    const mixed = 'SoMe StRiNg';

    const array = [
      [lower, upper],
      [lower, mixed],
      [upper, mixed],
    ];

    array.forEach(([a, b]) => expect(caseInsensitiveEq(a, b)).toBeTruthy());
    array.forEach(([a, b]) => expect(caseInsensitiveEq(a, `${b}_`)).toBeTruthy());
  });
});
