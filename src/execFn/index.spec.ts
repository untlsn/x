import execFn from './index';

describe('execFn', () => {
  it('should execute fn', () => {
    const symbol = Symbol();
    const getValue = () => symbol;
    expect(execFn(getValue)).toBe(getValue());

  });
  it('should execute fn in array', () => {
    let count = 0;
    const incrementValue = () => {
      count++;
    };

    const arrayOfFn = [incrementValue, incrementValue, incrementValue];

    arrayOfFn.forEach(execFn);

    expect(count).toBe(arrayOfFn.length);
  });
});
