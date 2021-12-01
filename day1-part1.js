module.exports = (input) => {
  const rows = input.split('\n').map(v => parseInt(v))
  let count = 0
  let prev = Infinity

  for (let row of rows) {
    if (row > prev) count += 1
    prev = row
  }

  return count
}
