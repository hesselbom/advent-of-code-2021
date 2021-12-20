module.exports = function (input) {
  const rows = input.split('\n\n')
  const algorithm = rows[0].split('').map(v => v === '#' ? '1' : '0')
  let imageMap = new Map()
  let empty = '0'
  let emptyAfterFirst = algorithm[0]
  const margin = 5
  let width = 0
  let height = 0

  let y = 0
  for (let row of rows[1].split('\n')) {
    let x = 0
    for (let char of row.split('')) {
      imageMap.set(x + ',' + y, char === '#' ? '1' : '0')
      x += 1
    }
    y += 1
    width = x
    height = y
  }

  for (let y = -margin; y < height + margin; y++) {
    for (let x = -margin; x < width + margin; x++) {
      if (y >= 0 && y < height && x >= 0 && x < width) continue
      imageMap.set(x + ',' + y, empty)
    }
  }

  const print = () => {
    let arr = []
    for (let [key, value] of imageMap) {
      const [x, y] = key.split(',')
      const _x = parseInt(x) + margin
      const _y = parseInt(y) + margin
      if (!arr[_y]) arr[_y] = []
      arr[_y][_x] = value === '1' ? '#' : '.'
    }
    console.log(arr.map(v => v.join('')).join('\n'))
  }

  const run = () => {
    const newImageMap = new Map()

    for (let [key, value] of imageMap) {
      const [x, y] = key.split(',').map(v => parseInt(v))
      const binary = (
        (imageMap.get((x - 1) + ',' + (y - 1)) || empty) +
        (imageMap.get((x) + ',' + (y - 1)) || empty) +
        (imageMap.get((x + 1) + ',' + (y - 1)) || empty) +

        (imageMap.get((x - 1) + ',' + (y)) || empty) +
        (imageMap.get((x) + ',' + (y)) || empty) +
        (imageMap.get((x + 1) + ',' + (y)) || empty) +

        (imageMap.get((x - 1) + ',' + (y + 1)) || empty) +
        (imageMap.get((x) + ',' + (y + 1)) || empty) +
        (imageMap.get((x + 1) + ',' + (y + 1)) || empty)
      )

      newImageMap.set(key, algorithm[parseInt(binary, 2)])
    }

    imageMap = newImageMap
    empty = emptyAfterFirst
  }

  // console.log(imageMap)
  // console.log(empty, emptyAfterFirst)

  print()
  run()
  print()
  run()
  print()

  // count
  return Array.from(imageMap).reduce((tot, [_, v]) => tot + parseInt(v), 0)
}
