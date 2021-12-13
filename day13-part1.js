module.exports = (input) => {
  const rows = input.split('\n')
  const dots = new Set()
  const folds = []

  for (let row of rows) {
    if (row.includes(',')) {
      dots.add(row)
    } else if (row.startsWith('fold along ')) {
      folds.push(row.substr('fold along '.length))
    }
  }

  for (let fold of folds) {
    const [axis, posStr] = fold.split('=')
    const pos = parseInt(posStr)

    for (let key of dots.keys()) {
      let [x, y] = key.split(',').map(v => parseInt(v))

      if (axis === 'y') {
        if (y > pos) {
          y = pos - (y - pos)
          dots.delete(key)
          dots.add(x + ',' + y)
        }
      } else {
        if (x > pos) {
          x = pos - (x - pos)
          dots.delete(key)
          dots.add(x + ',' + y)
        }
      }
    }

    break
  }

  return dots.size
}
