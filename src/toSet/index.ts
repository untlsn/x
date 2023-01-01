/**
 * Create Set from array
 * @return Set with data from array
 * @example
 * const arr = [1, 2, 3, 3, 3, 4, 5];
 *
 * const set = toSet(arr)
 *
 * set -> Set(1, 2, 3, 4, 5)
 */
const toSet = <T>(array: T[]) => new Set(array);

export default toSet;
