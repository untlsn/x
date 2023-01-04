type SearchValue = string | RegExp;
type ReplaceValue = string | ((oldValue: string) => string);

const replace = (searchValue: SearchValue, replaceValue: ReplaceValue) => (
  (str: string) => str.replace(searchValue, replaceValue as any)
);

export default replace;
