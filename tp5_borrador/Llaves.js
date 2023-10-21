class Llaves {
  constructor(posX,posY)
  {
    this.posX = posX;
    this.posY = posY;
    this.imagen = imagenllave ;
     this.atrapada = false;

  }
  
  dibujar(){
    if(!this.atrapada){
 image(this.imagen, this.posX, this.posY, 20, 20);
    }
  }
  
  atrapar(){
    this.atrapada = true;
  }
}
