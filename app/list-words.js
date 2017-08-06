function walks_array(word_tr, behavior) {
	for(var actualposition = 0;actualposition <= word_tr.length - 1;actualposition++){
		var word_datas = word_tr[actualposition];
		var bluman = actualposition[0];
		behavior(word_datas);
	}
}

var array_WordsList = []; //Empty array for recieve words
var word_tr = document.getElementsByClassName('word');



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

	return word;
});

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