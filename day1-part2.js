const sumArr = (tot, cur) => tot + cur

module.exports = (input) => {
  const rows = input.split('\n').map(v => parseInt(v))
  let count = 0
  let prev = Infinity
  const map = []

  for (let i = 0; i < rows.length; i++) {
    let a = Math.floor(i / 4) * 4
    let b = Math.floor((i - 1) / 4) * 4 + 1
    let c = Math.floor((i - 2) / 4) * 4 + 2
    let d = Math.floor((i - 3) / 4) * 4 + 3

    if (a >= 0) map[a] = (map[a] || []).concat(rows[i]).slice(0, 3)
    if (b >= 0) map[b] = (map[b] || []).concat(rows[i]).slice(0, 3)
    if (c >= 0) map[c] = (map[c] || []).concat(rows[i]).slice(0, 3)
    if (d >= 0) map[d] = (map[d] || []).concat(rows[i]).slice(0, 3)
  }

  for (let row of map) {
    if (row.length === 3) {
      const sum = row.reduce(sumArr, 0)
      if (sum > prev) count += 1
      prev = sum
    }
  }

  return count
}
