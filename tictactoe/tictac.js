const cells = document.querySelectorAll(".game-cell");
const playerX = "X";
const playerO = "O";
let currentPlayer = playerX;

const checkForWinner = () => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      alert(currentPlayer + " wins!");
      return true;
    }
  }

  const isDraw = Array.from(cells).every((cell) => cell.textContent);
  if (isDraw) {
    alert("İt's a draw");
    return true;
  }

  return false;
};

const handleCellClick = (e) => {
  const cell = e.target;
  if (cell.textContent) return;

  cell.textContent = currentPlayer;
  if (checkForWinner()) {
    setTimeout(() => {
      cells.forEach((cell) => (cell.textContent = ""));
    }, 2000);
  } else {
    currentPlayer = currentPlayer === playerX ? playerO : playerX;
  }
};

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));