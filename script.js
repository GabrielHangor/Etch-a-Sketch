const gridContainer = document.querySelector(".grid-container");

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

gridContainer.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "black";
});

createGrid(10, 10);
