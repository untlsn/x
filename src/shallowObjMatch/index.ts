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
const shallowObjMatch = <T extends object>(obj1: T, obj2: Partial<T>) => {
  if (obj1 == obj2) return true;

  return Object.entries(obj2).every(([key, val]) => obj1[key] == val);
};

export default shallowObjMatch;
