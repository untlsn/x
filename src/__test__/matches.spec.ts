export {};

describe('matches', () => {
  describe('shallowObjMatch', () => {
    const obj = { value: 5, active: true };

    it('should return false if obj1 not contain obj2', () => {
      const isNotActive = { active: false };
      expect(x.shallowObjMatch(obj, isNotActive)).toBeFalsy();
    });

    it('should return true if obj1 contain obj2', () => {
      const isActive = { active: true };
      expect(x.shallowObjMatch(obj, isActive)).toBeTruthy();
    });
  });
});
