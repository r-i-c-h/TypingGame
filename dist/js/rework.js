window.addEventListener('load', setup);
// DOM Elements
const wordInputField = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');

const dispScore = document.querySelector('#score');
const dispTimeRemaining = document.querySelector('#time');
const dispLvl = document.querySelector('#info__level');
const dispLvlStartTime = document.querySelector('#info__time');
const instructionsBox = document.querySelector('#instructions-box');
const instructionsTrigger = document.querySelector('#instructions-trigger');
const message = document.querySelector('#status');
const modalBackground = document.querySelector('.modal-full-overlay');

function setup() {
  modalBackground.classList.remove('hidden');
  getHighScores();
  instructionsTrigger.addEventListener('click', showInstructions);
  window.addEventListener('keyup', enterToStart);
}

function clearModal() {
  instructionsTrigger.removeEventListener('click', showInstructions);
  window.removeEventListener('keyup', enterToStart);
  modalBackground.classList.add('hidden');
}

function showInstructions() {
  instructionsBox.classList.remove('hidden');
  instructionsTrigger.classList.add('hidden');
}

function enterToStart(e) {
  e.preventDefault();
  if (event.keyCode === 13) {
    clearModal();
  }
}
