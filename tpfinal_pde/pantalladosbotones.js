class PantallaDosBotones {
  constructor(textoArray, fondoP) {
    this.fondoP=fondoP;
    this.Boton1=new Boton();
    this.Boton2=new Boton();
    this.textoArray= textoArray;
    this.Boton1.posX=100;
    this.Boton2.posX=100;
    this.Boton1.posY=300;
    this.Boton2.posY=400;
    this.Boton1.miColor= color(46, 152, 255);
    this.Boton2.miColor= color(76, 165, 255);
   
  }

  dibujar() {
    image(this.fondoP, 0, 0, 600, 600);
   text(this.textoArray,20,20);
      this.Boton.dibujar1()
      this.Boton.dibujar2()
  }
  /*click() {
   if (this.Boton.hiceclick()){
   return this.Boton.pantSig
   }
   }*/
}
