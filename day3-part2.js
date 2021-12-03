const getResults = (rows) => {
  const results = Array.from({ length: rows[0].length }, () => [])

  for (let row of rows) {
    for (let i = 0; i < row.length; i++) {
      const int = parseInt(row.charAt(i))
      results[i][int] = (results[i][int] || 0) + 1
    }
  }

  return results
}

module.exports = (input) => {
  const rows = input.split('\n')
  const filter = (index, keep) => (row) => row.charAt(index) === keep

  let oxygenArray = rows.slice()
  let index = -1

  while (oxygenArray.length > 1) {
    const results = getResults(oxygenArray)
    index += 1
    const keep = results[index][1] >= results[index][0] ? '1' : '0'
    oxygenArray = oxygenArray.filter(filter(index, keep))
  }

  let co2Array = rows.slice()
  index = -1
  while (co2Array.length > 1) {
    const results = getResults(co2Array)
    index += 1
    const keep = results[index][0] <= results[index][1] ? '0' : '1'
    co2Array = co2Array.filter(filter(index, keep))
  }

  return parseInt(oxygenArray[0], 2) * parseInt(co2Array[0], 2)
}
