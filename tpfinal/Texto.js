 class texto {
  constructor() {
    this.textoArray=textoArray;
    this.miColor= color(0);
    this.tamañoTex=5;
    this.posX=x;
    this.posY=y;
  }
  dibujar() {
    fill(this.miColor);
    textSize(this.tamañoTex);
    text(this.textoArray, this.posX, this.posY);
  }
}
