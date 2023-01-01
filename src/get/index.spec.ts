import get from './index';

describe('get', () => {
  it('should create picker', () => {
    const obj = { value: 5 };

    expect(get.value(obj)).toBe(obj.value);
  });
});
