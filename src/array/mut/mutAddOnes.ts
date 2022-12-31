/**
 * Add new element only when it's not includes in array
 * @mutate
 * @return mutated array
 *
 * @example
 * const arr = [1, 2, 3, 4, 5]
 *
 * const arr2 = mutAddOnes(arr, 6)
 * arr2 -> [1, 2, 3, 4, 5, 6]
 *
 * const arr3 = mutAddOnes(arr, 3)
 * arr3 -> [1, 2, 3, 4, 5, 6]
 *
 * arr == arr2 && arr == arr3 -> true
 */
export const mutAddOnes = <T>(array: T[], element: T) => {
  if (!array.includes(element)) {
    array.push(element);
  }

  return array;
};
