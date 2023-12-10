class Personaje {
  constructor(posX, posY) {
     this.posX = posX;
    this.posY = posY;
    this.vida=1
      this.DERECHA="DERECHA";
    this.IZQUIERDA="IZQUIERDA";
    this.ABAJO = "ABAJO";
    this.ARRIBA = "ARRIBA";
    this.tam=30;
    this.vel=2;
    this.imagenGretelDerecha = [];
    this.imagenGretelIzquierda = [];
    this.imagenGretelArriba = [];
    this.imagenGretelAbajo = [];
    for (let b = 0; b < cantImagenesG; b++) {
      this.imagenGretelDerecha[b] = loadImage('data/GretelDerecha' + (b + 1) + '.png');
      this.imagenGretelIzquierda[b] = loadImage('data/GretelIzquierda' + (b + 1) + '.png');
      this.imagenGretelArriba[b] = loadImage('data/GretelArriba' + (b + 1) + '.png');
      this.imagenGretelAbajo[b] = loadImage('data/GretelAbajo' + (b + 1) + '.png');
    }

    this.gretelAb = this.imagenGretelAbajo;
    this.gretelArr = this.imagenGretelArriba;
    this.gretelIz = this.imagenGretelIzquierda;
    this.gretelDer = this.imagenGretelDerecha;
    this.spriteActualHorizontal = 0;
    this.spriteActualVertical = 0;
  }
  dibujar() {
    if (dirP == this.DERECHA) {
      image(this.gretelDer[Math.round(spriteActualHorizontal)], posX, posY, this.tam, this.tam);
    } else if (dirP == this.IZQUIERDA) {
      image(this.gretelIz[Math.round(spriteActualHorizontal)], posX, posY, this.tam, this.tam);
    } else if (dirP == this.ARRIBA) {
      image(this.gretelArr[Math.round(spriteActualVertical)], posX, posY, this.tam, this.tam);
    } else if (dirP == this.ABAJO) {
      image(this.gretelAb[Math.round(spriteActualVertical)], posX, posY, this.tam, this.tam);
    }
  }
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
    dirP = this.DERECHA;
    posX+= this.vel;
    this.calcularSiguienteSpriteHorizontal();
  }
  moverIzquierda() {
    dirP = this.IZQUIERDA;
    posX-= this.vel;
    this.calcularSiguienteSpriteHorizontal();
  }
  moverArriba() {

    dirP = this.ARRIBA;
    posY-= this.vel;
    this.calcularSiguienteSpriteVertical();
  }
  moverAbajo() {
    dirP = this.ABAJO;
    posY+= this.vel;
    this.calcularSiguienteSpriteVertical();
  }
  estaVivo() {
  }
  calcularSiguienteSpriteHorizontal() {
    if (dirP == this.DERECHA || dirP == this.IZQUIERDA) {
      if (spriteActualHorizontal >= cantImagenesG - 1) {
        spriteActualHorizontal = 0;
      } else {
        spriteActualHorizontal += 0.5;
      }
    }
  }
  calcularSiguienteSpriteVertical() {
    if (dirP == this.ARRIBA || dirP == this.ABAJO) {
      if (spriteActualVertical >= cantImagenesG - 1) {
        spriteActualVertical = 0;
      } else {
        spriteActualVertical += 0.5;
      }
    }
  }
}
