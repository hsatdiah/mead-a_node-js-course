const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(31, 11);
  expect(res).toBeA('number').toBe(42);
});

it('should square a number', () => {
  let res = utils.square(12);
  expect(res).toBeA('number').toBe(144);
});

it('should expect some values', () => {
  expect(9).toNotBe(11);
  expect({name: 'Alex'}).toEqual({name: 'Alex'}); // toBe will fail
  expect([1,3,5,7]).toInclude(1);
  expect({
    name: 'Miraya',
    age: 25,
    location: 'unknown',
  }).toInclude({age: 25}).toExclude({location: 'PL'});
});
