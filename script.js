const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".resetBtn");

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


// Reset the background color of all the cells to default
function resetBoard() {
  let cells = [...gridContainer.children];
  cells.forEach((cell) => {
    cell.style.backgroundColor = 'whitesmoke';
  });
}


// Eventlisteners
gridContainer.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "black";
});
resetBtn.addEventListener("click", resetBoard);

createGrid(10, 10);
