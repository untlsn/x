const execFn = <Cb extends (...args: any[]) => any>(cb: Cb): ReturnType<Cb> => cb();

export default execFn;
