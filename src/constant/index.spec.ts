import constant from './index';

describe('constant', () => {
  it('should return function return same value', () => {
    const uniqueSymbol = Symbol('uniq');

    const getUniq = constant(uniqueSymbol);

    expect(getUniq()).toBe(uniqueSymbol);
  });
});
