class juego {
  constructor(Personaje,siguientePantalla1,siguientePantalla2) {
    this.crearPersonaje();
    this.crearLlaves();
    this.grilla = new Grilla();
    this.tiempo = new Tiempo();
    this.contador = new contador();
    this.lineas= loadImage("data/Lineas.png");
    this.estActivo= false;
    this.siguientePantalla1 = siguientePantalla1;
    this.siguientePantalla2 = siguientePantalla2;

  }
  dibujar() {
     
    this.grilla.dibujar();
    this.tiempo.dibujar();
    
   image(this.lineas,25, 34, 420, 535);

    for (let i = 0; i < this.Llaves.length; i++) {
      if (!this.Llaves[i].atrapada) {
        this.Llaves[i].dibujar();
      }
    }
    this.Personaje.dibujar();
    this.contador.dibujar();
    
  }
  
 
teclaPresionada(keyCode){
  this.Personaje.teclaPresionada(keyCode);
}

  crearPersonaje() {

    this.Personaje= new Personaje();
  }
  crearLlaves() {
    this.cantLlavesxFila = 5;
    this.cantLlavesxColumna = 4;
    this.EspacioX = 125;
    this.EspacioY = 115;

    this.Llaves = [];

    for (let i = 0; i < this.cantLlavesxFila; i++) {
      for (let j = 0; j < this.cantLlavesxColumna; j++) {
        let x = this.EspacioX * j + 40;
        let y = this.EspacioY * i + 60;
        this.Llaves.push(new Llaves(x, y));
      }
    }
  }

  recogioLlaves() {
    for (let i = 0; i < this.Llaves.length; i++) {
      if (!this.Llaves[i].atrapada && this.hayColision(this.Llaves[i], this.Personaje)) {
        this.Llaves[i].atrapar();
        this.contador.incrementar();
       
      }

    }
  }
  hayColision(Llaves, Personaje) {
    return !Llaves.atrapada && dist(Llaves.posX, Llaves.posY, Personaje.posX, Personaje.posY) < 20;
  }

  gano() {
  }
  perdio() {
  }
  
juegoTerminado() {
  if (this.tiempo.llegoLimite()) {
    return this.siguientePantalla1; 
  } else {
    return -1; 
  }
}
 
}
