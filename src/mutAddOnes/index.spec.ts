import mutAddOnes from './index';

describe('mutAddOnes', () => {
  let arr: string[];

  beforeEach(() => {
    arr = ['a', 'b', 'c', 'd'];
  });

  it('should add element when it\'s nop included', () => {
    const expectArr = [...arr, 'e'];
    mutAddOnes(arr, 'e');

    expect(arr).toEqual(expectArr);
  });

  it('should don\'t add element when it\'s included', () => {
    const expectArr = [...arr];
    mutAddOnes(arr, 'c');

    expect(arr).toEqual(expectArr);
  });

  it('should return same array', () => {
    const mutArr = mutAddOnes(arr, 'c');

    expect(mutArr).toBe(arr);
  });
});
