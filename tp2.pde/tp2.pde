//https://youtu.be/8_kw2FN57ds
PImage im;
int tam;
int posx, posy, posx1, posy1, posx2, posy2, posx3, posy3;
color colorb;
color colorn;
int tonoDeGris;
boolean changeColor = false;

void setup() {
  colorb = color(#FFFFFF);
  colorn = color(0);
  size(800, 400);
  im = loadImage("im.jpg");
  tam = 100;
  posx = 570;
  posy = 200;
  posx1 = 570;
  posy1 = 250;
  posx2 = 620;
  posy2 = 250;
  posx3 = 620;
  posy3 = 200;

  tonoDeGris = int(random(256));
}

void draw() {
  fondo();
  lineasdearriba();
  lineadeabajo();
  lineaderecha();
  lineaizquierda();
  image(im, 0, 0, 400, 400);
  cuadrado();
}


int calcularTonoNuevo(int tonoActual) {
  int nuevoTono = (tonoActual + 10) % 256;  
  return nuevoTono;
}
