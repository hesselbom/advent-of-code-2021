const t = require('./day21-part2')

test('day 21 part 2', () => {
  expect(t(`Player 1 starting position: 4
Player 2 starting position: 8`)).toBe(444356092776315)

  console.log(t(`Player 1 starting position: 10
Player 2 starting position: 9`))
})
