/**
 * Create function returning first value
 * @example
 * const obj = {}
 *
 * const getObj = constant(obj);
 *
 * getObj() == obj -> true
 */
const constant = <T>(value: T) => () => value;

export default constant;
