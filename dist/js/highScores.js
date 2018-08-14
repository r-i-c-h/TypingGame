const hsTable = document.querySelector('#high-scores-table');

function getHighScores() {
  if (!localStorage.getItem('traversyHighScores')) {
    const hsArrSetup = [
      ['Brad Travery', 1000000],
      ['Brad Travery', 2000000],
      ['Brad Travery', 3000000],
      ['Brad Travery', 4000000]
    ];
    localStorage.setItem('traversyHighScores', JSON.stringify(hsArrSetup));
  }
  const hsArrStr = localStorage.getItem('traversyHighScores');
  let hsArr = JSON.parse(hsArrStr).sort((a, b) => {
    return a[1] < b[1];
  });

  hsTable.innerHTML = '';
  hsArr.forEach(entry => {
    const name = entry[0];
    const tdName = `<td class="name">${name}</td>`;
    const score = entry[1];
    const tdScore = `<td class="score">${score}</td>`;

    let newRow = document.createElement('tr');
    newRow.innerHTML = tdName + tdScore;
    hsTable.appendChild(newRow);
  });
}
