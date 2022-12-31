/**
 * Create array of same element
 * @example
 * const arr = times(5, true);
 * arr -> [true, true, true, true, true]
 */
export const timesConst = <T>(length: number, value: T) => (
  Array(length).fill(value)
);
