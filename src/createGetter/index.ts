/**
 * Create getter for specify prop
 * Set V to force return type
 *
 * @example
 * const getA = createGetter('a');
 *
 * get({ a: 5 }) -> 5
 */
const createGetter = <K extends string | number, V = any>(key: K) => (
  <Obj extends Record<K, V>>(obj: Obj): Obj[K] => obj[key]
);

export default createGetter;
