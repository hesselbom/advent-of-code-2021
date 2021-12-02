module.exports = (input) => {
  const rows = input.split('\n')
  let x = 0
  let y = 0
  let aim = 0

  for (let row of rows) {
    const [instr, value] = row.split(' ')

    if (instr === 'forward') {
      x += parseInt(value)
      y += parseInt(value) * aim
    } else if (instr === 'up') {
      aim -= parseInt(value)
    } else if (instr === 'down') {
      aim += parseInt(value)
    }
  }

  return x * y
}
