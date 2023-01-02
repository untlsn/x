import type { Noop } from 'src/noop/types';

/**
 * This function does nothing, useful for placeholders
 *
 * @return return undefined so can be treat like constant(undefined)
 */
const noop: Noop = () => undefined as any;

export default noop;
