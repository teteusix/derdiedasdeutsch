// SET INITIAL VALUE
var score_val = 0;
document.getElementById('result').innerHTML = score_val;

// take datas of the word
var word_article = document.getElementById('word-article'),
  word_singular = document.getElementById('word-singular'),
  word_plural = document.getElementById('word-plural'),
  word_information = document.getElementById('word-info'),
  word_translate = document.getElementById('word-translate'),
  wordList = words;

// Buttons
var btn_der = document.getElementById('der'),
  btn_die = document.getElementById('die'),
  btn_das = document.getElementById('das'),
  answer_buttons = document.getElementsByClassName('answer-button'),
  btn_play = document.getElementById('play');
  // btn_play = document.getElementById('play').setAttribute('onclick','firstTurn()');

console.log(words);

var generate_random_word = function () {
  var random_word = words[Math.floor(Math.random()*words.length)]; //generate a random word basead in the length of array
  console.log(random_word.article +' '+random_word.singular);
  console.log(words.length);
}


function generate_random_word() {
  console.log('Função: Gera palavra');
}
function turn() {
  console.log('Função: Turno');
}
function checkButtons() {
  console.log('Função: Confere botões');
}
function nextTurn() {
  console.log('Função: Proximo Turno');
}
function endGame() {
  console.log('Função: Fim do jogo');
}
generate_random_word();
turn();
checkButtons();
nextTurn();
endGame();