class juego {
  constructor() {
    this.crearPersonaje();
    this.crearLlaves();
    this.grilla = new Grilla();
    this.tiempo = new Tiempo();
    this.contador = new contador();
    this.lineas= loadImage("data/Lineas.png");
    this.estActivo= false;
    this.PersonajeObj= new Personaje();
  }
  dibujar() {
     image(this.lineas,30, 30, 420, 540);
    this.grilla.dibujar();
    this.tiempo.dibujar();
    this.Personaje.dibujar();
   

    for (let i = 0; i < this.Llaves.length; i++) {
      if (!this.Llaves[i].atrapada) {
        this.Llaves[i].dibujar();
      }
    }
    this.contador.dibujar();
  }
  iniciarJuego() {
  }


  crearPersonaje() {

    this.Personaje= new Personaje();
  }
  crearLlaves() {
    this.cantLlavesxFila = 5;
    this.cantLlavesxColumna = 4;
    this.EspacioX = 125;
    this.EspacioY = 116;

    this.Llaves = [];

    for (let i = 0; i < this.cantLlavesxFila; i++) {
      for (let j = 0; j < this.cantLlavesxColumna; j++) {
        let x = this.EspacioX * j + 40;
        let y = this.EspacioY * i + 60;
        this.Llaves.push(new Llaves(x, y, 10, 10));
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
    return this.Tiempo.llegoLimite();
  }
}
