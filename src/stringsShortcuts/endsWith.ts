const endsWith = (searchString: string, endPosition?: number) => (str: string) => str.endsWith(searchString, endPosition);

export default endsWith;
