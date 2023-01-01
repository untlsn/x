import timesMap from 'x/timesMap';

/**
 * Create array of number from 0 to length
 * @example
 * const arr = times(5);
 * arr -> [0, 1, 2, 3, 4]
 */
const times = (length: number) => (
  timesMap(length, x.identity)
);

export default times;
