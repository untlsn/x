import type { Dict, DictKey } from 'x/types';
import strictKeys from 'x/strictKeys';

/**
 * Map all values of object to same value
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
 *
 * const only0 = mapConstValues(obj, 0)
 *
 * only0 -> { a: 0, b: 0, c: 0, d: 0, e: 0 }
 */
const mapConstValues = <Obj extends Dict, T>(obj: Obj, value: T): Record<DictKey<Obj>, T> => (
  Object.fromEntries(
    strictKeys(
      obj,
    ).map((key) => [key, value]),
  ) as Record<DictKey<Obj>, T>
);

export default mapConstValues;
