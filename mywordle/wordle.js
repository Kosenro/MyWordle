"use strict";
exports.__esModule = true;
var lib_1 = require("./lib");
var colors = require('colors/safe');
function start() {
    return (0, lib_1.getRandomWord)().toUpperCase();
}
function setWordPlayer() {
    var choose = (0, lib_1.getInput)('What\'s your word ? :');
    while (choose !== choose.toUpperCase() || choose.length !== 5) {
        console.log('The word must be uppercased and must be a five letters word');
        choose = (0, lib_1.getInput)('What\'s your word ? :');
    }
    return choose;
}
function checkWin(word, choose) {
    if (choose === word) {
        return true;
    }
    return false;
}
function checkHint(word, choose) {
    var hint = [];
    choose.split('').forEach(function (item, index) {
        if (word.includes(item)) {
            if (word[index] === item) {
                hint.push('green');
            }
            else {
                hint.push('yellow');
            }
        }
        else {
            hint.push('white');
        }
    });
    return hint;
}
function displayWordle(choose, hint) {
    var display = '';
    choose.split('').forEach(function (item, index) {
        switch (hint[index]) {
            case 'green':
                display += "|".concat(colors.green(item));
                break;
            case 'yellow':
                display += "|".concat(colors.yellow(item));
                break;
            case 'white':
                display += "|".concat(colors.white(item));
                break;
            default: break;
        }
    });
    console.log('-----------');
    console.log("".concat(display, "|"));
    console.log('-----------');
}
exports["default"] = {
    start: start,
    setWordPlayer: setWordPlayer,
    checkWin: checkWin,
    checkHint: checkHint,
    displayWordle: displayWordle
};
