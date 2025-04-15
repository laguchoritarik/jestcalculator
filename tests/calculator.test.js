const { add, subtract, multiply } = require('../src/calculator');

test('adds numbers', () => {
  expect(add(5, 3)).toBe(8);
});

test('subtracts numbers', () => {
  expect(subtract(10, 4)).toBe(6);
});
test("multiplication de deux reels ",()=>
{
  expect(multiply(9,8)).toBe(72)
})
