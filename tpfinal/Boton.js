class Boton {
  constructor (x, y) {
    this.posX=x;
    this.posY=y;
    this.a=100;
    this.l=45;
    this.miColor="";
    this.miTexto="";
    
  }
  dibujar () {
    
    fill(this.miColor);
    rect(this.posX, this.posY, this.a, this.l);
    fill(0);
    textSize(20);
     text(this.miTexto,this.posX + 10,this.posY + 25);
  }
  hiceClick() {
    return mouseX > this.posX && mouseX < this.posX + this.a && mouseY > this.posY && mouseY < this.posY + this.l;
  }
}
