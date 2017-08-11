// SET INITIAL VALUE
var score_val = 0;
document.getElementById('result').innerHTML = score_val;


// ****************************************************

// var wordlistJSON = '';

var wordlistJSON = '{ "word" : [' +
'{ "article":"der" , "singular": "Beruf","plural": "Die Berufe","information": "Info","level": "A1","translate": {"pt": "A profissão","en": "A profissão"}},' +
'{ "article":"die" , "singular": "Zahl","plural": "Die Zahlen","information": "info","level": "A1","translate": {"pt": "O valor","en": "O valor"}},' +
'{ "article": "die" , "singular": "Banane","plural": "Die Bananen","information": "info","level": "A1","translate": {"pt": "A casa","en": "A casa"}},' +
'{ "article": "der" , "singular": "Wein","plural": "Die Weine","information": "info","level": "A1","translate": {"pt": "A Banana","en": "A Banana"}},' +
'{ "article": "das" , "singular": "Glas","plural": "Die Gläser","information": "info","level": "A1","translate": {"pt": "O Vinho","en": "O Vinho"}},' +
'{ "article":"das" , "singular": "Haus","plural": "Die Häuser","information": "info","level": "A1","translate": {"pt": "O copo","en": "O copo"}} ]}';

var wordlist = JSON.parse(wordlistJSON);

var usedWords = [];


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
	btn_play = document.getElementById('play');
	// btn_play = document.getElementById('play').setAttribute('onclick','firstTurn()');

play.setAttribute('onclick','firstTurn()');
function generate_random_word () {
	// check first if have word for use
	if (wordlist.word.length == 0) {
		endGame();
	} else {
		//generate a random number basead in length of the array
		random_word = Math.floor(Math.random()*wordlist.word.length);

		//take a word with the position in var random_word
		word = wordlist.word[random_word];
		console.log(word);
		console.log(wordlist.word.length);

		//print the word in html
		word_singular.innerHTML = word.singular;
		word_plural.innerHTML = word.plural;
		word_information.innerHTML = word.information;
		word_translate.innerHTML = word.translate.pt;

		changeArray();
		// nextTurn();
	}
}

function changeArray() {
	console.log('Muda a palavra de array');
	// remove the word of the array
	wordlist.word.splice(random_word,1);
	usedWords.push(word);
	console.log(usedWords);
}

function firstTurn() {
	play.style.display = 'none';
	document.getElementById('words').style.display = 'block';
	document.getElementById('answer-buttons').style.display = 'block';
	turn();
}
function turn() {
	console.log('Função: Turno');
	generate_random_word();
}
function checkButtons() {}
function nextTurn() {
	console.log('Função: Proximo Turno');
	turn();
}
function endGame() {
	console.log('Função: Fim do jogo');
	console.log(wordlist.word.length);
	if (wordlist.word.length == 0) {
		console.log('VOCÊ GANHO PORRAAAA!');
	} else {
		console.log('PERDEU');
	}
}

// turn();
// checkButtons();
// nextTurn();
// endGame();


