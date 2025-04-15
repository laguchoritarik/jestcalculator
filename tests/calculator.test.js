const { add, subtract } = require('../src/calculator');

test('adds numbers', () => {
  expect(add(5, 3)).toBe(9);
});

test('subtracts numbers', () => {
  expect(subtract(10, 4)).toBe(6);
});
