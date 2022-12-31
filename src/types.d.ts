export type Booleanish = any;
export type Dict<T = any> = Record<any, T>
// @ts-ignore
export type DictKey<T> = `${keyof T}`
export type DictVal<T> = T[keyof T]
export type DictPair<T> = [key: DictKey<T>, val: DictVal<T>]
export type ObjectCallback<Obj extends Dict, Return> = (val: DictVal<Obj>, key: DictKey<Obj>, obj: Obj) => Return
export type AnyDictKey = string | number | symbol
