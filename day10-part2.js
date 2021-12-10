const findCloser = (row, state, expected, missingClosers) => {
  let char = row.charAt(state.index)

  while (char) {
    if (char === expected) return true

    if (closers.includes(char)) return char

    if (openers.includes(char)) {
      state.index += 1
      const result = findCloser(row, state, closerMap[char], missingClosers)

      if (result === true) {
      } else if (result === false) {
        missingClosers.push(closerMap[char])
        return result
      } else {
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
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4
}

module.exports = (input) => {
  const rows = input.split('\n')
  const scores = []

  // const row = '({[<{<<[]>>('
  // const row = '[(()[<>])]({[<{<<[]>>('

  for (let row of rows) {
    let char = row.charAt(0)
    let startChar
    let missingClosers
    const state = { index: 1 }
    let result
    while (char) {
      startChar = char
      missingClosers = []
      result = findCloser(row, state, closerMap[char], missingClosers)

      if (result !== true && result !== false) {
        break
      }

      state.index += 1
      char = row.charAt(state.index)
      state.index += 1
    }

    // console.log(row, result)
    // console.log(state, row.length)
    // console.log(result, missingClosers)

    if (result === false) {
      let score = 0
      missingClosers.push(closerMap[startChar])
      for (let closer of missingClosers) {
        score = score * 5 + pointsMap[closer]
      }
      // console.log(missingClosers.join(''), score)
      scores.push(score)
    }
  }

  return scores.sort((a, b) => b - a)[(scores.length - 1) / 2]

  // return count
}
