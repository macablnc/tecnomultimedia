class Boton {
  constructor (x, y) {
    this.posX=x;
    this.posY=y;
    this.a=50;
    this.l=50;
    this.miColor="";
    
  }
  dibujar () {
    
    fill(this.miColor);
    rect(this.posX, this.posY, this.a, this.l);
  }
}
