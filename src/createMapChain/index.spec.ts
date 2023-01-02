import createMapChain from 'src/createMapChain';
import times from 'src/times';

describe('MapChain', () => {
  it('should work like native compose', () => {
    const addTwo = (v) => v + 2;

    const native = times(5).reduce((acc) => addTwo(acc), 0);
    const chain = times(5).reduce((chain) => chain(addTwo), createMapChain<number>()).exec(0);

    expect(chain).toBe(native);
  });
});
