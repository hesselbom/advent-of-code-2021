const getBits = (numbers, from, to) => {
  const i = Math.floor(from / 4)
  const j = Math.floor((to - 1) / 4)

  if (i === j) {
    from = 4 - (from - i * 4)
    to = 4 - (to - i * 4)
    return ((numbers[i] & ((1 << from) - 1) & ~(((1 << to) - 1))) >>> to)
  } else {
    // from = 4 - (from - i * 4)
    // to = 4 - (to - i * 4)
    // const a = ((numbers[i] & ((1 << from) - 1) & ~(((1 << to) - 1))) >>> to)
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

  let versionNumbersSum = version

  if (type === LITERAL_VALUE) {
    let value = 0

    while (true) {
      const lastGroup = getBits(numbers, state.bitIndex, state.bitIndex + 1) === 0
      const bits = getBits(numbers, state.bitIndex + 1, state.bitIndex + 5)

      value = (value << 4) + bits

      state.bitIndex += 5

      if (lastGroup) break
    }
  } else {
    // operator
    const lengthType = getBits(numbers, state.bitIndex, state.bitIndex + 1)
    state.bitIndex += 1

    if (lengthType === 0) {
      const subPacketsLength = getBits(numbers, state.bitIndex, state.bitIndex + 15)
      state.bitIndex += 15
      const stopAtBit = state.bitIndex + subPacketsLength

      while (state.bitIndex < stopAtBit) {
        versionNumbersSum += getPacket(numbers, state)
      }
    } else {
      const subPacketsAmount = getBits(numbers, state.bitIndex, state.bitIndex + 11)
      state.bitIndex += 11

      for (let i = 0; i < subPacketsAmount; i++) {
        versionNumbersSum += getPacket(numbers, state)
      }
    }
  }

  return versionNumbersSum
}

module.exports = (string) => {
  const numbers = string.split('').map(h => parseInt(h, 16))
  const state = { bitIndex: 0 }

  return getPacket(numbers, state)
}
