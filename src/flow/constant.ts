/**
 * Create function returning first value
 * @example
 * const obj = {}
 *
 * const getObj = constant(obj);
 *
 * getObj() == obj -> true
 */
export const constant = <T>(value: T) => () => value;
