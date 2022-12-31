export {};

describe('flow', () => {
  describe('noop', () => {
    it('should do nothing', () => {
      x.noop();
    });
    it('should return undefined', () => {
      expect(x.noop()).toBeUndefined();
    });
  });

  describe('identity', () => {
    it('should return first parameter', () => {
      const uniqueSymbol = Symbol('uniq');

      expect(x.identity(uniqueSymbol)).toBe(uniqueSymbol);
    });
  });

  describe('asTuple', () => {
    it('should return array from params', () => {
      const arr = [1, 2, 3, 4, 5, 6];

      expect(x.asTuple(...arr)).toEqual(arr);
    });
  });

  describe('negate', () => {
    it('should return negate truly value', () => {
      const truly = [true, 'value', 10, {}, [], Symbol('true')];

      truly.forEach((v) => {
        expect(x.negate(v)).toBe(false);
      });
    });
    it('should return negate falsy value', () => {
      const falsy = [false, '', 0, undefined, null, NaN];

      falsy.forEach((v) => {
        expect(x.negate(v)).toBe(true);
      });
    });
  });

  describe('constant', () => {
    it('should return function return same value', () => {
      const uniqueSymbol = Symbol('uniq');

      const getUniq = x.constant(uniqueSymbol);

      expect(getUniq()).toBe(uniqueSymbol);
    });
  });

  describe('curry2', () => {
    it('should curry function with 2 args', () => {
      const add = (a: number, b: number) => a + b;
      const curryAdd = x.curry2(add);

      expect(curryAdd(5)(4)).toBe(add(4, 5));
    });
  });

  describe('execFn', () => {
    it('should execute fn', () => {
      const symbol = Symbol();
      const getValue = () => symbol;
      expect(x.execFn(getValue)).toBe(getValue());

    });
    it('should execute fn in array', () => {
      let count = 0;
      const incrementValue = () => {
        count++;
      };

      const arrayOfFn = [incrementValue, incrementValue, incrementValue];

      arrayOfFn.forEach(x.execFn);

      expect(count).toBe(arrayOfFn.length);
    });
  });
});
