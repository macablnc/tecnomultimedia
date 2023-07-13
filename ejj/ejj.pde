PImage p;
int cant = 17;
PImage[] fondosDePantallas = new PImage[cant];

void setup() {
  size(600, 600);
  
  for (int i = 0; i < cant; i++) {
    fondosDePantallas[i] = loadImage("p" + i + ".jpg");
  }
}

void draw() {
  pantalla(0);

}

void pantalla(int pantalla) {
  image(fondosDePantallas[pantalla], 0, 0, 600, 600);
  
  if ((pantalla >= 0 && pantalla <= 3) || (pantalla >= 5 && pantalla <= 7) || (pantalla >= 9 && pantalla <= 17)) {
    botonseguir();
   /* void mouseClicked() {
  if (botonseguir )
    }*/
  }
  }
