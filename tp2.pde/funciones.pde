void lineasdearriba() {
  int y = 0;
  int a = 32;

  for (int i = 0; i < 10; i++) {
    for (int j = 0; j < 1; j++) {
      if (i % 2 == 0) {
        if (changeColor) {
          fill(tonoDeGris);  
        } else {
          fill(colorb);
        }
      } else {
        fill(colorn);
      }
      rect(570, y, 50, a);
      y += a;
      a -= 2;
    }
  }
}

void lineadeabajo() {
  int c = 400;
  int d = 26;

  for (int i = 0; i < 10; i++) {
    for (int j = 0; j < 1; j++) {
      if (i % 2 == 0) {
        if (changeColor) {
          fill(tonoDeGris); 
        } else {
          fill(colorb);
        }
      } else {
        fill(colorn);
      }
      rect(570, c, 50, d);
      c -= d - 2;
      d -= 2;
    }
  }
}

void lineaizquierda() {
  int y = 400;
  int a = 26;

  for (int i = 0; i < 10; i++) {
    for (int j = 0; j < 1; j++) {
     if (i % 2 == 0) {
        if (changeColor) {
          fill(tonoDeGris); 
        } else {
          fill(colorb);
        }
      } else {
        fill(colorn);
      }
      rect(y, 200, a, 50);
      y += a;
      a -= 2;
    }
  }
}

void lineaderecha() {
  int c = 800;
  int d = 30;

  for (int i = 0; i < 10; i++) {
    for (int j = 0; j < 1; j++) {
       if (i % 2 == 0) {
        if (changeColor) {
          fill(tonoDeGris); 
        } else {
          fill(colorb);
        }
      } else {
        fill(colorn);
      }
      rect(c, 200, d, 50);
      c -= d - 2;
      d -= 2;
    }
  }
}

void fondo() {
  int cc = 25;
  for (int i = 0; i < cc; i++) {
    int tam = int(map(i, 0, cc - 1, 500, 0));
    
    int x = (1190 - tam) / 2;
    int y = (450 - tam) / 2;

    if (i % 2 == 0) {
        if (changeColor) {
          fill(tonoDeGris); 
        } else {
          fill(colorb);
        }
      } else {
        fill(colorn);
      }

    rect(x, y, tam, tam);
  }
}

void cuadrado() {
  fill(#A70000);
  quad(posx, posy, posx1, posy1, posx2, posy2, posx3, posy3);
}
void keyPressed() {
  if (key == 'c' || key == 'C') {
    changeColor = !changeColor; 
    if (changeColor) {
      tonoDeGris = calcularTonoNuevo(tonoDeGris);
    }
  } else if (key == 'r' || key == 'R') {
    changeColor = false;
  }
}
