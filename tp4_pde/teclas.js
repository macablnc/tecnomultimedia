function presionarTecla() {
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      const siguienteFila = floor(y / cellHeight);
      const siguienteColumna = floor((x + cellWidth) / cellWidth);

      if (esCasillaVacia(siguienteFila, siguienteColumna)) {
        direccion = "DERECHA";
        x += 2;
        calcularSiguienteSpriteHorizontal();
      }
    } else if (keyCode == LEFT_ARROW) {
      const siguienteFila = floor(y / cellHeight);
      const siguienteColumna = floor((x - 2) / cellWidth);

      if (esCasillaVacia(siguienteFila, siguienteColumna)) {
        direccion = "IZQUIERDA";
        x -= 2;
        calcularSiguienteSpriteHorizontal();
      }
    } else if (keyCode == UP_ARROW) {
      const siguienteFila = floor((y - 2) / cellHeight);
      const siguienteColumna = floor(x / cellWidth);

      if (esCasillaVacia(siguienteFila, siguienteColumna)) {
        direccion = "ARRIBA";
        y -= 2;
        calcularSiguienteSpriteVertical();
      }
    } else if (keyCode == DOWN_ARROW) {
      const siguienteFila = floor((y + cellHeight) / cellHeight);
      const siguienteColumna = floor(x / cellWidth);

      if (esCasillaVacia(siguienteFila, siguienteColumna)) {
        direccion = "ABAJO";
        y += 2;
        calcularSiguienteSpriteVertical();
      }
    }
  }
  verificarPuntosRecogidos();
}

function esCasillaVacia(fila, columna) {
  return grid[fila][columna] === 0;
}

function verificarPuntosRecogidos() {
  const filaActual = floor(y / cellHeight);
  const columnaActual = floor(x / cellWidth);

  if (puntosvida[columnaActual][filaActual] > 0) {
    puntosvida[columnaActual][filaActual] = 0;
    puntaje++;
  } //SUMA EL PUNTAJE
}
