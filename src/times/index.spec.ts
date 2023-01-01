import times from './index';

describe('times', () => {
  const length = 10;

  it('should return value with correct length', () => {
    const arr = times(length);
    expect(arr).toHaveLength(length);
  });
  it('should return array with same value and index', () => {
    const arr = times(length);
    arr.forEach((v, i) => expect(v).toBe(i));
  });
});
