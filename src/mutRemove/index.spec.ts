import mutRemove from './index';

describe('mutRemove', () => {
  let arr: string[];

  beforeEach(() => {
    arr = ['a', 'b', 'c', 'd'];
  });

  it('should remove element from list', () => {
    mutRemove(arr, 'c');

    expect(arr).toEqual(['a', 'b', 'd']);
  });
  it('should return same list', () => {
    const mutArr = mutRemove(arr, 'c');

    expect(arr).toBe(mutArr);
  });
});
