const container = document.getElementById("grid-container");
const div = document.createElement("div");
// Loop through rows and columns to create the cells
for (let row = 0; row < 16; row++) {
  for (let col = 0; col < 16; col++) {
    // Create a new cell element
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    container.appendChild(cell);
  }
}
