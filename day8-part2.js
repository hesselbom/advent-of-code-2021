const DIGIT_LENGTH_1 = 2

const DIGIT_LENGTH_7 = 3

const DIGIT_LENGTH_4 = 4

const DIGIT_LENGTH_2 = 5
const DIGIT_LENGTH_3 = 5
const DIGIT_LENGTH_5 = 5

const DIGIT_LENGTH_0 = 6
const DIGIT_LENGTH_6 = 6
const DIGIT_LENGTH_9 = 6

const DIGIT_LENGTH_8 = 7

module.exports = (input) => {
  const rows = input.split('\n').map(r => r.split(' | ').map(r => r.split(' ')))
  let count = 0

  for (let row of rows) {
    const possibles = new Map()
    const charsLeft = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
    const digits = new Map()

    // first find 1
    for (let v of row[0]) {
      if (v.length === DIGIT_LENGTH_1) {
        const arr = v.split('').sort()
        possibles.set('C', arr)
        possibles.set('F', arr)
        digits.set(arr.join(''), 1)
        for (let c of arr) charsLeft.delete(c)
        break
      }
    }

    // then find 7
    for (let v of row[0]) {
      if (v.length === DIGIT_LENGTH_7) {
        const arr = v.split('').sort()
        const pos = arr.filter(c => !possibles.get('C').includes(c))
        possibles.set('A', pos)
        digits.set(arr.join(''), 7)
        for (let c of pos) charsLeft.delete(c)
        break
      }
    }

    // then find 4
    for (let v of row[0]) {
      if (v.length === DIGIT_LENGTH_4) {
        const arr = v.split('').sort()
        const pos = arr.filter(c => !possibles.get('C').includes(c))
        possibles.set('B', pos)
        possibles.set('D', pos)
        digits.set(arr.join(''), 4)
        for (let c of pos) charsLeft.delete(c)
        break
      }
    }

    // then find 8
    for (let v of row[0]) {
      if (v.length === DIGIT_LENGTH_8) {
        const arr = v.split('').sort()
        const pos = arr.filter(c => charsLeft.has(c))
        possibles.set('E', pos)
        possibles.set('G', pos)
        digits.set(arr.join(''), 8)
        for (let c of pos) charsLeft.delete(c)
        break
      }
    }

    // then find 3
    for (let v of row[0]) {
      if (v.length === DIGIT_LENGTH_3) {
        let arr = v.split('').sort()

        // if both C+F exists, it's a three
        if (arr.includes(possibles.get('C')[0]) && arr.includes(possibles.get('C')[1])) {
          digits.set(arr.join(''), 3)
          break
        }
      }
    }

    // then find 2
    for (let v of row[0]) {
      if (v.length === DIGIT_LENGTH_2) {
        let arr = v.split('').sort()

        // if both E+G exists, it's a two
        if (arr.includes(possibles.get('E')[0]) && arr.includes(possibles.get('E')[1])) {
          digits.set(arr.join(''), 2)
          break
        }
      }
    }

    // then find 5
    for (let v of row[0]) {
      if (v.length === DIGIT_LENGTH_5) {
        let arr = v.split('').sort()

        // if both B+D exists, it's a five
        if (arr.includes(possibles.get('B')[0]) && arr.includes(possibles.get('D')[1])) {
          digits.set(arr.join(''), 5)
          break
        }
      }
    }

    // then find 9
    for (let v of row[0]) {
      if (v.length === DIGIT_LENGTH_9) {
        let arr = v.split('').sort()

        // if not both E+G exists, it's a nine
        if (!(arr.includes(possibles.get('E')[0]) && arr.includes(possibles.get('G')[1]))) {
          digits.set(arr.join(''), 9)
          break
        }
      }
    }

    // then find 0
    for (let v of row[0]) {
      if (v.length === DIGIT_LENGTH_0) {
        let arr = v.split('').sort()

        // if both E+G and C+F exists, it's a nine
        if (arr.includes(possibles.get('E')[0]) && arr.includes(possibles.get('G')[1]) && arr.includes(possibles.get('C')[0]) && arr.includes(possibles.get('F')[1])) {
          digits.set(arr.join(''), 0)
          break
        }
      }
    }

    // finally find 6
    for (let v of row[0]) {
      let arr = v.split('').sort()
      let val = arr.join('')

      if (!digits.has(val)) {
        digits.set(val, 6)
      }
    }

    // console.log(digits)
    count += parseInt(row[1].map(v => digits.get(v.split('').sort().join(''))).join(''))
  }

  return count
}
