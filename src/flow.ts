import type { ArgumentsType } from 'vitest';
import type { Booleanish } from 'x/types';

// Very simple functions that help with code flow.
// Commonly only require one argument so no fp version are severeness

export type Noop = <T = void>() => T
/**
 * This function does nothing, useful for placeholders
 *
 * @return return undefined so can be treat like constant(undefined)
 */
export const noop: Noop = () => undefined as any;

export type Identity = <T>(value: T) => T;
/**
 * Return first param
 *
 * @example
 * const a = {};
 * const b = identity(a);
 *
 * a == b -> true
 */
export const identity: Identity = (v) => v;

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

/**
 * Return negate value
 * @example
 * negate(true) -> false
 * negate('value') -> false
 * negate(5) -> false
 *
 * negate(false) -> true
 * negate('') -> true
 * negate(0) -> true
 */
export const negate = (value: Booleanish) => !value;

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

type EmptyFn2 = (arg0: any, arg1: any) => any
type Curry<Fn extends EmptyFn2> = (
  (arg1: ArgumentsType<Fn>[1]) => (arg0: ArgumentsType<Fn>[0]) => ReturnType<Fn>
)

/**
 * Curry function with 2 arguments
 *
 * @example
 *
 * const add = (a, b) => a + b;
 * const curryAdd = curry2(add);
 *
 * add(5)(4) -> 9
 */
export const curry2 = <Fn extends EmptyFn2>(fn: Fn): Curry<Fn> => (
  (arg1) => (arg0) => fn(arg0, arg1)
);

/**
 * Only execute function, useful for callback
 *
 * @example
 * let count = 0;
 * const arrayOfFns = [() => { count++ }, () => { count++ }, () => { count++ }];
 *
 * arrayOfFns.map(execFn);
 *
 * count -> 3
 */
export const execFn = <R>(fn: () => R) => fn();
