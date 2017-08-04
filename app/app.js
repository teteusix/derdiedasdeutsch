function walks_array(word_tr, behavior) {
	for(var actualposition = 0;actualposition <= word_tr.length - 1;actualposition++){
		var word_datas = word_tr[actualposition];
		// var word_all = word_tr;
		// console.log(word_all)
		behavior(word_datas)
	}
}

var word_tr = document.getElementsByClassName('word');

// verifica();

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
		// console.log(word_tr[0]);
		// console.log(word.article);
		var valueSum1 = Math.floor(Math.random()*3);
		var trueResult = valueSum1;
		var r_randomBtV = Math.floor(2*Math.random());
		// console.log(r_randomBtV);
		// console.log(valueSum1);
		console.log(trueResult);
		// viewResult = r_value[r_randomBtV];

		var wodd = [word_datas];
		console.log(wodd);
	// function catWord(){

	// 		if (word.article != '') {
	// 			// console.log(word_all);
	// 			// console.log(word.article);
	// 			// var complete_word = word.article+' '+word.word_singular;
	// 			// console.log(complete_word);
	// 			// var coiso = complete_word;
	// 			// return coiso;
	// 			var complete_word = word.article+' '+word.word_singular;
	// 			return complete_word;
	// 			// return (word_all);
	// 		} else {
	// 			console.log('Falta o artigo');
	// 		}
	// 		// console.log(word.article);
	// 	}

	// console.log(word);
	// var coco = [word];
	// console.log(coco);
	// console.log(coco[1]);

	// console.log(word.word_singular);
	// var coco = word;
	// console.log(coco);
	// var val1 = word[Object.keys(word)[1]]; // criar um array com as keys do obj, e depois vamos só buscar a primera, com index 0
	// var val1 = word[[1].find(callback([, catWord]))]; // criar um array com as keys do obj, e depois vamos só buscar a primera, com index 0
	// console.log(val1); // 10
	// console.log(Object.keys(word)[2]);
	// console.log(word);
});



