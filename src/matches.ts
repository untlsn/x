// Functions that help with conditions

/**
 * Check if obj1 contain obj2
 *
 * @example
 *
 * const obj = { value: 5, active: true };
 *
 * const isActive = { active: true };
 * const isNotActive = { active: false };
 *
 * shallowObjMatch(obj, isActive) -> true
 * shallowObjMatch(obj, isNotActive) -> false
 */
export const shallowObjMatch = <T extends object>(obj1: T, obj2: Partial<T>) => {
  if (obj1 == obj2) return true;

  return Object.entries(obj2).every(([key, val]) => obj1[key] == val);
};

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
export const eqPick = <TObj extends object>(obj1: TObj, obj2: TObj, prop: keyof TObj) => (
  obj1[prop] === obj2[prop]
);
