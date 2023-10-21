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
let Lineas;

function preload() {
  Lineas= loadImage("data/Lineas.png");
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
  objJuego.dibujar();
  objJuego.recogioLlaves();
  image(Lineas, 30, 36, 490, 580);
}

function keyPressed() {
  objJuego.Personaje.teclaPresionada(keyCode);
}
