import createBoard from "./createBoard.js"
import drawGrid from "./drawGrid.js"
import drawCover from "./drawCover.js"
import randomRange from "./randomRange.js"
import shuffle2D from "./shuffle2D.js"
import findNumbers from "./findNumbers.js"
import handleClick from "./handleClick.js"

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

render()
