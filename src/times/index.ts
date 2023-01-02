import timesMap from 'src/timesMap';
import identity from 'src/identity';

/**
 * Create array of number from 0 to length
 * @example
 * const arr = times(5);
 * arr -> [0, 1, 2, 3, 4]
 */
const times = (length: number): number[] => (
  timesMap(length, identity)
);

export default times;
