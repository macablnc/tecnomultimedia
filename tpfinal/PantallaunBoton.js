class PantallaUnBoton {
  constructor(fondoP, textoArray,siguientePantalla) {
    this.fondoP=fondoP;
    this.textoArray= textoArray;
    this.Boton=new Boton();
    this.Boton.posX=480;
    this.Boton.posY=300;
    this.Boton.miTexto="continuar"
    this.siguientePantalla = siguientePantalla;
  }

  dibujar() {
    image(this.fondoP, 0, 0,600,600);
    textSize(15);
    fill(255);
    text(this.textoArray, 20, 20);
    textSize(20);
    this.Boton.dibujar();
    
  }
 click() {
    if (this.Boton.hiceClick()) {
      return this.siguientePantalla;
    } else {
      return -1;
    }
  }
}
