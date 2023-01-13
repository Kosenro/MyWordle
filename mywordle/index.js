"use strict";
exports.__esModule = true;
var wordle_1 = require("./wordle");
var word = wordle_1["default"].start();
var win = false;
var choose = '';
var count = 0;
for (var i = 0; i < 6 && !win; i += 1) {
    choose = wordle_1["default"].setWordPlayer();
    win = wordle_1["default"].checkWin(word, choose);
    wordle_1["default"].displayWordle(choose, wordle_1["default"].checkHint(word, choose));
    count = i + 1;
}
if (win) {
    console.log('Vous avez trouvé le mot', "".concat(word), 'en', "".concat(count, "!"));
}
else {
    console.log('Vous avez perdu le mot était', "".concat(word, "!"));
}
