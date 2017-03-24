const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(33, 11);
  if (res !== 44) {
    throw new Error(`expected 44, but got ${res}`);
  }
});