class Tiempo {
  constructor() {
    this.tiempo = 0;
    this.tiempoLimite = 60;
    this.miColor= color(255, 255, 255);
  }

  dibujar() {

    textFont(myFont);
    textSize(25);
    fill(this.miColor);

    text( "Tiempo:" + this.tiempo, 530, 150 );


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
