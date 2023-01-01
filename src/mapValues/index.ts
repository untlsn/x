import type { Dict, ObjectCallback } from 'x/types';
import strictEntries from 'x/strictEntries';

/**
 * Map keys of object
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
 *
 * const doubled = mapValues(obj, (num) => num * 2)
 *
 * doubled -> { a: 2, b: 4, c: 6, d: 8, e: 10 }
 */
const mapValues = <Obj extends Dict, T>(obj: Obj, callback: ObjectCallback<Obj, T>): Record<keyof Obj, T> => (
  Object.fromEntries(
    strictEntries(
      obj,
    ).map(([key, val]) => [key, callback(val, key, obj)]),
  ) as Record<keyof Obj, T>
);

export default mapValues;
