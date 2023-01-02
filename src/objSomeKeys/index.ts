import type { Booleanish, Dict } from 'src/types';

/**
 * Iterate over object any return true if any of callback return truly value
 * Instead of objSome it pass only keys to callback
 *
 * @example
 * const empty = { a: 0, b: 0 };
 * const fill = { a: 0, b: 0, c: 2 };
 *
 * objSome(empty, (v) => v == 'c') -> false
 * objSome(fill, (v) => v == 'c') -> true
 */
const objSomeKeys = <Obj extends Dict>(obj: Obj, callback: (key: keyof Obj) => Booleanish) => (
  Object.values(obj).some(callback)
);

export default objSomeKeys;
