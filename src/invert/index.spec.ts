import invert from './index';

describe('invert', () => {
  it('should invert values with keys', () => {
    const obj = {
      a: 1, b: 2, c: 3, d: 4, e: 5,
    };

    const inv = invert(obj);

    expect(inv).toEqual({
      1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e',
    });
  });
});
