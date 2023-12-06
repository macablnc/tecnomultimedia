let fondoP=[];
let textoArray=[];
let cantImagenes=26;
let cantTexto=23;
let objAventura;
let cantImagenesG=3
let imagenGretelDerecha = [];
let imagenGretelIzquierda = [];
let imagenGretelArriba = [];
let imagenGretelAbajo = [];
//JUEGO PANTALLA 15
function preload() {
for (let b= 0; b < cantImagenesG; b++) {
    imagenGretelDerecha[b] = loadImage('data/GretelDerecha' + (b + 1) + '.png');
    imagenGretelIzquierda[b] = loadImage('data/GretelIzquierda' + (b + 1) + '.png');
    imagenGretelArriba[b] = loadImage('data/GretelArriba' + (b + 1) + '.png');
    imagenGretelAbajo[b] = loadImage('data/GretelAbajo' + (b + 1) + '.png');
  }
  for (let i=0; i < cantImagenes; i++) {
    fondoP[i] = loadImage('data/p' + i + '.jpg');
  }
  for (let a = 0; a < cantTexto; a++) {
    textoArray[a] = loadStrings("data/t" + a + ".txt");
  }
}
function setup() {
  createCanvas(600, 600);
  objAventura= new Aventura ();
}


function draw() {
  background(190, 137, 74);
  objAventura.dibujar()
}
function mousePressed() {
  objAventura.mousePressed();
}
