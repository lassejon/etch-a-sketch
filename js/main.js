const slider = document.getElementById("select-rows");
const board = document.createElement('div');
const resetBtn = document.getElementById("reset")
const colorWell = document.getElementById("colorWell");
let color = colorWell.value;

start(color)

colorWell.addEventListener('input', () => {
    color = colorWell.value;
});

resetBtn.addEventListener('click', () => {
    squares = document.getElementsByClassName('square')
    for(const square of squares) {
        square.style.backgroundColor = "white";
    }
});

slider.addEventListener('change', () => {
    clear();
    removeGrid();
    createGrid();
    draw()
});

function start(color) {
    drawBoard();
    createGrid();
    draw()
}

function drawBoard() {
    board.classList.add('board');
    document.body.appendChild(board)
}

function removeGrid() {
    const rows = document.getElementsByClassName("row");
    while(rows.length > 0){
        rows[0].parentNode.removeChild(rows[0]);
    }
}

function createGrid() {
    let aspect = 4/3;
    let numRows = parseInt(slider.value);
    let numSquares = (numRows * aspect) | 0;
    for (let i = 0; i < numRows; i++) {
        row = document.createElement('div');
        row.classList.add('row')

        for (let j = 0; j < numSquares; j++) {
            square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        board.appendChild(row);
    }

}

function fillBox(e) {
    this.style.backgroundColor = color;
}

function startDrawing() {
    const squares = document.getElementsByClassName('square')
    for(const square of squares) {
        square.addEventListener('mouseover', fillBox)
    }
}

function stopDrawing() {
    console.log("stop drawing");
    const squares = document.getElementsByClassName('square')
    for(const square of squares) {
        square.removeEventListener('mouseover', fillBox)
    }
}


function draw() {
    const squares = document.getElementsByClassName('square')
    for(const square of squares) {
        square.addEventListener('mousedown', startDrawing);
        square.addEventListener('mouseup', stopDrawing);
    }
}

function clear() {
    const squares = document.getElementsByClassName('row')
    for(const square of squares) {
        square.style.backgroundColor = "white";
    }
}