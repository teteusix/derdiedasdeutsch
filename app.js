// SET INITIAL VALUE
var score_val = 0;
document.getElementById('result').innerHTML = score_val;


// ****************************************************

// var wordlistJSON = '';

var wordlistJSON = '{ "word" : [' +
'{ "article":"der" , "singular": "Beruf","plural": "Die Berufe"},' +
'{ "article":"die" , "singular": "Zahl","plural": "Die Zahlen"},' +
'{ "article": "die" , "singular": "Banane","plural": "Die Bananen"},' +
'{ "article": "der" , "singular": "Wein","plural": "Die Weine"},' +
'{ "article": "das" , "singular": "Glas","plural": "Die Gläser"},' +
'{ "article":"das" , "singular": "Haus","plural": "Die Häuser"} ]}';

var wordlist = JSON.parse(wordlistJSON);
// word_singular.innerHTML = wordlist.word[0].singular;
// word_plural.innerHTML = wordlist.word[0].plural;

console.log(wordlistJSON.length);
console.log(wordlist);
console.log(wordlist.word.length);


// take datas of the word
var word_article = document.getElementById('word-article'),
	word_singular = document.getElementById('word-singular'),
	word_plural = document.getElementById('word-plural'),
	word_information = document.getElementById('word-info'),
	word_translate = document.getElementById('word-translate');

// Buttons
var btn_der = document.getElementById('der'),
	btn_die = document.getElementById('die'),
	btn_das = document.getElementById('das'),
	answer_buttons = document.getElementsByClassName('answer-button');
	// btn_play = document.getElementById('play');
	// btn_play = document.getElementById('play').setAttribute('onclick','firstTurn()');

function generate_random_word () {
	 random_word = Math.floor(Math.random()*wordlist.word.length);
	 console.log(random_word);


	 return random_word;
}
generate_random_word();

function changeArray() {
	console.log('Muda a palavra de array');
}

function turn() {
	console.log('Função: Turno');
}
function checkButtons() {}
function nextTurn() {
	console.log('Função: Proximo Turno');
}
function endGame() {
	console.log('Função: Fim do jogo');
}

turn();
checkButtons();
nextTurn();
endGame();


