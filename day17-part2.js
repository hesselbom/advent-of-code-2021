module.exports = (input) => {
  const [targetMinX, targetMaxX, targetMinY, targetMaxY] = input.match(/[-?\d]+/g).map(v => parseInt(v))

  let count = 0

  for (let vy = -500; vy < 500; vy++) {
    for (let vx = 1; vx < 500; vx++) {
      let _vy = vy
      let _vx = vx
      let x = 0
      let y = 0
      let highestY = 0

      while (x <= targetMaxX && y >= targetMinY) {
        x += _vx
        y += _vy

        highestY = Math.max(y, highestY)

        if (x <= targetMaxX && y >= targetMinY && x >= targetMinX && y <= targetMaxY) {
          count += 1
          break
        }

        if (_vx > 0) _vx -= 1
        _vy -= 1
      }
    }
  }

  return count
}
