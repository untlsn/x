export {};

describe('objSome', () => {
  it('should return true if any element pass callback', () => {
    const fill = { a: 1, b: 3, c: 2 };

    expect(x.objSome(fill, (v) => v % 2 == 0)).toBeTruthy();
  });
  it('should return false if no element pass callback', () => {
    const empty = { a: 1, b: 3 };

    expect(x.objSome(empty, (v) => v % 2 == 0)).toBeFalsy();
  });
  it('should use identity when callback is not defined', () => {
    const empty = { a: false, b: false };
    const fill = { ...empty, c: true };

    expect(x.objSome(empty)).toBeFalsy();
    expect(x.objSome(fill)).toBeTruthy();
  });
});
