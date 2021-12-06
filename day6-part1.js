module.exports = (input) => {
  const fish = input.split(',').map(n => parseInt(n))
  const days = 80

  for (let i = 0; i < days; i++) {
    for (let j = fish.length - 1; j >= 0; j--) {
      if (fish[j] <= 0) {
        fish[j] = 6
        fish.push(8)
      } else {
        fish[j] -= 1
      }
    }
  }

  return fish.length
}
