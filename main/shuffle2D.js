import shuffle from "./shuffle.js"

function shuffle2D(matrix) {
  const rows = matrix.length
  const cols = matrix[0].length

  const flat = matrix.flat()
  shuffle(flat)

  const result = []
  let index = 0

  for (let r = 0; r < rows; r++) {
    result.push(flat.slice(index, index + cols))
    index += cols
  }

  return result
}

export default shuffle2D
