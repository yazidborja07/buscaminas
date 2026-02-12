function revealFlood(startRow, startCol) {
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  const queue = [[startRow, startCol]]
  let qi = 0

  while (qi < queue.length) {
    const [r, c] = queue[qi++]

    if (r < 0 || r >= rows || c < 0 || c >= cols) continue
    if (boardCover[r][c] === 1) continue

    boardCover[r][c] = 1

    if (board[r][c] !== 0) continue

    for (const [dr, dc] of dirs) {
      const nr = r + dr
      const nc = c + dc

      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue
      if (boardCover[nr][nc] === 1) continue
      if (board[nr][nc] === -1) continue

      queue.push([nr, nc])
    }
  }
}

export default revealFlood
