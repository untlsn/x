import type { AnyDictKey } from 'src/types';
import strictEntries from 'src/strictEntries';

/**
 * Invert values and keys of object
 *
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
 *
 * const inv = invert(obj);
 *
 * inv -> { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' }
 */
const invert = <Key extends AnyDictKey, Val extends AnyDictKey>(obj: Record<Key, Val>): Record<Val, Key> => (
  Object.fromEntries(
    strictEntries(
      obj,
    ).map(([key, val]) => [val, key]),
  ) as Record<Val, Key>
);

export default invert;
