const aStar = require('a-star')

module.exports = (input) => {
  const nodes = input.split('\n')
    .map((r, y) => (
      r.split('')
        .map((v, x) => ({
          x,
          y,
          score: parseInt(v)
        }))
    ))

  let width = nodes[0].length
  let height = nodes.length

  for (let y = 0; y < height * 5; y++) {
    if (!nodes[y]) nodes[y] = []

    for (let x = 0; x < width * 5; x++) {
      if (y < height && x < width) continue
      const refScore = x < width ? nodes[Math.max(0, y - height)][x].score : nodes[y][Math.max(0, x - width)].score

      nodes[y][x] = {
        x,
        y,
        score: refScore >= 9 ? 1 : refScore + 1
      }
    }
  }

  width = nodes[0].length
  height = nodes.length
  const end = nodes[height - 1][width - 1]

  const path = aStar({
    start: nodes[0][0],
    isEnd: (node) => node.x === end.x && node.y === end.y,
    neighbor: (node) => [
      node.x > 0 && nodes[node.y][node.x - 1],
      node.x < width - 1 && nodes[node.y][node.x + 1],
      node.y > 0 && nodes[node.y - 1][node.x],
      node.y < height - 1 && nodes[node.y + 1][node.x],
    ].filter(n => n),
    distance: (a, b) => b.score,
    heuristic: (node) => Math.abs(node.x - end.x) + Math.abs(node.y - end.y),
    hash: (node) => node.x + ',' + node.y
  })

  return path.cost
}
