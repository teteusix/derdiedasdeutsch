// BUTTONS TO SELECT LANGUAGE
var objLektionLanguageList = {pt:'pt',en:'en',rs:'rs',es:'es'};
var btns_language = document.getElementsByClassName('btn-language');
var language = "";
for (var i = 0; i < btns_language.length; i++) {
	btns_language[i].addEventListener('click', function() {
		var myStringLanguage = this.value;
		language = objLektionLanguageList[myStringLanguage];
		document.getElementById('muttersprache').remove();
		document.getElementById('selecttheme').style.display = 'block';
	});
}

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
		// word_translate.innerHTML = word.translate.pt;
		word_translate.innerHTML = word.translate[language];

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
	used_word.innerHTML = 0;
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
		correctWords = '',
		icon = '',
		message = '',
		result_word = '';
	document.getElementById('words').style.display = 'none';
	document.getElementById('answer-buttons').style.display = 'none';
	if (arrUsedWords.length == total_word_list) {
		correctWords = arrUsedWords.length;
		icon = '<i class="fa fa-smile-o" aria-hidden="true"></i>';
		message = 'gut gemacht!';
		message_result_word = '';
	} else {
		correctWords = (arrUsedWords.length)-1;
		icon = '<i class="fa fa-frown-o" aria-hidden="true"></i>';
		message = 'du verpasst!';
		result_word = word.article+' '+word.singular;
		message_result_word = '<p class="erro">Die richtige ist <strong class="'+word.article+'">'+result_word+'</strong></p>';
	}
	percentage = (correctWords/total_word_list)*100;
	console.log(percentage);

	main.innerHTML = main.innerHTML+'<section id="result">'+
        '<h2><strong>'+icon+'</strong>'+message+'</h2>'+message_result_word+
        '<p class="score-result"><strong>'+correctWords+'</strong> von <strong>'+total_word_list+'</strong> Wörtern<span>'+Math.floor(percentage)+'%</span></p>'+
        '<nav class="nav-result">'+
          '<ul>'+
            '<li><a href="index.html" class="result-btn"><i class="fa fa-home" aria-hidden="true"></i><span>Zurück zu starten</span></a></li>'+
            // '<li><button class="result-btn" onclick="playAgain();"><i class="fa fa-undo" aria-hidden="true"></i><span>spiele wieder</span></button></li>'+
          '</ul>'+
        '</nav>'+
    '</section>';
}

function playAgain() {
	document.getElementById('result').remove();
	document.getElementById('words').style.display = 'block';
	document.getElementById('answer-buttons').style.display = 'block';
	score_val = 0;
	used_word.innerHTML = score_val;
	document.getElementsByClassName('used-word')[0].innerHTML = 0;
	document.getElementById('word-singular').innerHTML = '';
	document.getElementById('word-info').innerHTML = '';
	document.getElementById('word-plural').innerHTML = '';
	document.getElementById('word-translate').innerHTML = '';
	lektion = [];
	lektion = lektionAgain;
	lektionAgain = JSON.parse(JSON.stringify(lektionAgain));
	firstTurn();
}