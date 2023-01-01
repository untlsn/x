import type { Booleanish, Dict, ObjectCallback } from 'x/types';
import type { DictPair } from 'x/types';
import strictEntries from 'x/strictEntries';

/**
 * Iterate over object any return first pair when callback return true
 *
 * @example
 * const empty = { a: 0, b: 0 };
 * const fill = { a: 0, b: 0, c: 2 };
 *
 * objSome(empty, (v) => v) -> undefined
 * // if callback is not defined function will use (v) => v
 * objSome(fill) -> ['c', 2]
 */
const objFind = <Obj extends Dict>(obj: Obj, callback: ObjectCallback<Obj, Booleanish> = Boolean): DictPair<Obj> => (
  strictEntries(obj).find(([key, val]) => callback(val, key, obj)) as any
);

export default objFind;
