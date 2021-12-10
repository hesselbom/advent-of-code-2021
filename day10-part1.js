const findCloser = (row, state, expected) => {
  let char = row.charAt(state.index)

  while (char) {
    if (char === expected) return true

    if (closers.includes(char)) return char

    if (openers.includes(char)) {
      state.index += 1
      const result = findCloser(row, state, closerMap[char])
      if (result !== true) {
        return result
      }
    }

    state.index += 1
    char = row.charAt(state.index)
  }

  return false
}

const openers = ['(', '[', '{', '<']
const closers = [')', ']', '}', '>']
const closerMap = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>'
}
const pointsMap = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137
}

module.exports = (input) => {
  const rows = input.split('\n')
  let score = 0

  for (let row of rows) {
    const firstChar = row.charAt(0)
    const result = findCloser(row, { index: 1 }, closerMap[firstChar])

    score += pointsMap[result] || 0
  }

  return score
}
