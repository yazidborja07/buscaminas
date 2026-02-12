function findNumbers(rows, cols, board) {
  // recorrer el board
  // DOC
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // almacenar el valor de la celda
      const cell = board[y][x]

      // si es una bomba, saltarnos
      if (cell == -1) continue

      let count = 0

      // conocer cuandos vecinos bomba tiene
      // y contarlos (8 posiciones)
      // DOC
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          // estamos en nuestra celda
          if (dx == 0 && dy == 0) continue

          const ny = y + dy
          const nx = x + dx

          // verificar que el vecino
          // este dentro del trablero
          if (
            ny >= 0 &&
            ny < rows &&
            nx >= 0 &&
            nx < cols &&
            board[ny][nx] == -1
          ) {
            count++
          }
        }
      }
      board[y][x] = count
    }
  }
  return board
}

export default findNumbers
