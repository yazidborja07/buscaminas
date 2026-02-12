import createBoard from "./createBoard.js"
import drawGrid from "./drawGrid.js"
import drawCover from "./drawCover.js"
import randomRange from "./randomRange.js"
import shuffle2D from "./shuffle2D.js"
import findNumbers from "./findNumbers.js"
import revealFlood from "./revealFlood.js"
import revealAllBombs from "./revealAllBombs.js"

const canva = document.getElementById("juego")
const ctx = canva.getContext("2d")

const width = 600
const height = 600

const rows = 10
const cols = 10

canva.width = width
canva.height = height

let bombs = randomRange(5, 10)

let board = createBoard(rows, cols, 0)
let boardCover = createBoard(rows, cols, 0)

// colocar bombas
for (let i = 0; i < bombs; i++) {
  board[0][i] = -1
}

board = shuffle2D(board)
board = findNumbers(rows, cols, board)

function render() {
  ctx.clearRect(0, 0, width, height)

  drawGrid(ctx, rows, cols, width, height, board)
  drawCover(ctx, rows, cols, width, height, boardCover)
}

canva.addEventListener("click", handleClick)

function handleClick(e) {
  let gameOver = false
  if (gameOver) return

  const rect = canva.getBoundingClientRect()

  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const cellWidth = width / cols
  const cellHeight = height / rows

  const col = Math.floor(x / cellWidth)
  const row = Math.floor(y / cellHeight)

  if (!boardCover[row] || boardCover[row][col] === undefined) return
  if (boardCover[row][col] === 1) return

  if (board[row][col] === -1) {
    revealAllBombs(rows, cols, board, boardCover)
    gameOver = true
    render()
    return
  }

  revealFlood(row, col, board, rows, cols, boardCover)
  render()
}

render()
