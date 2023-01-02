import type { Booleanish, Dict, DictKey, ObjectCallback } from 'src/types';
import identity from 'src/identity';
import strictEntries from 'src/strictEntries';

/**
 * Work like pickBy, but only return keys
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
 *
 * const even = pickBy(obj, (num) => num % 2 == 0);
 *
 * even -> ['b', 'd']
 */
const pickKeysBy = <Obj extends Dict>(obj: Obj, callback: ObjectCallback<Obj, Booleanish> = identity): DictKey<Obj>[] => (
  strictEntries(obj)
    .filter(([key, val]) => callback(val, key, obj))
    .map(([key]) => key)
);

export default pickKeysBy;
