module.exports = (input) => {
  const rows = input.split('\n').map(r => r.split(' -> ').map(n => n.split(',').map(n => parseInt(n))))
  const map = new Map()
  let count = 0

  for (let line of rows) {
    let x1 = line[0][0]
    let y1 = line[0][1]
    let x2 = line[1][0]
    let y2 = line[1][1]
    let vx = x2 - x1
    let vy = y2 - y1
    let l = Math.sqrt(vx * vx + vy * vy)
    let dx = Math.round(vx / l)
    let dy = Math.round(vy / l)

    while (true) {
      let key = y1 + ',' + x1
      map.set(key, (map.get(key) || 0) + 1)

      if (map.get(key) === 2) {
        count += 1
      }

      if (x1 === x2 && y1 === y2) {
        break
      }

      x1 += dx
      y1 += dy
    }
  }

  // let output = ''
  // for (let y = 0; y < 10; y++) {
  //   let row = ''
  //   for (let x = 0; x < 10; x++) {
  //     let key = y + ',' + x
  //     row += map.get(key) || '.'
  //   }
  //   output += row + '\n'
  // }
  // console.log(output)

  return count
}
