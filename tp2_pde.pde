// video https://youtu.be/oeQgWjz4fCo
PImage im;
int tam;
int posx, posy, posx1, posy1, posx2, posy2, posx3, posy3;

void setup() {
  size(800, 400);
  im = loadImage("im.jpg");
  tam = 100;
  posx = 550;
  posy = 150;
  posx1 = 550;
  posy1 = 250;
  posx2 = 650;
  posy2 = 250;
  posx3 = 650;
  posy3 = 150;
}

void draw() {
  image(im, 0, 0, 400, 400);
  int cc = fondo();

  lineasdearriba();
  lineadeabajo();
  lineaderecha();
  lineaizquierda();
  
if(frameCount >0 && frameCount<150){
  }
  if (frameCount >= 300) {
    tam += 1;
    posx -= 1;
    posy -= 1;
    posx1 -= 1;
    posy1 += 1;
    posx2 += 1;
    posy2 += 1;
    posx3 += 1;
    posy3 -= 1;
  }

  fill(#A70000);
  quad(posx, posy, posx1, posy1, posx2, posy2, posx3, posy3);

  image(im, 0, 0, 400, 400);
}

int fondo() {
  int cc = 25;
  int t = 400 / cc;

  for (int i = 0; i < cc; i++) {
    int tam = t * (cc - i);
    int x = (1200 - tam) / 2;
    int y = (400 - tam) / 2;

    if (i % 2 == 0) {
      if (mouseX >= x && mouseX <= x + tam && mouseY >= y && mouseY <= y + tam) {
        fill(random(256), 0, 0);
      } else {
        fill(0);
      }
    } else {
      if (mouseX >= x && mouseX <= x + tam && mouseY >= y && mouseY <= y + tam) {
        fill(0);
      } else {
        fill(255);
      }
    }

    rect(x, y, tam, tam);
  }

  return cc;
}

void keyPressed() {
  if (key == 't') {
    frameCount = 0; 
    tam = 100;
  posx = 550;
  posy = 150;
  posx1 = 550;
  posy1 = 250;
  posx2 = 650;
  posy2 = 250;
  posx3 = 650;
  posy3 = 150;
  }
}
