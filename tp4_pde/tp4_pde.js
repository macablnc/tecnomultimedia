//https://youtu.be/hlsorpoPv1s
let grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const DERECHA = "DERECHA";
const IZQUIERDA = "IZQUIERDA";
const ABAJO = "ABAJO";
const ARRIBA = "ARRIBA";
let cantim = 2;
let cantp = 5;
let pacmand = [];
let pacmani = [];
let pacmanu = [];
let pacmando = [];
let puntoc;
let myFont;
let x = 40;
let y = 50;
let spriteActualHorizontal = 0;
let spriteActualVertical = 0;
let direccion = DERECHA;
let puntaje=0;
let perx;
let pery;
let cols;
let rows;
let puntox;
let puntoy;
let cellWidth;
let cellHeight;
let cantpuntos = [];
let puntosvida = [];
let pantallas = [];
let pantallaActual=0;
let tiempo = 0;
let cantiempo=80;
let tiempoInicial = 0;
let estaActivo = false;
let juegoActivo = false;
function preload() {
  puntoc = loadImage("data/puntochico.png");
  for (let p = 0; p < cantp; p++) {
    pantallas[p] = loadImage("data/P" + p + ".png");
  }
  for (let p = 0; p < cantim; p++) {

    pacmand[p] = loadImage('data/d' + (p + 1) + '.png');
    pacmani[p] = loadImage('data/i' + (p + 1) + '.png');
    pacmanu[p] = loadImage('data/up' + (p + 1) + '.png');
    pacmando[p] = loadImage('data/down' + (p + 1) + '.png');
  }

  myFont = loadFont('data/RetroGaming.ttf');
}

function setup() {
  createCanvas(700, 650);
 inicializar();
}
function draw() {
  background(0);
  if (pantallaActual === 4) {
     juegoActivo  = true;
    puntos();
    dibujarPersonaje();
    presionarTecla();
    image(pantallas[4], 0, 0);
    contador();
    contadordet();
    if (tiempo === cantiempo && puntaje < 117) {
      pantallaActual = 1;
    } else if (puntaje === 117 && tiempo < cantiempo) {
      pantallaActual = 2;
    }
  } else if (pantallaActual >= 0) {
    image(pantallas[pantallaActual], 0, 0);
  }
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
