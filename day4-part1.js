const isBingo = (number, map) => {
  if (!map.get(number).marked) return false

  let bingoLeft = true
  let left = map.get(number).left
  while (left) {
    if (!map.get(left).marked) {
      bingoLeft = false
      break
    }
    left = map.get(left).left
  }

  let bingoRight = true
  let right = map.get(number).right
  while (right) {
    if (!map.get(right).marked) {
      bingoRight = false
      break
    }
    right = map.get(right).right
  }

  if (bingoLeft && bingoRight) return true

  let bingoUp = true
  let up = map.get(number).up
  while (up) {
    if (!map.get(up).marked) {
      bingoUp = false
      break
    }
    up = map.get(up).up
  }

  let bingoDown = true
  let down = map.get(number).down
  while (down) {
    if (!map.get(down).marked) {
      bingoDown = false
      break
    }
    down = map.get(down).down
  }

  return bingoUp && bingoDown
}

const unmarkedTotal = (board) => {
  let total = 0
  for (let [key, item] of board) {
    if (!item.marked) total += parseInt(item.value)
  }
  return total
}

module.exports = (input) => {
  const rows = input.split('\n\n')
  const numbers = rows[0].split(',')
  const boards = rows.slice(1).map(r => r.split('\n').map(r => r.trim().split(/\s+/)))
  const boardsMap = boards.map(board => {
    const map = new Map()

    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        const value = board[y][x]
        const item = {
          value,
          left: board[y][x - 1],
          right: board[y][x + 1],
          up: board[y - 1] ? board[y - 1][x] : undefined,
          down: board[y + 1] ? board[y + 1][x] : undefined
        }

        map.set(value, item)
      }
    }

    return map
  })

  // console.log(isBingo('22', boardsMap[0]))
  // boardsMap[0].set('22', { ...boardsMap[0].get('22'), marked: true })
  // boardsMap[0].set('13', { ...boardsMap[0].get('13'), marked: true })
  // boardsMap[0].set('17', { ...boardsMap[0].get('17'), marked: true })
  // boardsMap[0].set('11', { ...boardsMap[0].get('11'), marked: true })
  // boardsMap[0].set('0', { ...boardsMap[0].get('0'), marked: true })
  // console.log(isBingo('22', boardsMap[0]))

  // console.log(isBingo('18', boardsMap[1]))
  // boardsMap[1].set('15', { ...boardsMap[1].get('15'), marked: true })
  // boardsMap[1].set('18', { ...boardsMap[1].get('18'), marked: true })
  // boardsMap[1].set('8', { ...boardsMap[1].get('8'), marked: true })
  // boardsMap[1].set('11', { ...boardsMap[1].get('11'), marked: true })
  // boardsMap[1].set('21', { ...boardsMap[1].get('21'), marked: true })
  // console.log(isBingo('18', boardsMap[1]))

  for (let number of numbers) {
    for (let board of boardsMap) {
      if (board.has(number)) {
        board.set(number, { ...board.get(number), marked: true })

        if (isBingo(number, board)) {
          return unmarkedTotal(board) * parseInt(number)
        }
      }
    }
  }
}
