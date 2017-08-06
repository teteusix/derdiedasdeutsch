
var word_tr = document.getElementsByClassName('word');
var array_WordsList = []; //Empty array for recieve words

function firstTurn(){
	nextTurn();
}

function start() {



function walks_array(word_tr, behavior) {
	for(var actualposition = 0;actualposition <= word_tr.length - 1;actualposition++){
		var word_datas = word_tr[actualposition];
		var bluman = actualposition[0];
		behavior(word_datas);
	}
}



walks_array(word_tr, function (word_datas){
	var article = word_datas.getElementsByClassName('article')[0];
	var word_singular = word_datas.getElementsByClassName('word-singular')[0];
	var plural = word_datas.getElementsByClassName('plural')[0];
	var information = word_datas.getElementsByClassName('information')[0];
	var translate = word_datas.getElementsByClassName('translate')[0];

	var word = {
		article : article.textContent,
		word_singular : word_singular.textContent,
		plural : plural.textContent,
		information : information.textContent,
		translate : translate.textContent
	}

	//***********************************
	//Insert word in array
	var addWord = array_WordsList.push(word);
	//***********************************
	// nextTurn();
	return word;
});
}
start();

// Generate a random number between 0 and array length
var randomWord = Math.floor(Math.random()*array_WordsList.length);


//PRINT WORD
var wordPlatz = document.querySelector('#word-platz'),
	wp_information = document.getElementsByClassName('wp-info')[0],
	wp_plural = document.getElementsByClassName('wp-plural')[0],
	wp_translate = document.getElementsByClassName('wp-translate')[0];

// word in singular
wordPlatz.innerHTML = wordPlatz.innerHTML + array_WordsList[randomWord].word_singular;
// word in singular
wp_information.innerHTML = wp_information.innerHTML + array_WordsList[randomWord].information;
// word in singular
wp_plural.innerHTML = wp_plural.innerHTML + array_WordsList[randomWord].plural;
// word in singular
wp_translate.innerHTML = wp_translate.innerHTML + array_WordsList[randomWord].translate;

console.log(array_WordsList[randomWord]);
console.log(array_WordsList[randomWord].word_singular);



function nextTurn() {
	start();
	var btn_der = document.querySelector('#der');
	var btn_die = document.querySelector('#die');
	var btn_das = document.querySelector('#das');
	var article_Actualword = array_WordsList[randomWord].article;
	console.log(article_Actualword);
	console.log('começou');

	if (article_Actualword === 'der') {
		console.log('o certo é der');
		btn_der.setAttribute('onclick','nextTurn()');
		btn_die.setAttribute('onclick','endGame()');
		btn_das.setAttribute('onclick','endGame()');
	} else if (article_Actualword === 'die') {
		console.log('o certo é die');
		btn_der.setAttribute('onclick','endGame()');
		btn_die.setAttribute('onclick','nextTurn()');
		btn_das.setAttribute('onclick','endGame()');
	}else {
		console.log('o certo é das');
		btn_der.setAttribute('onclick','endGame()');
		btn_die.setAttribute('onclick','endGame()');
		btn_das.setAttribute('onclick','nextTurn()');
	}
	start();
}

nextTurn();
// var btns = document.querySelectorAll('button');
// // btns.addEventListener('click', check());
// btns.addEventListener('click', function(event) {
// 	console.log('foi clicado')
// });



// function check() {
// 	if (article_Actualword === btn_der.value) {
// 		console.log('Cliquei no certo');
// 	} else if (article_Actualword === 'die') {
// 		console.log('o certo é die');
// 	}else {
// 		console.log('o certo é das');
// 	}
// }



// function nextTurn() {
// 	console.log('Acertou mizeravel');
// }
function endGame() {
	console.log('Errooouu');
}

// btn_der.addEventListener("click", function(event) {
// 	console.log('Cliquei no botao '+btn_der.value);
// 	// console.log(array_WordsList[randomWord].article);
// 	// console.log(this.value);

// 	var article_Actualword = array_WordsList[randomWord].article;
// 	if (this.value == article_Actualword) {
// 		console.log('Ta certo');
// 	} else {
// 		console.log('Ta errado');
// 	}
// });