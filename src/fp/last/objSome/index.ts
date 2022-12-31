import type { Booleanish, Dict, ObjectCallback } from 'src/types';

/**
 * Iterate over object any return true if any of callback return truly value
 * If you only want a values and keys of object, otherwise use objSomeValue of objSomeKeys
 *
 * @example
 * const empty = { a: 0, b: 0 };
 * const fill = { a: 0, b: 0, c: 2 };
 *
 * objSome(empty, (v) => v) -> false
 * // if callback is not defined function will use (v) => v
 * objSome(fill) -> true
 */
export const objSome = <Obj extends Dict>(callback: ObjectCallback<Obj, Booleanish> = Boolean) => (obj: Obj) => (
  Object.entries(obj).some(([key, val]) => callback(val, key, obj))
);

export { objSomeKeys } from './keys';
export { objSomeValues } from './values';
