/**
 * Create array of number from 0 to length
 * @example
 * const arr = times(5);
 * arr -> [0, 1, 2, 3, 4]
 */
export const times = (length: number) => (
  x.timesMap(length, x.identity)
);
