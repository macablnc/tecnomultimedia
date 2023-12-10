class Aventura {
  constructor() {
    this.pantalla= [];
    this.pantalla[0]=new PantallaUnBoton(fondoP[0], textoArray[0], 1);
    this.pantalla[0].Boton.miTexto = "iniciar";
    this.pantalla[1]=new PantallaUnBoton(fondoP[1], textoArray[1], 2);
    this.pantalla[2]=new PantallaUnBoton(fondoP[2], textoArray[2], 3);
    this.pantalla[3]=new PantallaUnBoton(fondoP[3], textoArray[3], 4);
    this.pantalla[4]=new PantallaDosBotones(fondoP[4], textoArray[4], 5, 20);
    this.pantalla[4].boton2.miTexto = "hansel se come\n el pan";
    this.pantalla[4].boton1.miTexto = "hansel tira \ntrozos de pan";
    this.pantalla[5]=new PantallaUnBoton(fondoP[5], textoArray[5], 6);
    this.pantalla[6]=new PantallaUnBoton(fondoP[6], textoArray[6], 7);
    this.pantalla[7]=new PantallaUnBoton(fondoP[7], textoArray[7], 8);
    this.pantalla[8]=new PantallaDosBotones(fondoP[8], textoArray[8], 9, 24);
    this.pantalla[8].boton1.miTexto = "comerse la casa ";
    this.pantalla[8].boton2.miTexto = "no comerse \nla casa";
    this.pantalla[9]=new PantallaUnBoton(fondoP[9], textoArray[9], 10);
    this.pantalla[10]=new PantallaUnBoton(fondoP[10], textoArray[10], 11);
    this.pantalla[11]=new PantallaUnBoton(fondoP[11], textoArray[11], 12);
    this.pantalla[12]=new PantallaUnBoton(fondoP[12], textoArray[12], 13);
    this.pantalla[13]=new PantallaUnBoton(fondoP[13], textoArray[13], 14);
    this.pantalla[14]=new PantallaUnBoton(fondoP[14], textoArray[14], 15);
    this.pantalla[15]=new PantallaUnBoton(fondoP[15], "", 16);
    //PANTALLA JUEGO 16
    this.pantalla[16]=new juego("", 27, 28)
      this.pantalla[17]=new PantallaUnBoton(fondoP[16], textoArray[15], 18);
    this.pantalla[18]=new PantallaUnBoton(fondoP[17], textoArray[16], 19);
    this.pantalla[19]=new PantallaDosBotones(fondoP[18], textoArray[17], 26, 0);
    this.pantalla[19].boton1.miTexto = "creditos ";
    this.pantalla[19].boton2.miTexto = "inicio";
    this.pantalla[20]=new PantallaUnBoton(fondoP[19], textoArray[18], 21);
    this.pantalla[21]=new PantallaUnBoton(fondoP[20], textoArray[19], 22);
    this.pantalla[22]=new PantallaUnBoton(fondoP[21], textoArray[20], 23);
    this.pantalla[23]=new PantallaDosBotones(fondoP[22], textoArray[21], 26, 0);
    this.pantalla[23].boton1.miTexto = "creditos ";
    this.pantalla[23].boton2.miTexto = "inicio";
    this.pantalla[24]=new PantallaUnBoton(fondoP[23], textoArray[22], 25);
    this.pantalla[25]=new PantallaDosBotones(fondoP[24], textoArray[23], 26, 0);
    this.pantalla[25].boton1.miTexto = "creditos ";
    this.pantalla[25].boton2.miTexto = "inicio";
    this.pantalla[26]=new PantallaUnBoton(fondoP[25], "", 0);
    this.pantalla[26].Boton.miTexto = "inicio";
     this.pantalla[27]=new PantallaUnBoton(fondoP[26], "", 0);
     this.pantalla[27].Boton.miTexto = "inicio";
      this.pantalla[28]=new PantallaUnBoton(fondoP[27], "", 17);
    this.pantallaActual=0;
    this.personaje = new Personaje();
    this.objJuego= new juego();
    this.objTiempo = new Tiempo();
  }

  dibujar() {
    this.pantalla[this.pantallaActual].dibujar();
  }
  teclas(keyCode) {
    this.objJuego.teclaPresionada(keyCode);
  }

  mousePressed() {
    const siguientePantalla = this.pantalla[this.pantallaActual].click();
    if (siguientePantalla !== -1) {
      this.pantallaActual = siguientePantalla;
    }
  }
}
