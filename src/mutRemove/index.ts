/**
 * Remove element from array
 * @mutate
 * @return mutated array
 * @example
 * const arr = [1, 2, 3, 4, 5]
 * const arr2 = mutRemove(arr, 3)
 *
 * arr -> [1, 2, 4, 5]
 * arr2 -> [1, 2, 4, 5]
 * arr == arr2 -> true
 */
const mutRemove = <T>(array: T[], element: T) => {
  const index = array.indexOf(element);

  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
};

export default mutRemove;
