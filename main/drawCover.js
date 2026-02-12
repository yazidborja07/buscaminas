function drawCover(ctx, rows, cols, width, height, board) {
  const cellWidth = width / cols
  const cellHeight = height / rows

  ctx.fillStyle = "black"

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const cell = board[y][x]

      if (cell != 0) continue

      const xx = x * cellWidth
      const yy = y * cellHeight

      ctx.fillRect(xx, yy, cellWidth, cellHeight)
    }
  }
}

export default drawCover
