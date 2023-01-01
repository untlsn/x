import type { Dict, DictKey } from 'x/types';
import pickBy from 'x/pickBy';

/**
 * Filter object by removing keys
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
 * const omitted = omit(obj, ['a', 'b'])
 *
 * omitted -> { c: 3, d: 4, e: 5 }
 */
const omit = <Obj extends Dict, Keys extends DictKey<Obj>>(obj: Obj, keys: Keys[] | Keys): Omit<Obj, Keys> => {
  const stringKeys: string[] = Array.isArray(keys) ? keys : [keys];
  return (
    pickBy(
      obj,
      (_val, key) => !stringKeys.includes(key),
    ) as Omit<Obj, Keys>
  );
};

export default omit;
