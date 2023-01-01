import groupBy from './index';

describe('groupBy', () => {
  const numArr = x.times(10);

  it('should group numbers by evens', () => {
    const groups = groupBy(numArr, (v) => v % 2);

    expect(groups[0]).toEqual([0, 2, 4, 6, 8]);
    expect(groups[1]).toEqual([1, 3, 5, 7, 9]);
  });
});
