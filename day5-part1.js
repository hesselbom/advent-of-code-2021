module.exports = (input) => {
  const rows = input.split('\n').map(r => r.split(' -> ').map(n => n.split(',').map(n => parseInt(n))))
  const map = new Map()
  let count = 0

  for (let line of rows) {
    let x1 = Math.min(line[0][0], line[1][0])
    let y1 = Math.min(line[0][1], line[1][1])
    let x2 = Math.max(line[0][0], line[1][0])
    let y2 = Math.max(line[0][1], line[1][1])

    if (x1 === x2) {
      // vertical
      while (y1 <= y2) {
        let key = y1 + ',' + x1
        map.set(key, (map.get(key) || 0) + 1)
        y1 += 1

        if (map.get(key) === 2) {
          count += 1
        }
      }
    } else if (y1 === y2) {
      // horizontal
      while (x1 <= x2) {
        let key = y1 + ',' + x1
        map.set(key, (map.get(key) || 0) + 1)
        x1 += 1

        if (map.get(key) === 2) {
          count += 1
        }
      }
    }
  }

  return count
}
