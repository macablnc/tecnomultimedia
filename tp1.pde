float pX,pY;
float vX,vY;
PFont fuente;
String texto;
PImage t1;
PImage t2;
PImage t3;
PImage fondo;
void setup() {
  size(640, 480);
  pX= 0;
  pY= 0;
  vX=1;
  vY=1;
  t1 = loadImage("t1.jpg");
  t2 = loadImage("t2.jpg");
  t3 = loadImage("t3.jpg");
  fuente = createFont("Courier", 30);
  textFont(fuente);

}

void draw() {

      textFont(fuente);
    fill(#00FF01);
    stroke(0);
pX+=vX;
pY+=vY;
if (pX>width ){
  vX=-vX;
}
else if(pX<0){
 vX=-vX; 
}
  if(pY>height){
    vY=-vY;
  }
  else if(pY<0){
    vY=-vY;
  }
  if (frameCount >= 0 && frameCount <= 300) {    
    background(t1);    
    text("Triciclo Schwinn Lil Sting Ray Vintage", pX+5, pY+50);
  } else if (frameCount >= 300 && frameCount<=600) {
    background(t2); 
  text("triciclo inspirado en los años 60 para niños de 2 a 4 años", pX,pY);  
  }
   else if (frameCount >= 600 ) {    
     background(t3);
    text("Tiene un manubrio alto chopero y un asiento banana bajo", pX, pY);
   }
textSize(15);
    fill(#FF0303);
  ellipse(600,440,50,50);
  fill(0);
stroke(#FFFFFF);
  text("reset",580,445);
}

void mousePressed(){
if (mouseX>=576 && mouseX<=625 && mouseY>=415 && mouseY<=464){
  frameCount=0;
}

}
