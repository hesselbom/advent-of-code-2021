const findBasin = (y, x, lowerValue, rows, results) => {
  const value = rows[y] && rows[y][x]
  const key = y + ',' + x

  if (value == null || value === 9 || results.has(key)) return

  if (lowerValue == null || value > lowerValue) {
    results.add(key)

    findBasin(y - 1, x, value, rows, results)
    findBasin(y + 1, x, value, rows, results)
    findBasin(y, x - 1, value, rows, results)
    findBasin(y, x + 1, value, rows, results)
  }
}

module.exports = (input) => {
  const rows = input.split('\n').map(r => r.split('').map(v => parseInt(v)))
  const basins = []

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

      const results = new Set()
      findBasin(y, x, undefined, rows, results)

      basins.push(results)
    }
  }

  basins.sort((a, b) => b.size - a.size)

  // 515780 = too low
  return basins.slice(0, 3).reduce((tot, basin) => tot * basin.size, 1)
}
