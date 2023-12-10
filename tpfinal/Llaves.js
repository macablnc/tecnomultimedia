class Llaves {
  constructor(posX,posY)
  {
    this.imgLlave= loadImage("data/llave.png");
    this.posX = posX;
    this.posY = posY;
     this.atrapada = false;
     

  }
   dibujar(){
    if(!this.atrapada){
 image(this.imgLlave, this.posX, this.posY, 20, 20);
    }
  }
  
  atrapar(){
    this.atrapada = true;
  }
}
