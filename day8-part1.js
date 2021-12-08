const DIGIT_LENGTH_0 = 6
const DIGIT_LENGTH_1 = 2
const DIGIT_LENGTH_2 = 5
const DIGIT_LENGTH_3 = 5
const DIGIT_LENGTH_4 = 4
const DIGIT_LENGTH_5 = 5
const DIGIT_LENGTH_6 = 6
const DIGIT_LENGTH_7 = 3
const DIGIT_LENGTH_8 = 7
const DIGIT_LENGTH_9 = 6

module.exports = (input) => {
  const rows = input.split('\n').map(r => r.split(' | ').map(r => r.split(' ')))
  let count = 0

  for (let row of rows) {
    const output = row[1]
    for (let v of output) {
      if (v.length === DIGIT_LENGTH_1 || v.length === DIGIT_LENGTH_4 || v.length === DIGIT_LENGTH_7 || v.length === DIGIT_LENGTH_8) {
        count += 1
      }
    }
  }

  return count
}
