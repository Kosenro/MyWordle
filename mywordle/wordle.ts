import { getRandomWord, getInput } from './lib';

const colors = require('colors/safe');

function start() : string {
  return getRandomWord().toUpperCase();
}

function setWordPlayer() : string {
  let choose = getInput('What\'s your word ? :');
  while (choose !== choose.toUpperCase() || choose.length !== 5) {
    console.log('The word must be uppercased and must be a five letters word');
    choose = getInput('What\'s your word ? :');
  }
  return choose;
}

function checkWin(word : string, choose : string) : boolean {
  if (choose === word) { return true; }
  return false;
}

function checkHint(word : string, choose : string) : string[] {
  const hint : string[] = [];
  choose.split('').forEach((item, index) => {
    if (word.includes(item)) {
      if (word[index] === item) {
        hint.push('green');
      } else {
        hint.push('yellow');
      }
    } else {
      hint.push('white');
    }
  });
  return hint;
}

function displayWordle(choose : string, hint : string[]) {
  let display = '';
  choose.split('').forEach((item, index) => {
    switch (hint[index]) {
      case 'green': display += `|${colors.green(item)}`; break;
      case 'yellow': display += `|${colors.yellow(item)}`; break;
      case 'white': display += `|${colors.white(item)}`; break;
      default: break;
    }
  });
  console.log('-----------');
  console.log(`${display}|`);
  console.log('-----------');
}

export default {
  start, setWordPlayer, checkWin, checkHint, displayWordle,
};
