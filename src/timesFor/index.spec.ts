import timesFor from './index';

describe('timesFor', () => {
  const length = 10;

  it(`should run callback ${length} times`, () => {
    let exec = 0;
    timesFor(length, () => {
      exec++;
    });
    expect(exec).toBe(length);
  });
});
