const padStart = (targetLength: number, padString?: string) => (str: string) => str.padStart(targetLength, padString);

export default padStart;
