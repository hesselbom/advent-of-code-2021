module.exports = (input) => {
  const [targetMinX, targetMaxX, targetMinY, targetMaxY] = input.match(/[-?\d]+/g).map(v => parseInt(v))

  let totalHighestY = 0

  for (let vy = 1; vy < 500; vy++) {
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
          if (highestY >= totalHighestY) {
            totalHighestY = highestY
          }
          break
        }

        if (_vx > 0) _vx -= 1
        _vy -= 1
      }
    }
  }

  return totalHighestY

  // let vx = 7
  // let vy = 2
  // let steps = 1

  // console.log(vx * steps, 7)

  // steps = 2
  // console.log(vx * steps - steps, 7 + 6)

  // steps = 3
  // console.log(vx * steps - steps, 7 + 6 + 5)

  // steps = 4
  // console.log(vx * steps - steps, 7 + 6 + 5 + 4)
}
