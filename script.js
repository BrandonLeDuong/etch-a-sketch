function createGrid(rows, columns) {
  const container = document.getElementById("grid-container");
  // Loop through rows and columns to create the cells
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      // Create a new cell element
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      container.appendChild(cell);
    }
  }
}

createGrid(16, 16);
