const traverse = (part, rulesItem, rules, cache, stepsLeft) => {
  const key = part + ':' + stepsLeft

  if (cache.has(key)) {
    return cache.get(key)
  }

  let result = {}

  if (stepsLeft === 0) {
    for (let c of rulesItem.count) {
      result[c] = (result[c] || 0) + 1
    }
  }

  for (let i = 0; i < rulesItem.parts.length; i++) {
    const subPart = rulesItem.parts[i]

    if (stepsLeft > 0) {
      const partResult = traverse(subPart, rules.get(subPart), rules, cache, stepsLeft - 1)

      for (let c of Object.keys(partResult)) {
        result[c] = (result[c] || 0) + partResult[c]
      }

      if (i > 0) {
        const connector = subPart.charAt(0)
        result[connector] -= 1
      }
    }
  }

  cache.set(key, result)

  return result
}

module.exports = (input) => {
  const rows = input.split('\n')
  const template = rows[0]
  const rules = new Map()

  for (let rule of rows.slice(2)) {
    const [pair, char] = rule.split(' -> ')
    const result = pair.substr(0, 1) + char + pair.substr(1)

    const count = []
    count.push(result.charAt(0))
    count.push(result.charAt(1))
    count.push(result.charAt(2))

    rules.set(pair, {
      parts: [pair.substr(0, 1) + char, char + pair.substr(1)],
      count
    })
  }

  const wordParts = []
  for (let i = 0; i < template.length - 1; i++) {
    wordParts.push(template.substr(i, 2))
  }

  const cache = new Map()
  const result = traverse('', { parts: wordParts }, rules, cache, 40)
  const count = Object.entries(result)

  const mostCommon = count.reduce((res, cur) => cur[1] > res[1] ? cur : res, ['', 0])
  const leastCommon = count.reduce((res, cur) => cur[1] < res[1] ? cur : res, ['', Infinity])

  return mostCommon[1] - leastCommon[1]
}
