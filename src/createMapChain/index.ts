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
const createMapChain = <Input, Output = Input>(chain: Chain = []) => {
  const res: MapChain<Input, Output> = (cb) => createMapChain([...chain, cb]);
  res.add = res;

  res.exec = (value) => chain.reduce((acc, cb) => cb(acc), value) as unknown as Output;

  return res;
};

createMapChain.start = createMapChain().add as <Input, Output = Input>(cb: (value: Input) => Output) => MapChain<Input, Output>;

export default createMapChain;
