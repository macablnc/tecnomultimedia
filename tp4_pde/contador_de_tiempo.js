function contadordet() {
  textFont(myFont);
  textSize(25);

  if (pantallaActual === 4) {
    text("Tiempo \nRestante", 550, 150);
    text(80 - tiempo, 570, 220);
  }
  
  if (estaActivo) {
    tiempo = round(millis() / 1000) - tiempoInicial;
  }
}

function mouseClicked() {
  if (pantallaActual === 4) {
    tiempoInicial = round(millis() / 1000);
    estaActivo = true;
  }
}
