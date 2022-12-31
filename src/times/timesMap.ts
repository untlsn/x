import { timesConst } from 'x/times/index';

/**
 * Create array mapped by callback
 * @example
 * const arr = timesMap(5, (num) => `# ${num}`);
 * arr -> ['# 0', '# 1', '# 2', '# 3', '# 4']
 */
export const timesMap = <T>(length: number, callback: (index: number) => T) => (
  timesConst(length, undefined).map((_val, i) => callback(i))
);
