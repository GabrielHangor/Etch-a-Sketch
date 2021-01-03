const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".resetBtn");
const gridSizeInput = document.querySelector("#size");
const gridSizeEl = document.querySelector(".grid-size");
const randomBtn = document.querySelector(".randomBtn");

let currentPenColor = "rgb(176, 220, 255)";
let togglePen = false;
let toggleRandom = false;

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

// Update the grid when the scrollbar's valie is changed
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
    cell.style.backgroundColor = "";
  });
}

function getRandomColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

// Eventlisteners
gridContainer.addEventListener("mouseover", (e) => {
  if (togglePen && toggleRandom) {
    e.target.style.backgroundColor = getRandomColor();
  } else if (togglePen) {
    e.target.style.backgroundColor = `${currentPenColor}`;
  }
});

gridContainer.addEventListener("click", () => {
  togglePen = !togglePen;
});

resetBtn.addEventListener("click", resetBoard);

randomBtn.addEventListener("click", () => {
  toggleRandom = !toggleRandom;

  toggleRandom
    ? (randomBtn.style.backgroundColor = "rgb(255, 208, 208)")
    : (randomBtn.style.backgroundColor = "rgb(165, 207, 255)");
});

// Change the grid size dynamically
gridSizeInput.addEventListener("input", () => {
  let currentCellSize = gridSizeInput.value;
  updateGrid(currentCellSize);
});

createGrid(4, 4);
