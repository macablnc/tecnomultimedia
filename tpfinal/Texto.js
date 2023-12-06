class texto {
  constructor(textoArray) {
    this.textoArray=textoArray;
    this.miColor= color(0);
    this.tamañoTex=15;
    this.posX=x;
    this.posY=y;
  }
  dibujar() {
    fill(this.miColor);
    textSize(this.tamañoTex);
    text(this.textoArray, this.posX, this.posY);
  }
}
