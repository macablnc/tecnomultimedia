class Tiempo {
  constructor() {
    this.tiempo = 0;
    this.tiempoLimite = 60;
    this.miColor= color(255, 255, 255);
  }

  dibujar() {
if (pantallaActual === 4) {
    textFont(myFont);
    textSize(25);
    fill(this.miColor);

    text( "Tiempo:" + this.tiempo, 530, 150 );
}

    this.incrementarTiempo();
  }
  incrementarTiempo() {
    if (frameCount%60 == 0) {
      this.tiempo++;
    }
  }

  llegoLimite() {
    return this.tiempo >= this.tiempoLimite;
  }
}
function mouseClicked() {
  if (pantallaActual === 4) {
    if (!estaActivo) {
      tiempoInicial = round(millis() / 1000);
      estaActivo = true;
      obj.juego();
    }
  } else if (pantallaActual === 0) {
    if (!juegoActivo) {
      
      estaActivo = false;
    }
  }
}
