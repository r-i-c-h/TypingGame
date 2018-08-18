// const modalForNewHighScore = ;
const hsTable = document.querySelector('#high-scores-table');

function sortByDupleScore(scoresArr){
  return scoresArr.slice().sort((a, b) => {
    return a[1] < b[1];
  });
}
function getHighScoresUpdate() {
  if (!localStorage.getItem('traversyHighScores')) {
    const initHighScoreArr = [
      ['Brad Traversy', 10000],
      ['Brad Traversy', 20000],
      ['Brad Traversy', 30000],
      ['Brad Traversy', 40000],
      ['Brad Traversy', 50000]
    ];
    localStorage.setItem('traversyHighScores', JSON.stringify(initHighScoreArr));
  }
  const hsArrStr = localStorage.getItem('traversyHighScores');
  return sortByDupleScore( JSON.parse(hsArrStr) );
}
function displayHighScores() {
  const hsArr = getHighScoresUpdate();
  hsTable.innerHTML = '';
  hsArr.forEach(entry => {
    let newRow = document.createElement('tr');
    const name = entry[0];
    const score = (entry[1] + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    const tdName = `<td class="name">${name}</td>`;
    const tdScore = `<td class="score">${score}</td>`;
    newRow.innerHTML = tdName + tdScore;
    hsTable.appendChild(newRow);
  });
}



function isNewHighScore(score){
  const scoresArr = getHighScoresUpdate();
  const lowestScore = scoresArr[scoresArr.length-1][1];
  return ( score > lowestScore );
}

function addNewDupleToStorage(){
  let scoresArr = getHighScoresUpdate();
  // scoresArr.push();
  scoresArr = sortByDupleScore(scoresArr).slice(0,5);
  localStorage.setItem('traversyHighScores', JSON.stringify(scoresArr));
  displayHighScores();
}

function getNewHighScoreName(){
  const hsModal = document.querySelector('.modal-new-high-score');
  const nameForm = document.getElementById('new-hs-submit');
  hsModal.classList.remove('hidden');

  nameForm.addEventListener('onSubmit', (e) => {
    debugger;
    const newName = document.querySelector('#new-hs-name');
    console.log(e.srcElement);
  });
}
