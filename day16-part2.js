const getBits = (numbers, from, to) => {
  const i = Math.floor(from / 4)
  const j = Math.floor((to - 1) / 4)

  if (i === j) {
    from = 4 - (from - i * 4)
    to = 4 - (to - i * 4)
    return ((numbers[i] & ((1 << from) - 1) & ~(((1 << to) - 1))) >>> to)
  } else {
    const breakpoint = (Math.floor(from / 4) + 1) * 4
    const bLength = to - breakpoint
    const a = getBits(numbers, from, breakpoint)
    const b = getBits(numbers, breakpoint, to)

    return (a << bLength) + b
  }
}

const LITERAL_VALUE = 4

const getPacket = (numbers, state) => {
  const version = getBits(numbers, state.bitIndex, state.bitIndex + 3)
  const type = getBits(numbers, state.bitIndex + 3, state.bitIndex + 6)
  state.bitIndex += 6

  if (type === LITERAL_VALUE) {
    let value = 0n
    const res = []

    while (true) {
      const lastGroup = getBits(numbers, state.bitIndex, state.bitIndex + 1) === 0
      const bits = getBits(numbers, state.bitIndex + 1, state.bitIndex + 5)

      value = (value << 4n) + BigInt(bits)
      res.push([bits, value])

      state.bitIndex += 5

      if (lastGroup) break
    }

    if (value < 0) {
      console.log('VALUE', value, res, Number.MAX_SAFE_INTEGER)
    }

    return value
  } else {
    // operator
    const lengthType = getBits(numbers, state.bitIndex, state.bitIndex + 1)
    state.bitIndex += 1

    const values = []

    if (lengthType === 0) {
      const subPacketsLength = getBits(numbers, state.bitIndex, state.bitIndex + 15)
      state.bitIndex += 15
      const stopAtBit = state.bitIndex + subPacketsLength

      while (state.bitIndex < stopAtBit) {
        values.push(getPacket(numbers, state))
      }
    } else {
      const subPacketsAmount = getBits(numbers, state.bitIndex, state.bitIndex + 11)
      state.bitIndex += 11

      for (let i = 0; i < subPacketsAmount; i++) {
        values.push(getPacket(numbers, state))
      }
    }

    switch (type) {
      case 0:
        return values.reduce((tot, val) => tot + val, 0n)
        break
      case 1:
        return values.reduce((tot, val) => tot * val, 1n)
        break
      case 2:
        return values.reduce((m, e) => e < m ? e : m)
        break
      case 3:
        return values.reduce((m, e) => e > m ? e : m)
        break
      case 5:
        return values[0] > values[1] ? 1n : 0n
        break
      case 6:
        return values[0] < values[1] ? 1n : 0n
        break
      case 7:
        return values[0] === values[1] ? 1n : 0n
        break
    }
  }
}

module.exports = (string) => {
  const numbers = string.split('').map(h => parseInt(h, 16))
  const state = { bitIndex: 0 }

  return Number(getPacket(numbers, state))
}
