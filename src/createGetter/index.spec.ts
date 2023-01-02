import createGetter from './index';

describe('createGetter', () => {
  it('should create getter', () => {
    const getA = createGetter('a');
    const symbol = Symbol('a');
    const obj = { a: symbol };

    expect(getA(obj)).toBe(obj.a);
  });
});
