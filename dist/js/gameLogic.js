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




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// END GAME:
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// checkNewHighScore(score);