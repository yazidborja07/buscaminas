import revealFlood from "./revealFlood.js"
import revealAllBombs from "./revealAllBombs.js"

function handleClick(e) {
  let gameOver = false
  if (gameOver) return

  const canva = document.getElementById("juego")
  const rect = canva.getBoundingClientRect()

  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const cellWidth = width / colums
  const cellHeight = height / rowss

  const col = Math.floor(x / cellWidth)
  const row = Math.floor(y / cellHeight)

  if (!boardCover[row] || boardCover[row][col] === undefined) return
  if (boardCover[row][col] === 1) return

  if (board[row][col] === -1) {
    revealAllBombs()
    gameOver = true
    render()
    return
  }

  revealFlood(row, col)
  render()
}

export default handleClick
