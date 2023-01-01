/**
 * return array of elements, but with tuple type
 *
 * const a = ['', 0, false]
 * a -> (string | number | boolean)[];
 *
 * const b = asTuple('', 0, false)
 *
 * b -> [string, number, boolean]
 */
export const asTuple = <T extends any[]>(...tuple: T) => tuple;
