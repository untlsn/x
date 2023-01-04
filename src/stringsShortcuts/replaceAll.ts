type SearchValue = string | RegExp;
type ReplaceValue = string | ((oldValue: string) => string);

const replaceAll = (searchValue: SearchValue, replaceValue: ReplaceValue) => (
  (str: string) => str.replaceAll(searchValue, replaceValue as any)
);

export default replaceAll;
