function createGrid( width, height ) {
  let grid = "";
  
  for ( let i = 0; i < height; i++ ) {
    for ( let j = 0; j < width; j++ ) {
      if ( (i + j) % 2 === 0 ) {
        grid += " ";
      } else {
        grid += "#";
      }
    }
    grid += "\n";
  }
  return grid;
}

console.log(createGrid(8, 8))