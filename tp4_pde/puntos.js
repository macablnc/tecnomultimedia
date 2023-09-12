function puntos() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let puntox = i * cellWidth + cellWidth / 2;
      let puntoy = j * cellHeight + cellHeight / 2;
      if (grid[j][i] === 1) {
        fill(0);
        rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
      } else if (puntosvida[i][j] > 0) {
        image(puntoc, puntox - puntoc.width / 2, puntoy - puntoc.height / 2);
      }
    }
  }
}
