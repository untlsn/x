export {};

describe('creators', () => {
  describe('MapChain', () => {
    it('should work like native compose', () => {
      const addTwo = (v) => v + 2;

      const native = x.times(5).reduce((acc) => addTwo(acc), 0);
      const chain = x.times(5).reduce((chain) => chain(addTwo), x.createMapChain<number>()).exec(0);

      expect(chain).toBe(native);
    });
  });
});
