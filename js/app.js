var wordlistJSON = '{ "word" : [' +
'{ "article":"der" , "singular": "Beruf","plural": "Die Berufe","information": "","level": "A1","translate": {"pt": "A profissão","en": "A profissão"}},' +
'{ "article":"die" , "singular": "Zahl","plural": "Die Zahlen","information": "","level": "A1","translate": {"pt": "O valor","en": "O valor"}},' +
'{ "article": "die" , "singular": "Banane","plural": "Die Bananen","information": "","level": "A1","translate": {"pt": "A Banana","en": "A Banana"}},' +
'{ "article": "der" , "singular": "Wein","plural": "Die Weine","information": "","level": "A1","translate": {"pt": "O Vinho","en": "O Vinho"}},' +
'{ "article": "das" , "singular": "Glas","plural": "Die Gläser","information": "","level": "A1","translate": {"pt": "O Copo","en": "O Copo"}},' +
'{ "article":"das" , "singular": "Haus","plural": "Die Häuser","information": "","level": "A1","translate": {"pt": "A casa","en": "A casa"}} ]}';

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
		word_translate.innerHTML = word.translate.pt;

		changeArray();
		// nextTurn();
	}
	if (word.information == '') {
		var batata = document.getElementsByClassName('word-info')[0];
		batata.style.display = 'none';
	} else {
		word_information.innerHTML = word.information;
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
	console.log(arrUsedWords.length);
	used_word.innerHTML = arrUsedWords.length;
	turn();
}
function endGame() {
	var main = document.querySelectorAll('main')[0],
		correctWords = '';
	var icon = '';
	if (arrUsedWords.length == total_word_list) {
		correctWords = arrUsedWords.length;
		icon = '<i class="fa fa-smile-o" aria-hidden="true"></i>';
	} else {
		correctWords = (arrUsedWords.length)-1;
		icon = '<i class="fa fa-frown-o" aria-hidden="true"></i>';
	}
	percentage = (correctWords/total_word_list)*100;
	console.log(percentage);

	main.innerHTML = '<section id="result">'+
		'<h2>'+icon+'</h2>'+
		'<ul>'+
			'<li class="score-words">Du hast<br/><strong class="score-used-word">'+correctWords+'</strong> von <strong class="score-total-word">'+total_word_list+'</strong><br/>Worten richtig</li>'+
			'<li class="percentage"><strong>'+Math.floor(percentage)+'%</strong></li>'+
			'<li><a href="#"><i class="fa fa-repeat" aria-hidden="true"></i><span>spielen wieder</span></a></li>'+
		'</ul>'+
	'</section>';
}

