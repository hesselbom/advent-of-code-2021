module.exports = (input) => {
  const rows = input.split('\n')
  const results = Array.from({ length: rows[0].length }, () => [])

  for (let row of rows) {
    for (let i = 0; i < row.length; i++) {
      const int = parseInt(row.charAt(i))
      results[i][int] = (results[i][int] || 0) + 1
    }
  }

  let gammaStr = ''
  let epsilonStr = ''

  for (let r of results) {
    if (r[0] > r[1]) {
      gammaStr += '0'
      epsilonStr += '1'
    } else {
      gammaStr += '1'
      epsilonStr += '0'
    }
  }

  return parseInt(gammaStr, 2) * parseInt(epsilonStr, 2)
}
