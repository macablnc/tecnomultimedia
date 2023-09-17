function dibujarPersonaje() {
  fill(0);
  if (direccion == DERECHA) {
    image(pacmand[round(spriteActualHorizontal)], x, y);
  } else if (direccion == IZQUIERDA) {
    image(pacmani[round(spriteActualHorizontal)], x, y);
  } else if (direccion == ARRIBA) {
    image(pacmanu[round(spriteActualVertical)], x, y);
  } else if (direccion == ABAJO) {
    image(pacmando[round(spriteActualVertical)], x, y);
  }
}

function calcularSiguienteSpriteHorizontal() {
  if (direccion == DERECHA || direccion == IZQUIERDA) {
    if (spriteActualHorizontal >= cantim - 1) {
      spriteActualHorizontal = 0;
    } else {
      spriteActualHorizontal += 0.1;
    }
  }
}

function calcularSiguienteSpriteVertical() {
  if (direccion == ARRIBA || direccion == ABAJO) {
    if (spriteActualVertical >= cantim - 1) {
      spriteActualVertical = 0;
    } else {
      spriteActualVertical += 0.1;
    }
  }
}
