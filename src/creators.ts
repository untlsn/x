// Advanced high order functions

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
