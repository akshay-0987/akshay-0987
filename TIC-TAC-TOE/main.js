const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const newGameBtn = document.getElementById('newGameBtn');
const result = document.getElementById('result');
let currentPlayer = 'X';
let gameActive = true;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(e) {
  const cell = e.target;
  const index = parseInt(cell.getAttribute('data-cell'));
  
  if (cell.textContent !== '' || !gameActive) return;
  
  cell.textContent = currentPlayer;
  
  if (checkWin()) {
    showModal(`Player ${currentPlayer} wins!`);
    gameActive = false;
    return;
  }
  
  if (checkDraw()) {
    showModal("It's a draw!");
    gameActive = false;
    return;
  }
  
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
  return winningConditions.some(condition => {
    return condition.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function checkDraw() {
  return [...cells].every(cell => {
    return cell.textContent !== '';
  });
}

function restartGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  gameActive = true;
  status.textContent = `Player ${currentPlayer}'s turn`;
}

function showModal(message) {
  result.textContent = message;
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

restartBtn.addEventListener('click', restartGame);
closeBtn.addEventListener('click', closeModal);
newGameBtn.addEventListener('click', () => {
  closeModal();
  restartGame();
});
