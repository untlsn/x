import type { Identity } from 'src/identity/types';

/**
 * Return first param
 *
 * @example
 * const a = {};
 * const b = identity(a);
 *
 * a == b -> true
 */
const identity: Identity = (v) => v;

export default identity;
