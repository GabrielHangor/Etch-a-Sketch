const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".resetBtn");
const gridSizeInput = document.querySelector("#size");
const gridSizeEl = document.querySelector(".grid-size");

// Create a whiteboard based on the ammount of rows & columns
function createGrid(rows, columns) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-columns", columns);

  for (let i = 0; i < rows * columns; i++) {
    let cell = document.createElement("div");
    cell.className = "grid-cell";
    gridContainer.appendChild(cell);
  }
}

function updateGrid(cellSize) {
  gridContainer.textContent = "";
  resetBoard();
  createGrid(cellSize, cellSize);
  gridSizeEl.textContent = `Grid Size: ${cellSize}x${cellSize}`;
}

// Reset the background color of all the cells to default
function resetBoard() {
  const cells = [...gridContainer.children];
  cells.forEach((cell) => {
    cell.style.backgroundColor = "whitesmoke";
  });
}

// Eventlisteners
gridContainer.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "black";
});

resetBtn.addEventListener("click", resetBoard);

gridSizeInput.addEventListener("input", () => {
  let currentCellSize = gridSizeInput.value;
  updateGrid(currentCellSize);
});

createGrid(10, 10);
