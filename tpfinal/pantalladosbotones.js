class PantallaDosBotones {
  constructor(fondoP, textoArray, siguientePantalla1, siguientePantalla2) {
    this.fondoP = fondoP;
    this.textoArray = textoArray;
    this.boton1 = new Boton(480, 250, "Opción 1");
    this.boton2 = new Boton(480, 350, "Opción 2");
    this.siguientePantalla1 = siguientePantalla1;
    this.siguientePantalla2 = siguientePantalla2;
  }

  dibujar() {
    image(this.fondoP, 0, 0, 600, 600);
    this.boton1.dibujar();
    this.boton2.dibujar();
    textSize(15);
    fill(255);
    text(this.textoArray, 0, 20);
  }

  click() {
    if (this.boton1.hiceClick()) {
      return this.siguientePantalla1;
    } else if (this.boton2.hiceClick()) {
      return this.siguientePantalla2;
    } else {
      return -1;
    }
  }
}
