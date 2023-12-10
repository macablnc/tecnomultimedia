class contador {
  constructor() {
    this.puntos = 0;
    this.maxpuntos = 20;
    this.miColor= color(255,255,255);
     this.cantidadDePuntos=0;
  }

  dibujar() {

    textSize(25);
    fill(this.miColor);
    text("Llaves", 450, 100);
     text(this.puntos, 530, 100);
    
  }
incrementar(){
    this.puntos++;
  }
}
