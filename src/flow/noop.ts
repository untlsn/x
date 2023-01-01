export type Noop = <T = void>() => T
/**
 * This function does nothing, useful for placeholders
 *
 * @return return undefined so can be treat like constant(undefined)
 */
export const noop: Noop = () => undefined as any;
