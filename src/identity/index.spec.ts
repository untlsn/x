import identity from './index';

describe('identity', () => {
  it('should return first parameter', () => {
    const uniqueSymbol = Symbol('uniq');

    expect(identity(uniqueSymbol)).toBe(uniqueSymbol);
  });
});
