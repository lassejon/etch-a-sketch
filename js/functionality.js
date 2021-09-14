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

function draw(color, event) {
    squares = document.getElementsByClassName('square')
    for(const square of squares) {
        square.addEventListener(event, () => square.style.backgroundColor = color);
    }
}

function clear() {
    squares = document.getElementsByClassName('row')
    for(const square of squares) {
        square.style.backgroundColor = "white";
    }
}