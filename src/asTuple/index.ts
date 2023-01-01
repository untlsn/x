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
const asTuple = <T extends any[]>(...tuple: T) => tuple;

export default asTuple;
