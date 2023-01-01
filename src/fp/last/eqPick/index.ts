import _eqPick from 'x/eqPick';

/**
 * Check if prop for obj1 and obj2 are the same
 *
 * @example
 *
 * const obj1 = { a: 1, b: 2, c: 3 };
 * const obj2 = { a: 5, b: 2, c: 1 };
 *
 * eqPick('b', obj1, obj2) -> true
 * eqPick('c', obj1, obj2) -> false
 */
const eqPick = <TObj extends object>(prop: keyof TObj) => (
  (obj1: TObj, obj2: TObj) => _eqPick(obj1, obj2, prop)
);

export default eqPick;
