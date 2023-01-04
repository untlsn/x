const indexOf = (searchString: string, position?: number) => (str: string) => str.includes(searchString, position);

export default indexOf;
