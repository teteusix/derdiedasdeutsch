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
	total_word = document.getElementsByClassName('total-word')[0];
	// total_word_list = wordlist.a1.lektion01.length;
	var total_word_list;
	var wordlist_actual;


// Answer Buttons
var answer_buttons = document.getElementsByClassName('answer-button');

// GERATE A RANDOM WORD BASEAD IN LEKTION/THEME SELECTED
function generate_random_word () {
	// check first if have word for use
	if (wordlist_actual.length == 0) {
		endGame();
	} else {
		//generate a random number basead in length of the array
		random_word = Math.floor(Math.random()*lektion.length);

		//take a word with the position in var random_word
		word = wordlist_actual[random_word];

		console.log(word.article+' '+word.singular);

		//print the word in html
		word_singular.innerHTML = word.singular;
		word_plural.innerHTML = word.plural;
		word_translate.innerHTML = word.translate.pt;

		changeArray();
		// nextTurn();
	}
	if (word.information == '') {
		var li_word_info = document.getElementsByClassName('word-info')[0];
		li_word_info.style.display = 'none';
	} else {
		word_information.innerHTML = word.information;
	}
}

function changeArray() {
	// remove the word of the main array
	wordlist_actual.splice(random_word,1);
	// insert word in array for used words
	arrUsedWords.push(word);
}

function firstTurn() {
	wordlist_actual = lektion;
	total_word_list = lektion.length;
	used_word.innerHTML = score_val;
	total_word.innerHTML = total_word_list;
  document.getElementById('words').style.display = 'block';
	document.getElementById('answer-buttons').style.display = 'block';
	document.getElementById('selecttheme').style.display = 'none';

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