import type { Dict, DictPair } from 'x/types';

/**
 * Native Object entries, but return keyof Obj instead of string
 *
 * @example
 * strictEntries({ a: 1, b: 2, c: 3 }) -> [key: 'a' | 'b' | 'c', val: number][]
 */
const strictEntries = (
  Object.entries as <Obj extends Dict>(obj: Obj) => DictPair<Obj>[]
);

export default strictEntries;
