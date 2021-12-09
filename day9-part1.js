module.exports = (input) => {
  const rows = input.split('\n').map(r => r.split('').map(v => parseInt(v)))

  let totalRisk = 0
  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      const value = rows[y][x]
      const up = rows[y - 1] && rows[y - 1][x]
      const down = rows[y + 1] && rows[y + 1][x]
      const left = rows[y][x - 1]
      const right = rows[y][x + 1]

      if (up != null && up <= value) {
        continue
      } else if (down != null && down <= value) {
        continue
      } else if (left != null && left <= value) {
        continue
      } else if (right != null && right <= value) {
        continue
      }

      totalRisk += value + 1
    }
  }

  return totalRisk
}
