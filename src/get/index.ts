type Get = {
  [K in string]: <T extends Record<K, any>>(obj: T) => T[K]
}

/**
 * shallow proxy that return function for prop pick
 *
 * @example
 *
 * const obj = { a: 1, b: 2, c: 3 };
 *
 * x.get.a(obj) -> 1
 * x.get.b(obj) -> 2
 * x.get.c(obj) -> 3
 */
const get = new Proxy({} as Get, {
  get: (_target, p) => (obj) => obj[p],
});

export default get;
