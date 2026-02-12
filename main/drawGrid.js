function drawGrid(ctx, rows, cols, width, height, board) {
  const cellWidth = width / cols
  const cellHeight = height / rows

  ctx.strokeStyle = "white"
  ctx.font = "32px Arial"
  ctx.textAlign = "center"
  ctx.fillStyle = "white"
  ctx.textBasLine = "middle"

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const cell = board[y][x]

      const xx = x * cellWidth
      const yy = y * cellHeight

      ctx.strokeRect(xx, yy, cellWidth, cellHeight)

      if (cell == -1) {
        ctx.fillStyle = "red"
      } else if (cell == 1) {
        ctx.fillStyle = "cornflowerblue"
      } else if (cell == 2) {
        ctx.fillStyle = "lightgreen"
      } else {
        ctx.fillStyle = "salmon"
      }
      if (cell != 0) ctx.fillText(cell, xx + cellWidth / 2, yy + cellHeight / 2)
    }
  }
}

export default drawGrid
