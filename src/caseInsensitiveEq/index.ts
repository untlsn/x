/**
 * Convert both strings to lower case and compare it
 *
 * @example
 *
 * const upper = 'SOME STRING';
 * const lower = 'some string';
 * const mixed = 'SoMe StRiNg';
 *
 * x.caseInsensitiveEq(lower, upper) -> true
 * x.caseInsensitiveEq(lower, mixed) -> true
 * x.caseInsensitiveEq(upper, mixed) -> true
 */
const caseInsensitiveEq = (str1: string, str2: string) => (
  str1.toLowerCase() == str2.toLowerCase()
);

export default caseInsensitiveEq;
