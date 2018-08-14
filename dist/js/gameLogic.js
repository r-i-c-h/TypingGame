/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// GAME LOGIC
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

function randomNum(limit) {
  return Math.floor(Math.random() * limit);
}

// function init() {
//   wordInputField.addEventListener('input', startMatch);
//   showWord(words);
//   setInterval(countdown, 1000);
//   gameCheckInt = setInterval(checkGameStatus, 50);
// }

// function startMatch() {
//   isPlaying = true;
//   time = 2;

//   if (matchInputToWord()) {
//     showWord(words);
//     wordInputField.value = '';
//     score++;
//   }
//   dispScore.innerText = score;
// }

// function matchInputToWord() {
//   if (wordInputField.value === currentWord.innerHTML) {
//     message.innerHTML = 'Correct';
//     return true;
//   } else {
//     message.innerHTML = '';
//     return false;
//   }
// }

// function showWord(wordsArr) {
//   let indx = randomNum(wordsArr.length);
//   if (currentWord.innerText === words[indx]) {
//     return showWord(wordsArr);
//   }
//   currentWord.innerText = words[indx];
//   return null;
// }

// function countdown(timeVal = time) {
//   if (time > 0) {
//     time--;
//   } else if (time === 0) {
//     isPlaying = false;
//   }
//   dispTimeRemaining.innerText = time;
// }

// function checkGameStatus() {
//   if (!isPlaying && time === 0) {
//     endGame();
//   }
// }

// // function endGame() {
// //   clearInterval(showWord);
// //   // clearInterval(checkGameStatus);
// //   clearInterval(gameCheckInt);
// //   message.style.whiteSpace = 'pre-wrap';
// //   const msg = `G A M E         O V E R

// //   You topped out at Level ${level} and your final score is: ${score}
// //   ${phrases[randomNum(phrases.length)]}
// //   `;
// //   message.innerText = msg;
// // }

// // function stopTime() {
// //   let nextTimeoutID = window.setTimeout(function(){}, 0);
// //   let nextIntervalID = window.setInterval(function(){}, 0);
// //   while (nextTimeoutID) { clearTimeout(nextTimeoutID--); }
// //   while (nextIntervalID) { clearInterval(nextIntervalID--); }
// // }
