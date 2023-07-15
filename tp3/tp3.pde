PImage p;
int cant = 25;
PImage[] fondosDePantallas = new PImage[cant];
String[][] lineas = new String[cant][];
int pantallaActual = 0;
int obtenerPantallaActual() {
  return pantallaActual;
}

void setup() {
  //carga de imagenes y textos 
  background(0);
  size(600, 600);
  fill(#FFFFFF);
  for (int i = 0; i < cant; i++) {
    fondosDePantallas[i] = loadImage("p" + i + ".jpg");
  }
  for (int a = 0; a < cant; a++) {
    textSize(15);
    lineas[a] = loadStrings("t" + a + ".txt");
  }
}

void draw() {
  int pantallaActual = obtenerPantallaActual();
println("La pantalla actual es: " + pantallaActual);
  pantalla(pantallaActual);
  mostrarLineas(pantallaActual);
//botones para seguir e iniciar
  if (pantallaActual == 0) {
    botoniniciar();
  }
 if (pantallaActual == 1 || pantallaActual == 2 || pantallaActual == 3 || pantallaActual == 5 || pantallaActual == 6 || pantallaActual == 7 || pantallaActual == 9 || pantallaActual == 10 || pantallaActual == 11 || pantallaActual == 12 || pantallaActual == 13 || pantallaActual == 14 || pantallaActual == 15 || pantallaActual == 16 || pantallaActual == 18 || pantallaActual == 19 || pantallaActual == 20 || pantallaActual == 22) {
  botonseguir();
}
//botones de opciones 
  if (pantallaActual==4){
    
 botonA();
  botonB();
  fill(#FFFFFF);
 
  text("hansel se come\n el pan ",485,265);
   text("hansel tira \ntrozos de pan",485,365);
   
  }
   if (pantallaActual==8){
    
 botonA();
  botonB();
  fill(#FFFFFF);
 
  text("comerse la casa  ",485,365);
   text("no comerse \nla casa",485,265);
   
  }
  //credito reinicio
  if (pantallaActual==17|| pantallaActual==21 || pantallaActual==23|| pantallaActual==24 ){
    
 volver();


  }
    if (pantallaActual==17|| pantallaActual==21 || pantallaActual==23){
    botoncreditos(); }
}

void mostrarLineas(int pantalla) {
  if (pantalla >= 0 && pantalla < lineas.length) {
    String[] lineasPantalla = lineas[pantalla];
    if (lineasPantalla != null) {
      for (int i = 0; i < lineasPantalla.length; i++) {
        text(lineasPantalla[i], 10, i * 15 + 50);
      }
    }
  }
}

void pantalla(int pantalla) {
  image(fondosDePantallas[pantalla], 0, 0, 600, 600);
}

void mousePressed() {
  //inicio hasta pantalla 4
  if (pantallaActual == 0) {
    if (mouseX >= 480 && mouseX <= 595 && mouseY >= 250 && mouseY <= 290) {
      float distancia = dist(mouseX, mouseY, 537.5, 265);
      if (distancia < 80) {
        pantallaActual++;
      
      }
    }
  }
  //funcionamiento de botones de siguente 
  else if (pantallaActual != 0 && (pantallaActual == 1 || pantallaActual == 2 || pantallaActual == 3 || pantallaActual == 5 || pantallaActual == 6 || pantallaActual == 7 || pantallaActual == 9 || pantallaActual == 10 || pantallaActual == 11 || pantallaActual == 12 || pantallaActual == 13 || pantallaActual == 14 || pantallaActual == 15 || pantallaActual == 16|| pantallaActual == 22)) {
    if (mouseX >= 480 && mouseX <= 595 && mouseY >= 250 && mouseY <= 290) {
      float distancia = dist(mouseX, mouseY, 537.5, 265);
      if (distancia < 80) {
        pantallaActual++;
       
      }
    }
    //funcionamiento de opciones de pantalla 4
  } else if (pantallaActual == 4) {
  if (mouseX >= 480 && mouseX <= 595 && mouseY >= 250 && mouseY <= 290) {
    float distancia = dist(mouseX, mouseY, 537.5, 265);
    if (distancia < 80) {
      pantallaActual = 18;
    }
  } else if (mouseX >= 480 && mouseX <= 595 && mouseY >= 350 && mouseY <= 390) {
    float distancia = dist(mouseX, mouseY, 537.5, 365);
    if (distancia < 80) {
      pantallaActual = 5;
    }
  }}
  // pantallas 18,19,20
else if (pantallaActual == 18 || pantallaActual == 19 || pantallaActual == 20 ) {
    if (mouseX >= 480 && mouseX <= 595 && mouseY >= 250 && mouseY <= 290) {
      float distancia = dist(mouseX, mouseY, 537.5, 265);
      if (distancia < 80) {
        pantallaActual++;
      }
    }
  }
  //funcionamiento de opciones de pantalla 8
  else if (pantallaActual == 8) {
  if (mouseX >= 480 && mouseX <= 595 && mouseY >= 250 && mouseY <= 290) {
    float distancia = dist(mouseX, mouseY, 537.5, 265);
    if (distancia < 80) {
      pantallaActual = 22;
    }
  } else if (mouseX >= 480 && mouseX <= 595 && mouseY >= 350 && mouseY <= 390) {
    float distancia = dist(mouseX, mouseY, 537.5, 365);
    if (distancia < 80) {
      pantallaActual = 9;
    }
  }
}
// funcion de creditos y reinicio 
else if (pantallaActual == 17 || pantallaActual == 21 || pantallaActual == 23) {
  if (mouseX >= 480 && mouseX <= 595 && mouseY >= 250 && mouseY <= 290) {
    float distancia = dist(mouseX, mouseY, 537.5, 265);
    if (distancia < 80) {
      pantallaActual=24;
    }
  } else if (mouseX >= 480 && mouseX <= 595 && mouseY >= 350 && mouseY <= 390) {
    float distancia = dist(mouseX, mouseY, 537.5, 365);
    if (distancia < 80) {
      pantallaActual = 0;
    }
  }
}
// reinicio en creditos 
if (pantallaActual == 24){
if (mouseX >= 480 && mouseX <= 595 && mouseY >= 350 && mouseY <= 390) {
    float distancia = dist(mouseX, mouseY, 537.5, 365);
    if (distancia < 80) {
      pantallaActual = 0;
    }
}}}          
