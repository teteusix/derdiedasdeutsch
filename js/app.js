// BUTTONS TO SELECT DIFFICULTY
var obj_LektionDifficulty = {easy:'easy',hard:'hard'};
var btns_difficulty = document.getElementsByClassName('btn-difficulty');
var difficulty = "";
for (var i = 0; i < btns_difficulty.length; i++) {
	btns_difficulty[i].addEventListener('click', function() {
		var string_Difficulty = this.value;
		difficulty = obj_LektionDifficulty[string_Difficulty];
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
		var string_Language = this.value;
		language = objLektionLanguageList[string_Language];
		document.getElementById('muttersprache').remove();
		document.getElementById('selecttheme').style.display = 'block';
	});
}

var score_val = 0, // SET INITIAL VALUE 0
	turn_actual = 0, // SET INITIAL VALUE 0
	arrUsedWords = [], // array to receive used words
	arrCorrectWords = [], // array to receive correct words
	arrWrongWords = [], // array to receive wrong words
	place_word_article = document.getElementById('word-article'), // take place for word article
	place_word_singular = document.getElementById('word-singular'), // take place for word singular
	place_word_information = document.getElementById('word-info'), // take place for word information
	place_word_plural = document.getElementById('word-plural'), // take place for word plural
	place_word_translate = document.getElementById('word-translate'), // take place for word translate
	place_used_word = document.getElementsByClassName('used-word')[0], // take place for total used word
	place_total_word = document.getElementsByClassName('total-word')[0], // take place for total word in lection
	lenght_word_list, // recieve the length of the words in lektion list
	wordlist_actual,
	draw_heart = '<i class="fa fa-heart" aria-hidden="true"></i>',
	lifescore_platz = document.getElementById('lifescore'),
	heart_lifeScore = '', // take all full heart
	answer_buttons = document.getElementsByClassName('answer-button'), // take Answer Buttons
	lifescore_val = ''; // recieve the value of how much life

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

		// console.log(word.article+' '+word.singular);

		// print the word in places
		place_word_singular.innerHTML = word.singular;
		place_word_plural.innerHTML = word.plural;
		place_word_translate.innerHTML = word.translate[language];

		changeArray();
	}

	if (difficulty == 'easy') {
		place_word_singular.setAttribute("class", ""+word.article+"");
	}

	// check if the word have information
	if (word.information == '') {
		var li_word_info = document.getElementsByClassName('word-info')[0];
		li_word_info.style.display = 'none';
	} else {
		place_word_information.innerHTML = word.information;
	}
}

// Insert and remove the word from one array to other
function changeArray() {
	wordlist_actual.splice(random_word,1); // remove the word of the main array
	arrUsedWords.push(word); // insert word in array for used words
}

// CALL THE FIRST TURN
function firstTurn() {
	wordlist_actual = lektion;
	lenght_word_list = lektion.length;

	// define how much life
	if (lenght_word_list <= 15 ) {
		lifescore_val = 3;
	} else if (lenght_word_list <= 25 && lenght_word_list >= 15) {
		lifescore_val = 5;
	} else {
		lifescore_val = Math.floor((lenght_word_list*20)/100);
	}

	heart_lifeScore = document.getElementsByClassName('fa-heart');

	// draw the hearts
	for (var i = 0; i < lifescore_val; i++) {
		lifescore_platz.innerHTML = lifescore_platz.innerHTML+draw_heart;
	}

	place_used_word.innerHTML = turn_actual; // print initial turn
	place_total_word.innerHTML = lenght_word_list; // print total lenght of wordl list

	document.getElementById('selecttheme').style.display = 'none';
	document.getElementById('words').style.display = 'block';
	document.getElementById('answer-buttons').style.display = 'block';

	turn(); // call turn
}

// FUNCTION FOR ALL TURNS
function turn() {

	// check if the user have life score
	if (lifescore_val > 0) {
		turn_actual += 1; // to make heigher
		place_used_word.innerHTML = turn_actual; // print the actual turn
		generate_random_word(); // call a new word
	}else {
		endGame();
	}
}


// CHECK BUTTONS AND ANSWERS
for (var i = 0; i < answer_buttons.length; i++) {
	if (i === 3) { break; }
	// var resposta = answer_buttons[i];
	answer_buttons[i].addEventListener('click', function() {
		if (this.value == word.article) {
			arrCorrectWords.push(word);
			nextTurn();
		} else {
			arrWrongWords.push(word);
			lifescore_val -= 1;
			heart_lifeScore[0].setAttribute("class", "fa fa-heart-o");
			nextTurn();
		}
	});
}

function nextTurn() {
	place_used_word.innerHTML = turn_actual;
	turn();
}


function endGame() {
	var main = document.querySelectorAll('main')[0], // take de main content
		icon = '',
		message = '',
		result_word = '';
		heart_lifeScore_empty = document.getElementsByClassName('fa-heart-o').length;
		percentage = (arrCorrectWords.length/lenght_word_list)*100;

	document.getElementById('words').style.display = 'none';
	document.getElementById('answer-buttons').style.display = 'none';

	if (arrCorrectWords.length == lenght_word_list) { // FOR ALL CORRECT
		icon = '<i class="fa fa-smile-o" aria-hidden="true"></i>';
		message = 'SUPER';
		message_result_word = '';
	} else if(heart_lifeScore.length == 0) { // FOR NO MORE LIFES
		icon = '<i class="fa fa-frown-o" aria-hidden="true"></i>';
		message = 'du verpasst!';
		message_result_word = '<p class="erro">Die richtige ist <strong class="'+word.article+'">'+result_word+'</strong></p>';
	} else { // FOR NOT ALL CORRECT BUT HAVE LIFES
		console.log(arrCorrectWords.length);
		icon = '<i class="fa fa-smile-o" aria-hidden="true"></i>';
		message = 'gut gemacht!';
		result_word = word.article+' '+word.singular;
		message_result_word = '';
	}

	// print message
	main.innerHTML = main.innerHTML+'<section id="result">'+
			'<h2><strong>'+icon+'</strong>'+message+'</h2>'+message_result_word+
			'<p class="score-result"><strong>'+arrCorrectWords.length+'</strong> von <strong>'+lenght_word_list+'</strong> Wörtern<span>'+Math.floor(percentage)+'%</span></p>'+
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
	place_used_word.innerHTML = score_val;
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