const includes = (searchString: string, position?: number) => (str: string) => str.includes(searchString, position);

export default includes;
