/**
 * Group array object by values return from callback
 * @param array
 * @param callback
 *
 * @example
 * const arr = [1, 2, 3, 4, 5, 6]
 *
 * const evenObj = groupBy(arr, (num) => String(num % 2 == 0))
 *
 * evenObj -> { "true": [2, 4, 6], "false": [1, 3, 5] }
 */
export const groupBy = <T, R extends string | number>(array: T[], callback: ArrayCallback<T, R>) => {
  const obj = {} as Record<R, T[]>;

  array.forEach((val, i, arr) => {
    const key = callback(val, i, arr);
    if (!obj[key]) {
      obj[key] = [val];
    } else {
      obj[key].push(val);
    }
  });

  return obj;
};
