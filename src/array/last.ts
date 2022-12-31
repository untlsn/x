/**
 * Return last element of array
 * @example
 *
 * const arr = [1, 2, 3, 4, 5];
 *
 * last(arr) -> 5
 */
export function last<T extends string>(str: T): string
export function last<T>(arr: T[]): T
export function last<T>(arr: T[]) {
  return arr[arr.length - 1];
}
