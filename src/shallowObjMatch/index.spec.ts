import shallowObjMatch from './index';

describe('shallowObjMatch', () => {
  const obj = { value: 5, active: true };

  it('should return false if obj1 not contain obj2', () => {
    const isNotActive = { active: false };
    expect(shallowObjMatch(obj, isNotActive)).toBeFalsy();
  });

  it('should return true if obj1 contain obj2', () => {
    const isActive = { active: true };
    expect(shallowObjMatch(obj, isActive)).toBeTruthy();
  });
});
