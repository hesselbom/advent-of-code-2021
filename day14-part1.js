const printWord = (item) => {
  let word = ''

  while (item) {
    word += item.char
    item = item.next
  }

  console.log(word)
}

module.exports = (input) => {
  const rows = input.split('\n')
  const template = rows[0]
  const rules = new Map()

  for (let rule of rows.slice(2)) {
    const [pair, char] = rule.split(' -> ')
    rules.set(pair, char)
  }

  let start
  let prev
  for (const char of template.split('')) {
    const item = { char }

    if (prev) prev.next = item
    if (!start) start = item

    prev = item
  }

  for (let i = 0; i < 10; i++) {
    let item = start

    while (item && item.next) {
      let next = item.next
      let pair = item.char + item.next.char
      let insert = rules.get(pair)

      if (insert) {
        let insertItem = { char: insert, next }
        item.next = insertItem
      }

      item = next
    }
  }

  let count = new Map()
  let item = start
  while (item) {
    count.set(item.char, (count.get(item.char) || 0) + 1)
    item = item.next
  }

  const mostCommon = Array.from(count).reduce((res, cur) => cur[1] > res[1] ? cur : res, ['', 0])
  const leastCommon = Array.from(count).reduce((res, cur) => cur[1] < res[1] ? cur : res, ['', Infinity])

  return mostCommon[1] - leastCommon[1]
}
