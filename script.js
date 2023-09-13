var reset = document.getElementById("reset");
var sliderXY = document.getElementById("XYslider");

function createGrid(rows, cols) {
  const container = document.getElementById("grid-container");
  container.innerHTML = ""; // Clear previous grid cells

  // Loop through rows and columns to create the cells
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Create a new cell element
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      container.appendChild(cell);
    }
  }
  addHoverEffectToGridCells();
}

function update() {
  const sliderInfo = document.querySelector(".slider-info");
  var numRows = XYslider.value;
  var numCols = XYslider.value;
  const container = document.getElementById("grid-container");
  // Update the grid template columns CSS property of the grid container
  container.style.gridTemplateColumns = `repeat(${XYslider.value}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${XYslider.value}, 1fr)`;
  sliderInfo.textContent = numRows + " x " + numCols;

  createGrid(numRows, numCols);
}

sliderXY.addEventListener("input", update);

function colorPicker() {
  const colorPickerInput = document.getElementById("colorPicker");
  colorPickerInput.addEventListener("input", () => {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((cell) => {
      cell.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = colorPickerInput.value;
      });
    });
  });
}

function addHoverEffectToGridCells() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    });
  });
}

function defaultHoverEffectToGridCells() {
  const defaultButton = document.querySelector("#default-btn");

  defaultButton.addEventListener("click", () => {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((cell) => {
      cell.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
      });
    });
  });
}
function eraseHoverEffectToGridCells() {
  const eraseButton = document.querySelector("#eraser");
  console.log(eraseButton);
  eraseButton.addEventListener("click", () => {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((cell) => {
      cell.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "";
      });
    });
  });
}

function removeHoverEffectToGridCells() {
  const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", () => {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((item) => {
      item.style.backgroundColor = "";
    });
  });
}

function addRgbEffectsToGridCells() {
  const rbgButton = document.querySelector("#rgb");
  rbgButton.addEventListener("click", () => {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((cell) => {
      cell.addEventListener("mouseover", (event) => {
        let redValue = Math.floor(Math.random() * 256);
        let greenValue = Math.floor(Math.random() * 256);
        let blueValue = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor =
          event.target.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
      });
    });
  });
}

removeHoverEffectToGridCells();
eraseHoverEffectToGridCells();
addHoverEffectToGridCells();
addRgbEffectsToGridCells();
defaultHoverEffectToGridCells();
colorPicker();
update();
