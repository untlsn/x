export { i as fp } from './index-2fadbb2d.js';
import './index-51d7ef87.js';

/**
 * Work like Array.at, but have better browser support
 * @example
 *
 * const arr = [1, 2, 3, 4, 5];
 *
 * arrayAt(arr, 2) -> 3
 * arrayAt(arr, -1) -> 5
 * arrayAt(arr, -2) == arr.at(-1) -> true
 */
declare function arrayAt<T extends string>(str: T, index: number): string;
declare function arrayAt<T>(str: T[], index: number): T;

/**
 * return array of elements, but with tuple type
 *
 * const a = ['', 0, false]
 * a -> (string | number | boolean)[];
 *
 * const b = asTuple('', 0, false)
 *
 * b -> [string, number, boolean]
 */
declare const asTuple: <T extends any[]>(...tuple: T) => T;

/**
 * Create function returning first value
 * @example
 * const obj = {}
 *
 * const getObj = constant(obj);
 *
 * getObj() == obj -> true
 */
declare const constant: <T>(value: T) => () => T;

type Chain = Function[];
type MapChain<Input, Output> = (<T>(cb: (value: Output) => T) => MapChain<Input, T>) & {
    exec(value: Input): Output;
    add<T>(cb: (value: Output) => T): MapChain<Input, T>;
};
/**
 * Simple chain of functional maps
 */
declare const createMapChain: {
    <Input, Output = Input>(chain?: Chain): MapChain<Input, Output>;
    start: <Input_1, Output_1 = Input_1>(cb: (value: Input_1) => Output_1) => MapChain<Input_1, Output_1>;
};

/**
 * Check if prop for obj1 and obj2 are the same
 *
 * @example
 *
 * const obj1 = { a: 1, b: 2, c: 3 };
 * const obj2 = { a: 5, b: 2, c: 1 };
 *
 * eqPick('b', obj1, obj2) -> true
 * eqPick('c', obj1, obj2) -> false
 */
declare const eqPick: <TObj extends object>(obj1: TObj, obj2: TObj, prop: keyof TObj) => boolean;

declare const execFn: <Cb extends (...args: any[]) => any>(cb: Cb) => ReturnType<Cb>;

type Identity = <T>(value: T) => T;

type Noop = <T = void>() => T

type Booleanish = any;
type Dict<T = any> = Record<any, T>
// @ts-ignore
type DictKey<T> = `${keyof T}`
type DictVal<T> = T[keyof T]
type DictPair<T> = [key: DictKey<T>, val: DictVal<T>]
type ObjectCallback<Obj extends Dict, Return> = (val: DictVal<Obj>, key: DictKey<Obj>, obj: Obj) => Return
type AnyDictKey = string | number | symbol
type ArrayCallback<T, R> = (value: T, index: number, array: T[]) => R

/**
 * Group array object by values return from callback
 * @param array
 * @param callback
 *
 * @example
 * const arr = [1, 2, 3, 4, 5, 6]
 *
 * const evenObj = groupBy(arr, (num) => String(num % 2 == 0))
 *
 * evenObj -> { "true": [2, 4, 6], "false": [1, 3, 5] }
 */
declare const groupBy: <T, R extends string | number>(array: T[], callback: ArrayCallback<T, R>) => Record<R, T[]>;

/**
 * Return first param
 *
 * @example
 * const a = {};
 * const b = identity(a);
 *
 * a == b -> true
 */
declare const identity: Identity;

/**
 * Invert values and keys of object
 *
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
 *
 * const inv = invert(obj);
 *
 * inv -> { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' }
 */
declare const invert: <Key extends AnyDictKey, Val extends AnyDictKey>(obj: Record<Key, Val>) => Record<Val, Key>;

/**
 * Return last element of array
 * @example
 *
 * const arr = [1, 2, 3, 4, 5];
 *
 * last(arr) -> 5
 */
declare function last<T extends string>(str: T): string;
declare function last<T>(arr: T[]): T;

/**
 * Map all values of object to same value
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
 *
 * const only0 = mapConstValues(obj, 0)
 *
 * only0 -> { a: 0, b: 0, c: 0, d: 0, e: 0 }
 */
declare const mapConstValues: <Obj extends Dict<any>, T>(obj: Obj, value: T) => Record<`${keyof Obj}`, T>;

/**
 * Map values of object
 * @example
 * const obj = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' }
 *
 * const doubled = mapKeys(obj, (_val, num) => num * 2)
 *
 * doubled -> { 2: 'a', 4: 'b', 6: 'c', 8: 'd', 10: 'e' }
 */
declare const mapKeys: <Obj extends Dict<any>, T extends AnyDictKey>(obj: Obj, callback: ObjectCallback<Obj, T>) => Record<T, DictVal<Obj>>;

/**
 * Map keys of object
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
 *
 * const doubled = mapValues(obj, (num) => num * 2)
 *
 * doubled -> { a: 2, b: 4, c: 6, d: 8, e: 10 }
 */
declare const mapValues: <Obj extends Dict<any>, T>(obj: Obj, callback: ObjectCallback<Obj, T>) => Record<keyof Obj, T>;

/**
 * Add new element only when it's not includes in array
 * @mutate
 * @return mutated array
 *
 * @example
 * const arr = [1, 2, 3, 4, 5]
 *
 * const arr2 = mutAddOnes(arr, 6)
 * arr2 -> [1, 2, 3, 4, 5, 6]
 *
 * const arr3 = mutAddOnes(arr, 3)
 * arr3 -> [1, 2, 3, 4, 5, 6]
 *
 * arr == arr2 && arr == arr3 -> true
 */
declare const mutAddOnes: <T>(array: T[], element: T) => T[];

/**
 * Remove element from array
 * @mutate
 * @return mutated array
 * @example
 * const arr = [1, 2, 3, 4, 5]
 * const arr2 = mutRemove(arr, 3)
 *
 * arr -> [1, 2, 4, 5]
 * arr2 -> [1, 2, 4, 5]
 * arr == arr2 -> true
 */
declare const mutRemove: <T>(array: T[], element: T) => T[];

declare const mutToggleInSet: <T>(set: Set<T>, element: T) => Set<T>;

/**
 * Return negate value
 * @example
 * negate(true) -> false
 * negate('value') -> false
 * negate(5) -> false
 *
 * negate(false) -> true
 * negate('') -> true
 * negate(0) -> true
 */
declare const negate: (value: Booleanish) => boolean;

/**
 * This function does nothing, useful for placeholders
 *
 * @return return undefined so can be treat like constant(undefined)
 */
declare const noop: Noop;

/**
 * Iterate over object any return first pair when callback return true
 *
 * @example
 * const empty = { a: 0, b: 0 };
 * const fill = { a: 0, b: 0, c: 2 };
 *
 * objSome(empty, (v) => v) -> undefined
 * // if callback is not defined function will use (v) => v
 * objSome(fill) -> ['c', 2]
 */
declare const objFind: <Obj extends Dict<any>>(obj: Obj, callback?: ObjectCallback<Obj, any>) => DictPair<Obj>;

/**
 * Iterate over object any return true if any of callback return truly value
 * If you only want a values and keys of object, otherwise use objSomeValue of objSomeKeys
 *
 * @example
 * const empty = { a: 0, b: 0 };
 * const fill = { a: 0, b: 0, c: 2 };
 *
 * objSome(empty, (v) => v) -> false
 * // if callback is not defined function will use (v) => v
 * objSome(fill) -> true
 */
declare const objSome: <Obj extends Dict<any>>(obj: Obj, callback?: ObjectCallback<Obj, any>) => boolean;

/**
 * Iterate over object any return true if any of callback return truly value
 * Instead of objSome it pass only keys to callback
 *
 * @example
 * const empty = { a: 0, b: 0 };
 * const fill = { a: 0, b: 0, c: 2 };
 *
 * objSome(empty, (v) => v == 'c') -> false
 * objSome(fill, (v) => v == 'c') -> true
 */
declare const objSomeKeys: <Obj extends Dict<any>>(obj: Obj, callback: (key: keyof Obj) => Booleanish) => boolean;

/**
 * Iterate over object any return true if any of callback return truly value
 * Instead of objSome it only pass values to callback
 *
 * @example
 * const empty = { a: 0, b: 0 };
 * const fill = { a: 0, b: 0, c: 2 };
 *
 * objSome(empty, (v) => v) -> false
 * // if callback is not defined function will use (v) => v
 * objSome(fill) -> true
 */
declare const objSomeValues: <Obj extends Dict<any>>(obj: Obj, callback?: (value: Obj[keyof Obj]) => Booleanish) => boolean;

/**
 * Filter object by removing keys
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
 * const omitted = omit(obj, ['a', 'b'])
 *
 * omitted -> { c: 3, d: 4, e: 5 }
 */
declare const omit: <Obj extends Dict<any>, Keys extends `${keyof Obj}`>(obj: Obj, keys: Keys | Keys[]) => Omit<Obj, Keys>;

/**
 * Filter object by picking keys
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
 * const picked = pick(obj, ['a', 'b'])
 *
 * picked -> { a: 1, b: 2 }
 */
declare const pick: <Obj extends Dict<any>, Prop extends `${keyof Obj}`>(obj: Obj, props: Prop[]) => Pick<Obj, Prop>;

/**
 * filter object like array
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
 *
 * const even = pickBy(obj, (num) => num % 2 == 0);
 *
 * even -> { b: 2, d: 4 }
 */
declare const pickBy: <Obj extends Dict<any>>(obj: Obj, callback?: ObjectCallback<Obj, any>) => Partial<Obj>;

/**
 * Work like pickBy, but only return keys
 *
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
 *
 * const even = pickBy(obj, (num) => num % 2 == 0);
 *
 * even -> ['b', 'd']
 */
declare const pickKeysBy: <Obj extends Dict<any>>(obj: Obj, callback?: ObjectCallback<Obj, any>) => `${keyof Obj}`[];

/**
 * Check if obj1 contain obj2
 *
 * @example
 *
 * const obj = { value: 5, active: true };
 *
 * const isActive = { active: true };
 * const isNotActive = { active: false };
 *
 * shallowObjMatch(obj, isActive) -> true
 * shallowObjMatch(obj, isNotActive) -> false
 */
declare const shallowObjMatch: <T extends object>(obj1: T, obj2: Partial<T>) => boolean;

/**
 * Native Object entries, but return keyof Obj instead of string
 *
 * @example
 * strictEntries({ a: 1, b: 2, c: 3 }) -> [key: 'a' | 'b' | 'c', val: number][]
 */
declare const strictEntries: <Obj extends Dict<any>>(obj: Obj) => DictPair<Obj>[];

/**
 * Native Object keys, but return keyof Obj instead of string
 *
 * @example
 * strictKeys({ a: 1, b: 2, c: 3 }) -> ('a' | 'b' | 'c')[]
 */
declare const strictKeys: <Obj extends Dict<any>>(obj: Obj) => `${keyof Obj}`[];

/**
 * Create array of number from 0 to length
 * @example
 * const arr = times(5);
 * arr -> [0, 1, 2, 3, 4]
 */
declare const times: (length: number) => unknown[];

/**
 * Create array of same element
 * @example
 * const arr = times(5, true);
 * arr -> [true, true, true, true, true]
 */
declare const timesConst: <T>(length: number, value: T) => any[];

/**
 * Run callback many times
 * @return value will be ignored
 *
 * @example
 * const arr = [];
 *
 * timesFor(5, (i) => {
 *   arr.push(i)
 * })
 *
 * arr -> [0, 1, 2, 3, 4, 5]
 */
declare const timesFor: (length: number, callback: (index: number) => void) => void;

/**
 * Create array mapped by callback
 * @example
 * const arr = timesMap(5, (num) => `# ${num}`);
 * arr -> ['# 0', '# 1', '# 2', '# 3', '# 4']
 */
declare const timesMap: <T>(length: number, callback: (index: number) => T) => T[];

/**
 * Create Set from array
 * @return Set with data from array
 * @example
 * const arr = [1, 2, 3, 3, 3, 4, 5];
 *
 * const set = toSet(arr)
 *
 * set -> Set(1, 2, 3, 4, 5)
 */
declare const toSet: <T>(array: T[]) => Set<T>;

/**
 * Zip 3 elements
 * @example
 *
 * const arr1 = [1, 2, 3]
 * const arr2 = ['a', 'b', 'c']
 * const arr3 = [true, false, true]
 *
 * zip3(arr1, arr2, arr3) -> [[1, 'a', true], [2, 'b', false], [3, 'c', true]]
 */
declare const zip3: <T1, T2, T3>(arr1: T1[], arr2: T2[], arr3: T3[]) => [T1, T2 | undefined, T3 | undefined][];

export { arrayAt, asTuple, constant, createMapChain, eqPick, execFn, groupBy, identity, invert, last, mapConstValues, mapKeys, mapValues, mutAddOnes, mutRemove, mutToggleInSet, negate, noop, objFind, objSome, objSomeKeys, objSomeValues, omit, pick, pickBy, pickKeysBy, shallowObjMatch, strictEntries, strictKeys, times, timesConst, timesFor, timesMap, toSet, zip3 };
