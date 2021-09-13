numSquare = 32;
numRowCol = Math.sqrt(numSquare)

board = document.createElement('div');
board.classList.add('board')

for (let i = 0; i < numRowCol; i++) {
    row = document.createElement('div');
    row.classList.add('row')
    for (let j = 0; j < numRowCol; j++) {
        square = document.createElement('div');
        square.classList.add('square')
        row.appendChild(square)
    }
    board.appendChild(row)
}

document.body.appendChild(board)

squares = document.getElementsByClassName('square')

for(const element of squares) {
    
    element.addEventListener('mouseenter', function (event) {
        if (element.style.backgroundColor !== "black") {
            element.style.backgroundColor = "black";
        } else {
            element.style.backgroundColor = "white";
        }
    })
};