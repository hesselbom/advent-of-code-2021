const run = (connections, id, visited, path, result) => {
  visited.add(id)

  if (id === 'end') {
    result.push(path)
    return
  }

  const conns = connections.get(id)
  if (!conns) return

  for (let conn of connections.get(id)) {
    const isUpperCase = conn.toUpperCase() === conn

    if (isUpperCase || !visited.has(conn)) {
      run(connections, conn, new Set(visited), path.concat(conn), result)
    }
  }
}

module.exports = (input) => {
  const rows = input.split('\n')
  const connections = new Map()

  for (let row of rows) {
    const [a, b] = row.split('-')
    connections.set(a, (connections.get(a) || []).concat(b))
    connections.set(b, (connections.get(b) || []).concat(a))
  }

  const result = []
  run(connections, 'start', new Set(), ['start'], result)

  return result.length
}
