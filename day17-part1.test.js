const t = require('./day17-part1')

test('day 17 part 1', () => {
  expect(t('target area: x=20..30, y=-10..-5')).toBe(45)

  // 1225 = too low
  console.log(t('target area: x=60..94, y=-171..-136'))
})
