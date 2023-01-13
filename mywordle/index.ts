import wordle from './wordle';

const word = wordle.start();
let win = false;
let choose = '';
let count = 0;
for (let i = 0; i < 6 && !win; i += 1) {
  choose = wordle.setWordPlayer();
  win = wordle.checkWin(word, choose);
  wordle.displayWordle(choose, wordle.checkHint(word, choose));
  count = i + 1;
}

if (win) { console.log('Vous avez trouvé le mot', `${word}`, 'en', `${count}!`); } else { console.log('Vous avez perdu le mot était', `${word}!`); }
