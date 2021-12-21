module.exports = (input) => {
  const rows = Array.from(input.matchAll(/starting position: (\d+)/g))
  const pos = [parseInt(rows[0][1]), parseInt(rows[1][1])]
  const roll = [0, 0]
  const score = [0, 0]

  let turn = 0
  while (true) {
    const player = Math.floor(turn / 3) % 2
    const isLastDie = (turn + 1) / 3 === Math.floor((turn + 1) / 3)
    const die = turn % 100 + 1

    roll[player] += die

    if (isLastDie) {
      pos[player] = ((pos[player] + roll[player]) - 1) % 10 + 1
      score[player] += pos[player]
      roll[player] = 0

      if (score[player] >= 1000) {
        return score[player === 0 ? 1 : 0] * (turn + 1)
      }
    }

    turn += 1
  }
}
