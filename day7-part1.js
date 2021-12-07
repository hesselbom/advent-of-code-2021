module.exports = (input) => {
  const crabs = input.split(',').map(n => parseInt(n))
  const maxStartX = Math.max(...crabs)
  let lowest = Infinity

  for (let x = 0; x <= maxStartX; x++) {
    let total = crabs.reduce((tot, crab) => (
      tot + Math.abs(crab - x)
    ), 0)

    lowest = Math.min(total, lowest)
  }

  return lowest
}
