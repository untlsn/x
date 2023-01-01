import strictEntries from './index';

describe('strictEntries', () => {
  it('should be Object.entries', () => {
    expect(strictEntries).toBe(Object.entries);
  });
});
