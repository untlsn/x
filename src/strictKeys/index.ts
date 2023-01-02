import type { Dict, DictKey } from 'src/types';

/**
 * Native Object keys, but return keyof Obj instead of string
 *
 * @example
 * strictKeys({ a: 1, b: 2, c: 3 }) -> ('a' | 'b' | 'c')[]
 */
const strictKeys = (
  Object.keys as <Obj extends Dict>(obj: Obj) => DictKey<Obj>[]
);

export default strictKeys;
