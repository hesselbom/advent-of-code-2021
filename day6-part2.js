module.exports = (input, days) => {
  const fish = input.split(',').map(n => parseInt(n))
  let map = Array.from({ length: 9 }, (_, i) => fish.filter(n => n === i).length)

  for (let i = 0; i < days; i++) {
    const newMap = []

    for (let j = 0; j < 8; j++) {
      newMap[j] = map[j + 1]
    }
    newMap[6] += map[0]
    newMap[8] = map[0]

    map = newMap
  }

  return map.reduce((tot, cur) => tot + cur, 0)
}
