export type Identity = <T>(value: T) => T;
/**
 * Return first param
 *
 * @example
 * const a = {};
 * const b = identity(a);
 *
 * a == b -> true
 */
export const identity: Identity = (v) => v;
