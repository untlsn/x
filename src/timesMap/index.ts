import timesConst from 'x/timesConst';

/**
 * Create array mapped by callback
 * @example
 * const arr = timesMap(5, (num) => `# ${num}`);
 * arr -> ['# 0', '# 1', '# 2', '# 3', '# 4']
 */
const timesMap = <T>(length: number, callback: (index: number) => T): T[] => (
  timesConst(length, undefined).map((_val, i) => callback(i))
);

export default timesMap;
