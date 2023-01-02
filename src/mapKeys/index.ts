import type { AnyDictKey, Dict, DictVal, ObjectCallback } from 'src/types';
import strictEntries from 'src/strictEntries';

/**
 * Map values of object
 * @example
 * const obj = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' }
 *
 * const doubled = mapKeys(obj, (_val, num) => num * 2)
 *
 * doubled -> { 2: 'a', 4: 'b', 6: 'c', 8: 'd', 10: 'e' }
 */
const mapKeys = <Obj extends Dict, T extends AnyDictKey>(obj: Obj, callback: ObjectCallback<Obj, T>): Record<T, DictVal<Obj>> => (
  Object.fromEntries(
    strictEntries(
      obj,
    ).map(([key, val]) => [callback(val, key, obj), val]),
  ) as Record<T, DictVal<Obj>>
);

export default mapKeys;
