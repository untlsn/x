/**
 * Work like Array.at, but have better browser support
 * @example
 *
 * const arr = [1, 2, 3, 4, 5];
 *
 * arrayAt(arr, 2) -> 3
 * arrayAt(arr, -1) -> 5
 * arrayAt(arr, -2) == arr.at(-1) -> true
 */
function arrayAt<T extends string>(str: T, index: number): string
function arrayAt<T>(str: T[], index: number): T
function arrayAt<T>(arr: T[], index: number) {
  return index >= 0 ? arr[index] : arr[arr.length + index];
}

export default arrayAt;
