const add = (y, x, rows, flashed) => {
  if (y < 0 || x < 0 || y > 9 || x > 9) return

  rows[y][x] += 1

  if (rows[y][x] > 9) {
    const key = y + ',' + x
    if (flashed.has(key)) return

    // flash
    flashed.add(key)

    add(y - 1, x - 1, rows, flashed)
    add(y - 1, x, rows, flashed)
    add(y - 1, x + 1, rows, flashed)
    add(y, x - 1, rows, flashed)
    add(y, x + 1, rows, flashed)
    add(y + 1, x - 1, rows, flashed)
    add(y + 1, x, rows, flashed)
    add(y + 1, x + 1, rows, flashed)
  }
}

module.exports = (input) => {
  const rows = input.split('\n').map(r => r.split('').map(v => parseInt(v)))
  let step = 0
  let flashes = 0

  while (true) {
    step += 1

    const flashed = new Set()

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        add(y, x, rows, flashed)
      }
    }

    if (flashed.size >= 100) {
      return step
    }

    for (let key of flashed) {
      const [y, x] = key.split(',')
      rows[y][x] = 0
    }
  }
}
