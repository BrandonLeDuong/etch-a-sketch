var reset = document.getElementById("reset");

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

createGrid(64, 64);

function addHoverEffectToGridCells() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
      console.log(event);
    });
  });
}

function removeHoverEffectToGridCells() {
  const resetButton = document.querySelector("button");
  resetButton.addEventListener("click", () => {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((item) => {
      item.style.backgroundColor = "";
    });
  });
}

removeHoverEffectToGridCells();
addHoverEffectToGridCells();
