/**
 * Zip 3 elements
 * @example
 *
 * const arr1 = [1, 2, 3]
 * const arr2 = ['a', 'b', 'c']
 * const arr3 = [true, false, true]
 *
 * zip3(arr1, arr2, arr3) -> [[1, 'a', true], [2, 'b', false], [3, 'c', true]]
 */
const zip3 = <T1, T2, T3>(arr1: T1[], arr2: T2[], arr3: T3[]): [T1, T2 | undefined, T3 | undefined][] => (
  arr1.map((v, i) => [v, arr2[i], arr3[i]])
);

export default zip3;
