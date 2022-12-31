import type { Booleanish, Dict } from 'src/types';

/**
 * Iterate over object any return true if any of callback return truly value
 * Instead of objSome it only pass values to callback
 *
 * @example
 * const empty = { a: 0, b: 0 };
 * const fill = { a: 0, b: 0, c: 2 };
 *
 * objSome(empty, (v) => v) -> false
 * // if callback is not defined function will use (v) => v
 * objSome(fill) -> true
 */
export const objSomeValues = <Obj extends Dict>(obj: Obj, callback: (value: Obj[keyof Obj]) => Booleanish = Boolean) => (
  Object.values(obj).some(callback)
);
