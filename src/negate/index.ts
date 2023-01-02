import type { Booleanish } from 'src/types';

/**
 * Return negate value
 * @example
 * negate(true) -> false
 * negate('value') -> false
 * negate(5) -> false
 *
 * negate(false) -> true
 * negate('') -> true
 * negate(0) -> true
 */
const negate = (value: Booleanish) => !value;

export default negate;
