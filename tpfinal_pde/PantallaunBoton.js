class PantallaUnBoton {
  constructor(texto, fondoP) {
    this.fondo=fondoP;
    this.texto= Arraytexto[0];
    this.Boton=new Boton();
    this.Boton.posX=100;
    this.Boton.posY=300;
    this.Boton.miColor= color(46,152,255);
  }

  dibujar() {
    image(this.fondo, 0, 0);
    text(this.texto)
     this.Boton.dibujar();
  }
 /* click() {
    if (this.Boton.hiceclick()){
      return this.Boton.pantSig
    }
    }*/
    
  }
