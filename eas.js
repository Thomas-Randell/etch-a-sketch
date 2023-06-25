const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;

function gridSetup(gridWidth) {
    let grid = [];
    let gridSize = gridWidth ** 2;
    for (let i = 0; i < gridSize; i++) {
        div = document.createElement('div');
        div.style.width = ((containerWidth - 2) / (gridWidth)) + "px";
        div.style.height = div.style.width;
        div.classList.add("square");
        grid.push(div);
    }
    grid.forEach(square => container.appendChild(square));
    grid.forEach(square => square.addEventListener("mouseover", function () {
        square.style.background = "black";
    }))

}

function resetGrid() {
    document.querySelector(".container").innerHTML = "";
}

gridSetup(16)

btn1 = document.querySelector(".sizebtn")
btn1.addEventListener("click", function () {
    let userChoice = prompt("How many squares per side?")
    resetGrid()
    gridSetup(userChoice)
})

btn2 = document.querySelector(".gridtgl")
btn2.addEventListener("click", function () {
    let squares = document.querySelectorAll(".square")
    squares.forEach(square => square.classList.toggle("grid"))
})


