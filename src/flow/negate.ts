import type { Booleanish } from 'x/types';

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
export const negate = (value: Booleanish) => !value;
