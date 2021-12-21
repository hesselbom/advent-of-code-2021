const cache = new Map()

const run = (die, turn, pos0, pos1, roll0, roll1, score0, score1) => {
  const key = [die, turn, pos0, pos1, roll0, roll1, score0, score1].join('-')

  if (cache.has(key)) return cache.get(key)

  const player = Math.floor(turn / 3) % 2
  const isLastDie = (turn + 1) / 3 === Math.floor((turn + 1) / 3)

  if (player === 0) roll0 += die
  else roll1 += die

  if (isLastDie) {
    if (player === 0) {
      pos0 = ((pos0 + roll0) - 1) % 10 + 1
      score0 += pos0
      roll0 = 0

      if (score0 >= 21) {
        cache.set(key, [1, 0])
        return [1, 0]
        // universeWins[0] += 1
        // return
      }
    } else {
      pos1 = ((pos1 + roll1) - 1) % 10 + 1
      score1 += pos1
      roll1 = 0

      if (score1 >= 21) {
        cache.set(key, [0, 1])
        return [0, 1]
        // universeWins[1] += 1
        // return
      }
    }
  }

  let a = 0
  let b = 0
  for (let i = 1; i <= 3; i++) {
    const [_a, _b] = run(i, turn + 1, pos0, pos1, roll0, roll1, score0, score1)
    a += _a
    b += _b
  }
  cache.set(key, [a, b])
  return [a, b]
}

module.exports = (input) => {
  const rows = Array.from(input.matchAll(/starting position: (\d+)/g))
  const pos = [parseInt(rows[0][1]), parseInt(rows[1][1])]

  let a = 0
  let b = 0
  for (let i = 1; i <= 3; i++) {
    const [_a, _b] = run(i, 0, pos[0], pos[1], 0, 0, 0, 0)
    a += _a
    b += _b
  }

  return Math.max(a, b)
}
