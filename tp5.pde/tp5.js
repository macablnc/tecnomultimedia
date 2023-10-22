let objJuego;
let PersonajeObj;
let imagenllave;
let imagenGretel;
let cellWidth;
let cellHeight;
let cols;
let rows;
let myFont;
let estaActivo = false;
let imagenGretelDerecha= [];
let imagenGretelIzquierda= [];
let imagenGretelArriba= [];
let imagenGretelAbajo= [];
let cantImagenes=3;
let cantp = 4;
//let Lineas;
let pantallas = [];
let pantallaActual=0;
function preload() {
 for (let p = 0; p < cantp; p++) {
    pantallas[p] = loadImage("data/PHG" + (p+1) + ".png");}
  imagenllave= loadImage("data/llave.png");
  for (let i=0; i < cantImagenes; i++) {
    imagenGretelDerecha[i] = loadImage('data/GretelDerecha' + (i+1) + '.png');
    imagenGretelIzquierda[i] = loadImage('data/GretelIzquierda' + (i+1) + '.png');
    imagenGretelArriba[i] = loadImage('data/GretelArriba' + (i+1) + '.png');
    imagenGretelAbajo[i] = loadImage('data/GretelAbajo' + (i+1) + '.png');
  }
  myFont = loadFont('data/RetroGaming.ttf');
}
function setup() {

  createCanvas(700, 650);
  PersonajeObj = new Personaje();
  objJuego = new Juego();
}


function draw() {
  background(190, 137, 74);
  if (pantallaActual === 4) {
  objJuego.dibujar();
  objJuego.recogioLlaves();
//  image(Lineas, 30, 36, 490, 580);
}
if (objJuego.tiempo === objJuego.tiempoLimite && objJuego.contador.puntos < 117) {
  pantallaActual = 1;
} else if (objJuego.contador.puntos === 117 && objJuego.tiempo < objJuego.tiempoLimite) {
  pantallaActual = 2;
} else if (pantallaActual >= 0) {
  image(pantallas[pantallaActual], 0, 0);
}
}
function keyPressed() {
  objJuego.Personaje.teclaPresionada(keyCode);
}
function mousePressed() {
  if (pantallaActual === 0) {
    if (mouseX >= 188 && mouseX <= 480 && mouseY >= 450 && mouseY <= 535) {
      pantallaActual = 3;
    }
    if (mouseX >= 188 && mouseX <= 480 && mouseY >= 325 && mouseY <= 410) {
      pantallaActual = 4;
    }
  } else if (pantallaActual === 1 || pantallaActual === 2 || pantallaActual === 3) {
    if (mouseX >= 45 && mouseX <= 335 && mouseY >= 510 && mouseY <= 590) {
      pantallaActual = 0;
    } else if (mouseX >= 360 && mouseX <= 655 && mouseY >= 506 && mouseY <= 590) {
      pantallaActual = 3;
    }
  }
}
