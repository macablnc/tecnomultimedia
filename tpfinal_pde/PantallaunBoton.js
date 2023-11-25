class PantallaUnBoton {
  constructor(textoArray, fondoP) {
    this.fondoP=fondoP;
    this.textoArray= textoArray;
    this.Boton=new Boton();
    this.Boton.posX=480;
    this.Boton.posY=250;
    this.Boton.miColor= color(46, 152, 255);
  }

  dibujar() {
    image(this.fondoP, 0, 0);
    text(this.textoArray, 20, 20);
    this.Boton.dibujar();
  }
  /* click() {
   if (this.Boton.hiceclick()){
   return this.Boton.pantSig
   }
   }*/
}
