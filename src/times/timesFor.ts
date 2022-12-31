/**
 * Run callback many times
 * @return value will be ignored
 *
 * @example
 * const arr = [];
 *
 * timesFor(5, (i) => {
 *   arr.push(i)
 * })
 *
 * arr -> [0, 1, 2, 3, 4, 5]
 */
export const timesFor = (length: number, callback: (index: number) => void) => {
  for (let i = 0; i < length; i++) callback(i);
};
