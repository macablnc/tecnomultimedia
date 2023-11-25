let fondoP=[];
let textoArray=[];
let cantImagenes=25;
let cantTexto=23;
let objAventura;
function preload() {

  for (let i=0; i < cantImagenes; i++) {
    fondoP[i] = loadImage('data/p' + i + '.jpg');
  }
  for (let a = 0; a < cantTexto; a++) {
    textoArray[a] = loadStrings("data/t" + (a+1) + ".txt");
  }
}
function setup() {
  createCanvas(600, 600);
  objAventura= new Aventura ();

}


function draw() {
  objAventura.dibujar()
}
/*function mousePressed() {
 Aventura.pantSig(mouseX, mouseY);}
 */
