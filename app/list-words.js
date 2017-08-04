function walks_array(word_tr, behavior) {
	for(var actualposition = 0;actualposition <= word_tr.length - 1;actualposition++){
		var word_datas = word_tr[actualposition];
		// var word_all = word_tr;
		// console.log(word_all)
		behavior(word_datas)
	}
}

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

	console.log(word);
	maismais = document.getElementById('maismais');
	maismais.innerHTML = maismais.innerHTML + word.article;
	// var itensList = [];
	// cocou = itensList.push(word);
	// cocouu = itensList.indexOf(word);
	// console.log(cocou);
	// console.log(cocouu);
	// console.log(itensList);
	return word;
});

// var arr = [];
// var obj1 = {id: 1, nome: 'Wallace'}
// arr.push(obj1);
// arr.indexOf(obj1)

// console.log(arr);
// console.log(obj1);
// var coco = arr.push(obj1);

// console.log(arr.push(obj1););
// console.log(coco);
// console.log(arr.indexOf(obj1));