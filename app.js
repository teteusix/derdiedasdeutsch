var wordlistJSON = '{ "word" : [' +
'{ "article":"der" , "singular": "Beruf","plural": "Die Berufe","information": "Info","level": "A1","translate": {"pt": "A profissão","en": "A profissão"}},' +
'{ "article":"die" , "singular": "Zahl","plural": "Die Zahlen","information": "info","level": "A1","translate": {"pt": "O valor","en": "O valor"}},' +
'{ "article": "die" , "singular": "Banane","plural": "Die Bananen","information": "info","level": "A1","translate": {"pt": "A casa","en": "A casa"}},' +
'{ "article": "der" , "singular": "Wein","plural": "Die Weine","information": "info","level": "A1","translate": {"pt": "A Banana","en": "A Banana"}},' +
'{ "article": "das" , "singular": "Glas","plural": "Die Gläser","information": "info","level": "A1","translate": {"pt": "O Vinho","en": "O Vinho"}},' +
'{ "article":"das" , "singular": "Haus","plural": "Die Häuser","information": "info","level": "A1","translate": {"pt": "O copo","en": "O copo"}} ]}';

var wordlist = JSON.parse(wordlistJSON);
// ****************************************************

// SET INITIAL VALUE
var score_val = 0,
	arrUsedWords = []; // array to receive used words

// take datas of the word
var word_article = document.getElementById('word-article'),
	word_singular = document.getElementById('word-singular'),
	word_information = document.getElementById('word-info'),
	word_plural = document.getElementById('word-plural'),
	word_translate = document.getElementById('word-translate'),
	used_word = document.getElementsByClassName('used-word')[0],
	total_word = document.getElementsByClassName('total-word')[0],
	total_word_list = wordlist.word.length;

used_word.innerHTML = score_val;
total_word.innerHTML = total_word_list;

// Buttons
var answer_buttons = document.getElementsByClassName('answer-button'),
	btn_play = document.getElementById('play');

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
	// remove the word of the main array
	wordlist.word.splice(random_word,1);
	// insert word in array for used words
	arrUsedWords.push(word);
}

function firstTurn() {
	//View (style)
	play.style.display = 'none';
	document.getElementById('words').style.display = 'block';
	document.getElementById('answer-buttons').style.display = 'block';

	turn();
}

function turn() {
	generate_random_word();
}

// CHECK BUTTONS AND ANSWERS
for (var i = 0; i < answer_buttons.length; i++) {
	if (i === 3) { break; }
	var resposta = answer_buttons[i];
	answer_buttons[i].addEventListener('click', function() {
		if (this.value == word.article) {
			nextTurn();
		} else {
			endGame();
		}
	});
}

function nextTurn() {
	used_word.innerHTML = arrUsedWords.length;
	turn();
}
function endGame() {
	main = document.querySelectorAll('main')[0];
	correctWords = (arrUsedWords.length)-1;
	var icon = '';
	if (wordlist.word.length == 0) {
		icon = '<i class="fa fa-smile-o" aria-hidden="true"></i>';
	} else {
		icon = '<i class="fa fa-frown-o" aria-hidden="true"></i>';
	}

	main.innerHTML = '<section id="result">'+
		'<h2>Result</h2>'+
		'<ul>'+
			'<li class="icon">'+icon+'</li>'+
			'<li class="score-words"><strong class="score-used-word">'+correctWords+'</strong> von <strong class="score-total-word">'+total_word_list+'</strong></li>'+
			'<li class="percentage"><i class="fa fa-thumbs-up" aria-hidden="true"></i><strong class="score-percent-word"></strong></li>'+
		'</ul>'+
	'</section>';
}

