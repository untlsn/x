import mapKeys from './index';

describe('mapKeys', () => {
  it('should change keys', () => {
    const obj = {
      1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e',
    };

    const doubled = mapKeys(obj, (_val, num) => Number(num) * 2);

    expect(doubled).toEqual({
      2: 'a', 4: 'b', 6: 'c', 8: 'd', 10: 'e',
    });
  });
});
