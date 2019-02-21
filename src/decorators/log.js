// @flow

type DescriptorType = {|
  writable: boolean,
  enumerable: boolean,
  configurabe: boolean,
  value: any,
|};

export default (name: string) => (t: Function, n: string, descriptor: DescriptorType) => {
  const original = descriptor.value;

  if (typeof original === 'function') {
    // eslint-disable-next-line no-param-reassign
    descriptor.value = (...args) => {
      console.log(`Arguments for ${name}: ${args}`);
      try {
        const result = original.apply(this, args);
        console.log(`Result from ${name}: ${result}`);
        return result;
      } catch (e) {
        console.log(`Error from ${name}: ${e}`);
        throw e;
      }
    };
  }
  return descriptor;
};
