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
  const amountBoards = boards.length
  const bingoedBoards = new Set()

  for (let number of numbers) {
    for (let i = 0; i < boardsMap.length; i++) {
      const board = boardsMap[i]

      if (board.has(number)) {
        board.set(number, { ...board.get(number), marked: true })

        if (isBingo(number, board)) {
          bingoedBoards.add(i)

          if (bingoedBoards.size === amountBoards) {
            return unmarkedTotal(board) * parseInt(number)
          }
        }
      }
    }
  }
}
