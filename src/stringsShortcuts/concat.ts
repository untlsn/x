const concat = (...strings: string[]) => (str: string) => str.concat(...strings);

export default concat;
