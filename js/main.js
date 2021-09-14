numRows = 128;
numRowCol = Math.sqrt(numRows);

board = document.createElement('div');
board.classList.add('board');

for (let i = 0; i < numRows; i++) {
    row = document.createElement('div');
    row.classList.add('row')
    for (let j = 0; j < numRows; j++) {
        square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
    board.appendChild(row);
}

document.body.appendChild(board)

squares = document.getElementsByClassName('square')
for(const square of squares) {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = "black";
    })
};