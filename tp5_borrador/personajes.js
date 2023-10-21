class Personaje {
  constructor() {
    this.posX= 20;
    this.posY= 50;
    this.vida=1;
    this.DERECHA="DERECHA";
    this.IZQUIERDA="IZQUIERDA";
    this.ABAJO = "ABAJO";
    this.ARRIBA = "ARRIBA";
    this.dir=this.DERECHA;
    this.tam=30;
    this.vel=2;
    this.gretelAb = imagenGretelAbajo ;
    this.gretelArr=imagenGretelArriba;
    this.gretelIz=imagenGretelIzquierda;
    this.gretelDer=imagenGretelDerecha;
    this.spriteActualHorizontal=0;
    this.spriteActualVertical=0;
  }
  dibujar() {

    if (this.dir == this.DERECHA) {
      image(this.gretelDer[Math.round(this.spriteActualHorizontal)], this.posX, this.posY,this.tam,this.tam);
    } else if (this.dir == this.IZQUIERDA) {
      image(this.gretelIz[Math.round(this.spriteActualHorizontal)], this.posX, this.posY,this.tam,this.tam);
    } else if (this.dir == this.ARRIBA) {
      image(this.gretelArr[Math.round(this.spriteActualVertical)], this.posX, this.posY,this.tam,this.tam);
    } else if (this.dir == this.ABAJO) {
      image(this.gretelAb[Math.round(this.spriteActualVertical)], this.posX, this.posY,this.tam,this.tam);
    }}
    
  teclaPresionada(keyCode) {
      if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode == UP_ARROW) {
      this.moverArriba();
    } else if (keyCode == DOWN_ARROW) {
      this.moverAbajo();
    }
  }
}
  moverDerecha() {
    this.dir = this.DERECHA;
    this.posX+= this.vel;
    this.calcularSiguienteSpriteHorizontal();
  }
  moverIzquierda() {
    this.dir = this.IZQUIERDA;
    this.posX-= this.vel;
    this.calcularSiguienteSpriteHorizontal();
  }
  moverArriba() {

    this.dir = this.ARRIBA;
    this.posY-= this.vel;
    this.calcularSiguienteSpriteVertical();
  }
  moverAbajo() {
    this.dir = this.ABAJO;
    this.posY+= this.vel;
    this.calcularSiguienteSpriteVertical();
  }
  estaVivo() {
  }
  calcularSiguienteSpriteHorizontal() {
    if (this.dir == this.DERECHA || this.dir == this.IZQUIERDA) {
      if (this.spriteActualHorizontal >= cantImagenes - 1) {
        this.spriteActualHorizontal = 0;
      } else {
        this.spriteActualHorizontal += 0.1;
      }
    }
  }

  
  calcularSiguienteSpriteVertical() {
    if (this.dir == this.ARRIBA || this.dir == this.ABAJO) {
      if (this.spriteActualVertical >= cantImagenes - 1) {
        this.spriteActualVertical = 0;
      } else {
        this.spriteActualVertical += 0.1;
      }
    }
  }
}
