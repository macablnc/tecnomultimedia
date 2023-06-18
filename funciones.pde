
void lineasdearriba() {
  int y = 0;
  int a = 30;

  for (int i = 0; i < 10; i++) {
    rect(550, y, 100, a);
    y += a;
    a -= 2;

    if (i % 2 == 0) {
      fill(255);
    } else {
      fill(0);
    }

    rect(550, y, 100, a);
  }

 
}
void lineadeabajo(){
   int c = 400;
  int d = 30;

  for (int i = 0; i < 10; i++) {
    rect(550, c, 100, d);
    c -= d-2 ;
    d -= 2;
    if (i % 2 == 0) {
      fill(255);
    } else {
      fill(0);
    }
}
}
void lineaizquierda(){
  int y =400;
  int a = 30;
  for (int i = 0; i <10; i++) {
    rect(y, 150, a, 100);
    y += a;
    a-= 2;
    if (i % 2 == 0) {
      fill(255);
    } else {
      fill(0);
    }
  }
}
void lineaderecha(){
   int c = 800;
  int d = 30;

  for (int i = 0; i < 10; i++) {
    rect(c, 150, d, 100);
    c -= d-2 ;
    d -= 2;
    if (i % 2 == 0) {
      fill(255);
    } else {
      fill(0);
    }
  }
}
