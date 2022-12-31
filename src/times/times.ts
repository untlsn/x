import { identity } from 'x/flow';
import { timesMap } from 'x/times/index';

/**
 * Create array of number from 0 to length
 * @example
 * const arr = times(5);
 * arr -> [0, 1, 2, 3, 4]
 */
export const times = (length: number) => (
  timesMap(length, identity)
);
