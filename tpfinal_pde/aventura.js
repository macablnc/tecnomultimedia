class Aventura {
  constructor() {
    this.pantalla= [];
    this.pantalla[0]=new PantallaUnBoton(fondoP[0],"",1);
    this.pantalla[1]=new PantallaUnBoton(fondoP[1], textoArray[1],2);
    this.pantalla[2]=new PantallaUnBoton(fondoP[2], textoArray[2],3);
    this.pantalla[3]=new PantallaUnBoton(fondoP[3], textoArray[3],4);
    this.pantalla[4]=new PantallaDosBotones(fondoP[4], textoArray[4],5,18);
    this.pantalla[5]=new PantallaUnBoton(fondoP[5], textoArray[5],6);
    this.pantalla[6]=new PantallaUnBoton(fondoP[6], textoArray[6],7);
    this.pantalla[7]=new PantallaUnBoton(fondoP[7], textoArray[7],8);
    this.pantalla[8]=new PantallaDosBotones(fondoP[8], textoArray[8],9,22);
    this.pantalla[9]=new PantallaUnBoton(fondoP[9], textoArray[9],10);
    this.pantalla[10]=new PantallaUnBoton(fondoP[10], textoArray[10],11);
    this.pantalla[11]=new PantallaUnBoton(fondoP[11], textoArray[11],12);
    this.pantalla[12]=new PantallaUnBoton(fondoP[12], textoArray[12],13);
    this.pantalla[13]=new PantallaUnBoton(fondoP[13], textoArray[13],14);
    this.pantalla[14]=new PantallaUnBoton(fondoP[14], textoArray[14],15);
    this.pantalla[15]=new PantallaUnBoton(fondoP[15], textoArray[15],16);
    this.pantalla[16]=new PantallaUnBoton(fondoP[16], textoArray[16],17);
    this.pantalla[17]=new PantallaDosBotones(fondoP[17], textoArray[17],24,0);
    this.pantalla[18]=new PantallaUnBoton(fondoP[18], textoArray[18],19);
    this.pantalla[19]=new PantallaUnBoton(fondoP[19], textoArray[19],20);
    this.pantalla[20]=new PantallaUnBoton(fondoP[20], textoArray[20],21);
    this.pantalla[21]=new PantallaDosBotones(fondoP[21], textoArray[21],24,0);
    this.pantalla[22]=new PantallaUnBoton(fondoP[22], textoArray[22],23);
    this.pantalla[23]=new PantallaDosBotones(fondoP[23], textoArray[23],24,0);
    this.pantalla[24]=new PantallaUnBoton(fondoP[24],"",0);
    this.pantallaActual=0;
  }

  dibujar(){
    this.pantalla[this.pantallaActual].dibujar()
  }
  cambiarPantalla(){
    }
  
/* mousePressed(){
    this.pantalla[this.pantallaActual].click()
  }*/

}
