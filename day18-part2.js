const get = (index, arr) => {
  let v = arr
  for (let i of index) {
    v = v[i]
  }
  return v
}
const set = (index, arr, value) => {
  let v = arr
  for (let j = 0; j < index.length; j++) {
    const i = index[j]
    if (j === index.length - 1) {
      v[i] = value
    } else {
      v = v[i]
    }
  }
}

const indexEquals = (a, b) => (
  JSON.stringify(a) === JSON.stringify(b)
)

const addition = (a, b) => (
  [].concat([a], [b])
)

const explode = (index, arr) => {
  const left = get(index, arr)[0]
  const right = get(index, arr)[1]

  // left
  let _index = index.slice()
  dance:
  while (_index.length > 0) {
    let enteredArray = false

    while (true) {
      _index[_index.length - 1] -= 1
      let value = get(_index, arr)
      if (typeof value === 'number') {
        set(_index, arr, value + left)
        break dance
      } else if (Array.isArray(value)) {
        while (Array.isArray(value)) {
          _index.push(value.length - 1)
          value = get(_index, arr)
        }
        _index[_index.length - 1] += 1
      } else {
        break
      }
    }

    if (!enteredArray) {
      _index = _index.slice(0, -1)
    }
  }

  // right
  _index = index.slice()
  dance:
  while (_index.length > 0) {
    let enteredArray = false

    while (true) {
      _index[_index.length - 1] += 1
      let value = get(_index, arr)
      if (typeof value === 'number') {
        set(_index, arr, value + right)
        break dance
      } else if (Array.isArray(value)) {
        while (Array.isArray(value)) {
          _index.push(0)
          value = get(_index, arr)
        }
        _index[_index.length - 1] -= 1
      } else {
        break
      }
    }

    if (!enteredArray) {
      _index = _index.slice(0, -1)
    }
  }

  set(index, arr, 0)

  // console.log(JSON.stringify(arr))

  return arr
}

const split = (num) => ([
  Math.floor(num / 2),
  Math.ceil(num / 2)
])

const reduce = (row) => {
  while (true) {
    // Find explosion
    let explosion
    dance:
    for (let a = 0; true; a++) {
      let A = row[a]
      if (A == null) break

      for (let b = 0; true; b++) {
        let B = A[b]
        if (B == null) break

        for (let c = 0; true; c++) {
          let C = B[c]
          if (C == null) break

          for (let d = 0; true; d++) {
            let value = C[d]
            if (value == null) break

            if (Array.isArray(value)) {
              // Found explosion
              explosion = [a, b, c, d]
              break dance
            }
          }
        }
      }
    }

    if (explosion) {
      // console.log('explosion', explosion, get(explosion, row))
      explode(explosion, row)
      // console.log(JSON.stringify(row))
      continue
    }

    // Find split
    let foundSplit
    dance:
    for (let a = 0; true; a++) {
      let A = row[a]
      if (A == null) break

      if (typeof A === 'number' && A >= 10) {
        set([a], row, split(A))
        // console.log('split', [a])
        foundSplit = true
        break dance
      }

      for (let b = 0; true; b++) {
        let B = A[b]
        if (B == null) break

        if (typeof B === 'number' && B >= 10) {
          set([a, b], row, split(B))
          // console.log('split', [a, b])
          foundSplit = true
          break dance
        }

        for (let c = 0; true; c++) {
          let C = B[c]
          if (C == null) break

          if (typeof C === 'number' && C >= 10) {
            set([a, b, c], row, split(C))
            // console.log('split', [a, b, c])
            foundSplit = true
            break dance
          }

          for (let d = 0; true; d++) {
            let D = C[d]
            if (D == null) break

            if (typeof D === 'number' && D >= 10) {
              set([a, b, c, d], row, split(D))
              // console.log('split', [a, b, c, d])
              foundSplit = true
              break dance
            }
          }
        }
      }
    }

    if (foundSplit) {
      // console.log(JSON.stringify(row))
      continue
    }
    break
  }

  return row
}

const calculateMagnitude = (pair) => {
  let [a, b] = pair

  if (Array.isArray(a)) {
    a = calculateMagnitude(a)
  }

  if (Array.isArray(b)) {
    b = calculateMagnitude(b)
  }

  return 3 * a + 2 * b
}

module.exports = function (input) {
  const rows = input.split('\n').map(r => eval(r))
  let highestMagnitude = 0

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows.length; j++) {
      if (i === j) continue

      const magnitude = calculateMagnitude(
        reduce(
          addition(
            JSON.parse(JSON.stringify(rows[i])),
            JSON.parse(JSON.stringify(rows[j]))
          )
        )
      )

      const a = JSON.stringify(rows[i])
      const b = JSON.stringify(rows[j])

      highestMagnitude = Math.max(highestMagnitude, magnitude)
    }
  }

  return highestMagnitude
}

module.exports.reduce = reduce
module.exports.addition = addition
module.exports.explode = explode
module.exports.split = split
