import type { Booleanish, Dict, ObjectCallback } from 'src/types';
import strictEntries from 'src/strictEntries';

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
const objSome = <Obj extends Dict>(obj: Obj, callback: ObjectCallback<Obj, Booleanish> = Boolean) => (
  strictEntries(
    obj,
  ).some(([key, val]) => callback(val, key, obj))
);

export default objSome;
