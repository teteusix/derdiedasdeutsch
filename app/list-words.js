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


maismais = document.getElementById('maismais');
// maismais.innerHTML = maismais.innerHTML + array_WordsList[geraumnumero];
maismais.innerHTML = maismais.innerHTML + array_WordsList[geraumnumero].word_singular;
// console.log(geraumnumero);
console.log(array_WordsList[geraumnumero]);
console.log(array_WordsList[geraumnumero].word_singular);