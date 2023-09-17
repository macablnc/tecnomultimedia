function contadordet() {
  textFont(myFont);
  textSize(25);

  if (pantallaActual === 4) {
    text("Tiempo \nRestante", 550, 150);
    text(cantiempo - tiempo, 570, 220);
  }

  if (estaActivo) {
    tiempo = round(millis() / 1000) - tiempoInicial;
  }
}

function mouseClicked() {
  if (pantallaActual === 4) {
    if (!estaActivo) {
      tiempoInicial = round(millis() / 1000);
      estaActivo = true;
    }
  } else if (pantallaActual === 0) {
    if (juegoActivo ) {
      inicializar();
      juegoActivo  = false;
    }
  }
}
