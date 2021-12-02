module.exports = (input) => {
  const rows = input.split('\n')
  let x = 0
  let y = 0

  for (let row of rows) {
    const [instr, value] = row.split(' ')

    if (instr === 'forward') {
      x += parseInt(value)
    } else if (instr === 'up') {
      y -= parseInt(value)
    } else if (instr === 'down') {
      y += parseInt(value)
    }
  }

  return x * y
}
