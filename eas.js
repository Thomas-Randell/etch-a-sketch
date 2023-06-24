let grid = [];
let container = document.querySelector(".container");
let containerWidth = container.offsetWidth;
let gridWidth = 8;
let gridSize = gridWidth ** 2;


for (let i = 0; i < gridSize; i++) {
    div = document.createElement('div');
    div.style.width = (containerWidth / (gridWidth)) - 4 + "px";
    div.style.height = div.style.width;
    div.classList.add("square");
    grid.push(div);
}

    grid.forEach(square => container.appendChild(square));