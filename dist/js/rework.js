// window.addEventListener('load', setup);
// window.addEventListener('load', startGame);

function setup() {
  modalForStartScreen.classList.remove('hidden');
  modalForNewHighScore.classList.add('hidden');
  displayHighScores();
  instructionsTrigger.addEventListener('click', showInstructions);
  window.addEventListener('keyup', enterToStart);
  startButton.addEventListener('click', enterToStart);
}

function clearModal() {
  instructionsTrigger.removeEventListener('click', showInstructions);
  window.removeEventListener('keyup', enterToStart);
  startButton.removeEventListener('click', enterToStart);
  modalForStartScreen.classList.add('hidden');
}

function showInstructions() {
  instructionsBox.classList.remove('hidden');
  instructionsTrigger.classList.add('hidden');
}

function enterToStart(e) {
  e.preventDefault();
  if (event.keyCode === 13 || e.type==='click') {
    clearModal();
    startGame();
  }
}