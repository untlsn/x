// Advanced high order functions

import type { ArgumentsType } from 'vitest';

type Chain = Function[]
type MapChain<Input, Output> = (
  <T>(cb: (value: Output) => T) => MapChain<Input, T>
) & {
  exec(value: Input): Output
  add<T>(cb: (value: Output) => T): MapChain<Input, T>
}

/**
 * Simple chain of functional maps
 */
export const createMapChain = <Input, Output = Input>(chain: Chain = []) => {
  const res: MapChain<Input, Output> = (cb) => createMapChain([...chain, cb]);
  res.add = res;

  res.exec = (value) => chain.reduce((acc, cb) => cb(acc), value) as unknown as Output;

  return res;
};

type EmptyFn2 = (arg0: any, arg1: any) => any
export type Curry<Fn extends EmptyFn2> = (
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
