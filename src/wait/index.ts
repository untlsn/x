import { execFn } from 'src/execFn';

const wait = (ms = 0): Promise<void> => ms > 0
  ? new Promise((res) => setTimeout(res, ms))
  : new Promise(execFn);

export default wait;
