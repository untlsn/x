import type { Booleanish, Dict, ObjectCallback } from 'x/types';
import identity from 'x/identity';
import strictEntries from 'x/strictEntries';

/**
 * filter object like array
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
 *
 * const even = pickBy(obj, (num) => num % 2 == 0);
 *
 * even -> { b: 2, d: 4 }
 */
const pickBy = <Obj extends Dict>(obj: Obj, callback: ObjectCallback<Obj, Booleanish> = identity): Partial<Obj> => (
  Object.fromEntries(
    strictEntries(obj)
      .filter(([key, val]) => callback(val, key, obj)),
  ) as Partial<Obj>
);

export default pickBy;
