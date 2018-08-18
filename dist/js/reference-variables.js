/* REFERENCE VARIABLES */
// DOM Elements
const currentWord = document.querySelector('#current-word');
const dispLvl = document.querySelector('#info__level');
const dispLvlStartTime = document.querySelector('#info__time');
const dispScore = document.querySelector('#score');
const dispTimeRemaining = document.querySelector('#time');
const gameOverBox = document.querySelector('.game-over-message');
const instructionsBox = document.querySelector('#instructions-box');
const instructionsTrigger = document.querySelector('#instructions-trigger');
const message = document.querySelector('#status');
const modalForNewHighScore = document.querySelector('.modal-new-high-score');
const modalForStartScreen = document.querySelector('.modal-start');
const startButton = document.querySelector('#start-button');
const wordInputField = document.querySelector('#word-input');

/* GLOBALS */
let alreadyPlayed = false;
let newHS = false;
let score = 0;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];
const phrases = [
  `Come on! You can do better than that!`,
  `Man, my Grandma got a better score than that`,
  `Really? How do you live with yourself?`,
  `Just stop. You are hopeless`,
  `You know, you really are quite bad at this game`,
  `I would compare your performance to poop, but that would be rude to poop.`,
  `Were you dropped as a baby?`,
  `Let's give you an 'F' for eFfort (or lack thereof)`,
  `You did so badly, I feel bad for myself for even knowing you!`
];

const levelsObj = {
  L1: { time: 10, add: 1000 },
  L2: { time: 8, add: 800 },
  L3: { time: 5, add: 500 },
  L4: { time: 3, add: 300 },
  L5: { time: 1, add: 100 }
};

let time = 2;
let level = 1;
let score = 0;
let gameLoopInt;
let isPlaying;

const levelsObj = {
  L1: { time: 10, add: 1000 },
  L2: { time: 8, add: 800 },
  L3: { time: 5, add: 500 },
  L4: { time: 3, add: 300 },
  L5: { time: 1, add: 100 }
};

let time = 2;
let level = 1;
let gameLoopInt;
let isPlaying;