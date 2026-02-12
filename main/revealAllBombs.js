function revealAllBombs(rows, cols, board, boardCover) {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (board[y][x] === -1) {
        boardCover[y][x] = 1
      }
    }
  }
}

export default revealAllBombs
