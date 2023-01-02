import type { Dict, DictKey } from 'src/types';
import pickBy from 'src/pickBy';

/**
 * Filter object by picking keys
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
 * const picked = pick(obj, ['a', 'b'])
 *
 * picked -> { a: 1, b: 2 }
 */
const pick = <Obj extends Dict, Prop extends DictKey<Obj>>(obj: Obj, props: Prop[]): Pick<Obj, Prop> => {
  const stringKeys: string[] = Array.isArray(props) ? props : [props];

  return (
    pickBy(
      obj,
      (_val, key) => stringKeys.includes(key),
    ) as Pick<Obj, Prop>
  );
};

export default pick;
