const t = require('./day21-part1')

test('day 21 part 1', () => {
  expect(t(`Player 1 starting position: 4
Player 2 starting position: 8`)).toBe(739785)

  console.log(t(`Player 1 starting position: 10
Player 2 starting position: 9`))
})
