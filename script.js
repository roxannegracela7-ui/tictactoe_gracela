// Get the elements from the HTML page
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartButton = document.getElementById('restart');

// Game variables
let currentPlayer = 'X';
let gameOver = false;

// All the ways to win (cell numbers 0 to 8)
const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
]

// What happens when a cell is clicked
function clickCell(cell) {
    if (cell.textContent !== "" || gameOver) {
        return;
    }

    cell.textContent = currentPlayer;

    if (checkWinner()) {
        statusText.textContent = "Player " + currentPlayer + "wins!";
        gameOver = true;
    } else if (isBoardFull()) {
        statusText.textContent = "It's a draw!";
        gameOver = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? '0' : 'X';
        statusText.textContent = "Player" + currentPlayer + "'s turn";
    }
}

// Check if the curent player has 3 in a row
function checkWinner() {
    for (const Line of winningLines) {
        const a = cells[Line[0]].textContent;
        const b = cells[Line[1]].textContent;
        const c = cells[Line[2]].textContent;

        if ( a === currentPlayer && b === currentPlayer && c === currentPlayer) {
            return true;
        }
    }
    return false;
}

// check if the board is full (draw)
function isBoardFull() {
    for (const cell of cells) {
        if (cell.textContent === "") {
            return false;
        }
    }
    return true;
}

// Connect the clicks to the function
for (const cell of cells) {
    cell.addEventListener('click', () => clickCell(cell));
}

restartButton.addEventListener('click', () => {
  // show alert dialog
  alert('Game will restart');
  // reload the page to restart the game location.reload();
});
  