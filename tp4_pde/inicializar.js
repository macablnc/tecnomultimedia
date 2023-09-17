function inicializar() {
  juegoActivo  = true;
  cols = grid[0].length;
  rows = grid.length;
  cellWidth = width / cols;
  cellHeight = height / rows; 
  puntosvida = [];
  puntaje = 0;
  tiempo = 0;
  estaActivo = false;

  x=40;
  y=50;
  for (let i = 0; i < cols; i++) {
    cantpuntos.push([]);
    puntosvida.push([]);
    for (let j = 0; j < rows; j++) {
      cantpuntos[i].push(floor(random(0, 2)));
      puntosvida[i].push(1);
    }
  }
}
