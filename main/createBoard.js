function createBoard(rows, cols, value) {
  const board = []

  for (let y = 0; y < rows; y++) {
    const row = []
    for (let x = 0; x < cols; x++) {
      row.push(value)
    }
    board.push(row)
  }

  return board
}

export default createBoard
