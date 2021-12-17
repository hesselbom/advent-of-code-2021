const t = require('./day17-part2')

test('day 17 part 2', () => {
  expect(t('target area: x=20..30, y=-10..-5')).toBe(112)

  console.log(t('target area: x=60..94, y=-171..-136'))
})
