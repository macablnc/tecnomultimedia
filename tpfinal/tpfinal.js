let fondoP=[];
let textoArray=[];
let cantImagenes=28;
let cantTexto=24;
let objAventura;
let cantImagenesG=3
let dirP;
let spriteActualHorizontal;
let spriteActualVertical;

function preload() {
  for (let i=0; i < cantImagenes; i++) {
    fondoP[i] = loadImage('data/p' + i + '.jpg');
  }
  for (let a = 0; a < cantTexto; a++) {
    textoArray[a] = loadStrings("data/t" + a + ".txt");
  }
}
function setup() {
  createCanvas(600, 600);
 for (let a = 0; a < textoArray.length; a++) {
    for (let i = 0; i < textoArray[a].length; i++) {
      textoArray[a][i] = textoArray[a][i].replace("\\n" ,"\n");
    }
  }
  objAventura= new Aventura ();
  dirP= "DERECHA";
  spriteActualHorizontal = 0;
  spriteActualVertical = 0;
  posX=20;
  posY=50;
}


function draw() {
  background(190, 137, 74);
  objAventura.dibujar()
  
if (keyIsPressed){
  objAventura.teclas(keyCode);
}
}
function mousePressed() {
  objAventura.mousePressed();
}
