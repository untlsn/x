export {};

describe('set', () => {
  describe('mutToggleInSet', () => {
    it('should mutate set', () => {
      const set = new Set();
      const mutSet = x.mutToggleInSet(set, 5);
      expect(mutSet).toBe(set);
    });
    it('should add element when not exist', () => {
      const set = new Set([5]);
      x.mutToggleInSet(set, 5);

      expect(set.has(5)).toBeFalsy();
    });
    it('should remove element when exist', () => {
      const set = new Set();
      x.mutToggleInSet(set, 5);

      expect(set.has(5)).toBeTruthy();
    });
  });
});
