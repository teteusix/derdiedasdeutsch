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
	answer_buttons = document.getElementsByClassName('answer-button');
	// btn_play = document.getElementById('play');
	// btn_play = document.getElementById('play').setAttribute('onclick','firstTurn()');

var word;
var random_word;
// function test() {
// console.log(words.length);
// console.log(words);
// var random_word = Math.floor(Math.random()*words.length);
// console.log(random_word);
// var word = words[random_word];
// console.log(word);
// words.splice(random_word,1);
// console.log(words.length);
// console.log(words);
// }

function generate_random_word (word,random_word) {
	console.log('Gera palavra 1 aleatoria de '+words.length+' palavras');
	console.log(words);
	if (words.length > 0) {
		// var word = words[Math.floor(Math.random()*words.length)]; //generate a random word basead in the length of array
		li_wordInfo = document.getElementsByClassName('word-info')[0];
		random_word = Math.floor(Math.random()*words.length);
		console.log(random_word);
		word = words[random_word];
		//insert the word and data in html
		word_article.innerHTML = word.article;
		word_singular.innerHTML = word.singular;
		word_plural.innerHTML = word.plural;
		word_translate.innerHTML = word.translate;
		if (word.information == '') {
			li_wordInfo.style.display = 'none';
		} else {
			word_information.innerHTML = word.information;
		}
		console.log('======>  '+word.article+' '+word.singular+'  <======');
		words.splice(random_word,1);
		changeArray(word, random_word);
	} else {
		console.log('Cabo!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
	}
	console.log('======>  '+word.article+' '+word.singular+'  <======');
	return word;
}

// function changeArray(word, words, usedWords) {
function changeArray(word,random_word) {
	console.log('Muda a palavra de array');
	// console.log(word);
	// console.log(usedWords.length);
	// console.log(usedWords);
	// console.log(usedWords.length);
	// console.log(usedWords);

	console.log('removeu');
	// words.splice(random_word,1);
	// removediabo = words.splice(random_word,1);
	// words = removediabo;
	console.log(words);
	console.log(word);
	console.log('Enviou a palavra');
	// usedWords.push(words[random_word]);
	console.log(words[word]);
	console.log(words[random_word]);
	usedWords.push(words[random_word]);
}

function turn(word) {
	console.log('Função: Turno');
	generate_random_word();
	// changeArray(word);
}
function checkButtons() {
	console.log('Função: Confere botões');
}
function nextTurn(word) {
	console.log('Função: Proximo Turno');
	// console.log('Ainda não removeu');
	// console.log(words);
	// words.splice(word,1);
	// console.log('removeu');
	// console.log(words);

	// console.log(usedWords.length);
	// console.log(words.length);
	// console.log(word);
	turn();
}
function endGame() {
	console.log('Função: Fim do jogo');
}

turn();
// checkButtons();
// nextTurn();
// endGame();