import toSet from './index';

describe('toSet', () => {
  const arr = ['a', 'b', 'c', 'd'];

  it('should return set with same element as array', () => {
    const set = toSet(arr);

    expect(set).toBeInstanceOf(Set);
    expect([...set]).toEqual(arr);
  });
});
