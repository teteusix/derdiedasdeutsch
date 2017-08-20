// BUTTONS TO SELECT DIFFICULTY
var objLektionDifficulty = {easy:'easy',hard:'hard'};
var btns_difficulty = document.getElementsByClassName('btn-difficulty');
var difficulty = "";
for (var i = 0; i < btns_difficulty.length; i++) {
	btns_difficulty[i].addEventListener('click', function() {
		var myStringDifficulty = this.value;
		difficulty = objLektionDifficulty[myStringDifficulty];
		document.getElementById('selectdifficulty').remove();
		document.getElementById('muttersprache').style.display = 'block';
	});
}

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
	turn_m = 0,
	arrUsedWords = [], // array to receive used words
	arrCorrectWords = [], // array to receive correct words
	arrWrongWords = []; // array to receive correct words

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
	var coracao = '';

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

		word_singular.innerHTML = word.singular;
		word_plural.innerHTML = word.plural;
		word_translate.innerHTML = word.translate[language];

		changeArray();
	}

	if (difficulty == 'easy') {
		word_singular.setAttribute("class", ""+word.article+"");
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

var lifescore_val = '';

function firstTurn() {
	wordlist_actual = lektion;
	total_word_list = lektion.length;


	if (total_word_list <= 25 ) {
		lifescore_val = 5;
	}else {
		lifescore_val = Math.floor((total_word_list*20)/100);
	}

	var draw_heart = '<i class="fa fa-heart" aria-hidden="true"></i>';
	var lifescore_platz = document.getElementById('lifescore');
	coracao = document.getElementsByClassName('fa-heart');
	for (var i = 0; i < lifescore_val; i++) {
		lifescore_platz.innerHTML = lifescore_platz.innerHTML+draw_heart;
	}

	used_word.innerHTML = turn_m;
	// used_word.innerHTML = +turn_m;
	total_word.innerHTML = total_word_list;
	document.getElementById('words').style.display = 'block';
	document.getElementById('answer-buttons').style.display = 'block';
	document.getElementById('selecttheme').style.display = 'none';
	turn();
}

function turn() {
	if (lifescore_val > 0) {
		turn_m += 1;
		used_word.innerHTML = turn_m;
		generate_random_word();
	}else {
		endGame();
	}
}


// CHECK BUTTONS AND ANSWERS
for (var i = 0; i < answer_buttons.length; i++) {
	if (i === 3) { break; }
	var resposta = answer_buttons[i];
	answer_buttons[i].addEventListener('click', function() {
		if (this.value == word.article) {
			arrCorrectWords.push(word);
			nextTurn();
		} else {
			arrWrongWords.push(word);
			lifescore_val -= 1;
			coracao[0].setAttribute("class", "fa fa-heart-o");
			nextTurn();
		}
	});
}

function nextTurn() {
	used_word.innerHTML = turn_m;
	turn();
}

function endGame() {
	var main = document.querySelectorAll('main')[0],
		correctWords = arrCorrectWords.length,
		icon = '',
		message = '',
		result_word = '';
		coracao_o = document.getElementsByClassName('fa-heart-o').length;
		document.getElementById('words').style.display = 'none';
		document.getElementById('answer-buttons').style.display = 'none';
		percentage = (correctWords/total_word_list)*100;

	if (correctWords == total_word_list) {
		icon = '<i class="fa fa-smile-o" aria-hidden="true"></i>';
		message = 'SUPER';
		message_result_word = '100%';
	} else if(coracao.length == 0) {
		icon = '<i class="fa fa-frown-o" aria-hidden="true"></i>';
		message = 'du verpasst!';
		message_result_word = '<p class="erro">Die richtige ist <strong class="'+word.article+'">'+result_word+'</strong></p>';
	} else {
		// correctWords = (arrUsedWords.length)-1;
		console.log(correctWords);
		icon = '<i class="fa fa-smile-o" aria-hidden="true"></i>';
		message = 'gut gemacht!';
		result_word = word.article+' '+word.singular;
		message_result_word = '';
	}

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