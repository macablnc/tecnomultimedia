class contador {
  constructor() {
    this.puntos = 0;
    this.maxpuntos = 20;
    this.miColor= color(255,255,255);
     this.cantidadDePuntos=0;
  }

  dibujar() {
    
    textFont(myFont);
    textSize(25);
    fill(this.miColor);
    text("Llaves", 530, 50);
     text(this.puntos, 530, 85);
    
  }
incrementar(){
    this.puntos++;
  }
}
