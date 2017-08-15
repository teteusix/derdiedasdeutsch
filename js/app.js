var wordlistJSON = '{ "word" : [' +
'{"article": "der","singular": "Familienname","plural": "Familiennamen","information": "","level": "A1","translate": {"pt": "O sobrenome","en": "The Family Name","es": ""}},'+
'{"article": "der","singular": "Vorname","plural": "Vornamen","information": "","level": "A1","translate": {"pt": "O primeiro nome","en": "The first name","es": ""}},'+
'{"article": "das","singular": "Land","plural": "Länder","information": "","level": "A1","translate": {"pt": "O país ","en": "The country","es": ""}},'+
'{"article": "die","singular": "Zahl","plural": "Zahlen","information": "","level": "A1","translate": {"pt": "O número ","en": "The number","es": ""}},'+
'{"article": "die","singular": "Nummer","plural": "Nummern","information": "","level": "A1","translate": {"pt": "O número ","en": "The number","es": ""}},'+
'{"article": "die","singular": "Heimat","plural": "kein","information": "","level": "A1","translate": {"pt": "A pátria ","en": "The homeland","es": ""}},'+
'{"article": "die","singular": "Nationalität","plural": "Nationalitäten","information": "","level": "A1","translate": {"pt": "A nacionalidade","en": "The nationality","es": ""}},'+
'{"article": "die","singular": "Sprache","plural": "Sprachen","information": "","level": "A1","translate": {"pt": "O idioma ","en": "The language","es": ""}},'+
'{"article": "die","singular": "Muttersprache","plural": "Muttersprachen","information": "","level": "A1","translate": {"pt": "A língua materna ","en": "The mother tongue","es": ""}},'+
'{"article": "die","singular": "Arbeit","plural": "Arbeiten","information": "","level": "A1","translate": {"pt": "O trabalho ","en": "The work","es": ""}},'+
'{"article": "der","singular": "Stift","plural": "Stifte","information": "","level": "A1","translate": {"pt": "O lápis","en": "The pencil","es": ""}},'+
'{"article": "der","singular": "Kugelschreiber","plural": "Kugelschreiber","information": "","level": "A1","translate": {"pt": "A caneta ","en": "The pen","es": ""}},'+
'{"article": "der","singular": "Kuli","plural": "Kulis","information": "","level": "A1","translate": {"pt": "A caneta ","en": "The pen","es": ""}},'+
'{"article": "der","singular": "Laptop","plural": "Laptops","information": "","level": "A1","translate": {"pt": "O laptop ","en": "The laptop","es": ""}},'+
'{"article": "das","singular": "Tablet","plural": "Tablets","information": "","level": "A1","translate": {"pt": "O tablet ","en": "The tablet","es": ""}},'+
'{"article": "der","singular": "Schlüssel","plural": "Schlüssel","information": "","level": "A1","translate": {"pt": "A chave","en": "The key","es": ""}},'+
'{"article": "der","singular": "Tisch","plural": "Tische","information": "","level": "A1","translate": {"pt": "A mesa ","en": "The table","es": ""}},'+
'{"article": "der","singular": "Stuhl","plural": "Stühle","information": "","level": "A1","translate": {"pt": "A cadeira","en": "The chair","es": ""}},'+
'{"article": "das","singular": "Buch","plural": "Bücher","information": "","level": "A1","translate": {"pt": "O livro","en": "The book","es": ""}},'+
'{"article": "das","singular": "Heft","plural": "Hefte","information": "","level": "A1","translate": {"pt": "O caderno","en": "The haft","es": ""}},'+
'{"article": "das","singular": "Handy","plural": "Handys","information": "","level": "A1","translate": {"pt": "O celular","en": "The cellphone","es": ""}},'+
'{"article": "das","singular": "Fenster","plural": "Fenster","information": "","level": "A1","translate": {"pt": "A janela ","en": "The window","es": ""}},'+
'{"article": "die","singular": "Lampe","plural": "Lampen","information": "","level": "A1","translate": {"pt": "A lâmpada","en": "The lamp","es": ""}},'+
'{"article": "die","singular": "Brille","plural": "Brillen","information": "","level": "A1","translate": {"pt": "Os óculos","en": "The glasses","es": ""}},'+
'{"article": "die","singular": "Flasche","plural": "Flaschen","information": "","level": "A1","translate": {"pt": "A garrafa","en": "The bottle","es": ""}},'+
'{"article": "die","singular": "Tür","plural": "Türen","information": "","level": "A1","translate": {"pt": "A porta","en": "The door","es": ""}},'+
'{"article": "die","singular": "Uhr","plural": "Uhren","information": "","level": "A1","translate": {"pt": "O relógio","en": "The clock","es": ""}},'+
'{"article": "die","singular": "Tafel","plural": "Tafeln","information": "","level": "A1","translate": {"pt": "O quadro ","en": "The board","es": ""}},'+
'{"article": "die","singular": "Tasche","plural": "Taschen","information": "","level": "A1","translate": {"pt": "A bolsa","en": "The bag","es": ""}},'+
'{"article": "der","singular": "Euro","plural": "Euros","information": "","level": "A1","translate": {"pt": "O euro ","en": "The euro","es": ""}},'+
'{"article": "die","singular": "Vorwahl","plural": "Vorwahlen","information": "","level": "A1","translate": {"pt": "O DDD","en": "The area code","es": ""}},'+
'{"article": "die","singular": "Telefonnummer","plural": "Telefonnummern","information": "","level": "A1","translate": {"pt": "O número de telefone ","en": "The telephone number","es": ""}},'+
'{"article": "die","singular": "Adresse","plural": "Adressen","information": "","level": "A1","translate": {"pt": "O endereço ","en": "The address","es": ""}},'+
'{"article": "die","singular": "Straẞe","plural": "Straẞen","information": "","level": "A1","translate": {"pt": "A rua","en": "The street","es": ""}},'+
'{"article": "die","singular": "Postleitzahl","plural": "Postleitzahlen","information": "","level": "A1","translate": {"pt": "O CEP","en": "The zip code","es": ""}},'+
'{"article": "die","singular": "Email-Adresse","plural": "E-mail-Adressen","information": "","level": "A1","translate": {"pt": "O endereço de E-mail","en": "The e-mail address","es": ""}},'+
'{"article": "die","singular": "Kita","plural": "Kitas","information": "","level": "A1","translate": {"pt": "A creche ","en": "The daycare center","es": ""}},'+
'{"article": "der","singular": "Platz","plural": "Plätze","information": "","level": "A1","translate": {"pt": "O lugar","en": "The place","es": ""}},'+
'{"article": "das","singular": "Anmeldeformular","plural": "Anmeldeformulare","information": "","level": "A1","translate": {"pt": "O formulário de registro ","en": "The registration formular","es": ""}},'+
'{"article": "die","singular": "Wohnung","plural": "Wohnungen","information": "","level": "A1","translate": {"pt": "O apartamento","en": "The apartment","es": ""}},'+
'{"article": "das","singular": "Wohnzimmer","plural": "Wohnzimmer","information": "","level": "A1","translate": {"pt": "A sala de estar","en": "The living room","es": ""}},'+
'{"article": "das","singular": "Schlafzimmer","plural": "Schlafzimmer","information": "","level": "A1","translate": {"pt": "O quarto de dormir ","en": "The bedroom","es": ""}},'+
'{"article": "die","singular": "Küche","plural": "Küchen","information": "","level": "A1","translate": {"pt": "A cozinha","en": "The kitchen","es": ""}},'+
'{"article": "die","singular": "Möbel","plural": "Möbel","information": "","level": "A1","translate": {"pt": "A mobília","en": "The forniture","es": ""}},'+
'{"article": "der","singular": "Schrank","plural": "Schränke","information": "","level": "A1","translate": {"pt": "O armário","en": "The cupboard","es": ""}},'+
'{"article": "der","singular": "Sessel","plural": "Sessel","information": "","level": "A1","translate": {"pt": "A poltrona ","en": "The armchair","es": ""}},'+
'{"article": "das","singular": "Sofa","plural": "Sofas","information": "","level": "A1","translate": {"pt": "O sofá ","en": "The couch","es": ""}},'+
'{"article": "das","singular": "Regal","plural": "Regale","information": "","level": "A1","translate": {"pt": "A prateleira ","en": "The shelf","es": ""}},'+
'{"article": "der","singular": "Teppich","plural": "Teppiche","information": "","level": "A1","translate": {"pt": "O tapete ","en": "The carpet","es": ""}},'+
'{"article": "das","singular": "Bild","plural": "Bilder","information": "","level": "A1","translate": {"pt": "O quadro ","en": "The frame","es": ""}},'+
'{"article": "der","singular": "Vorhang","plural": "Vorhänge","information": "","level": "A1","translate": {"pt": "A cortina","en": "The curtain","es": ""}},'+
'{"article": "das","singular": "Bett","plural": "Betten","information": "","level": "A1","translate": {"pt": "A cama ","en": "The bed","es": ""}},'+
'{"article": "der","singular": "Fernseher","plural": "Fernseher","information": "","level": "A1","translate": {"pt": "A televisão","en": "The TV","es": ""}},'+
'{"article": "der","singular": "Herd","plural": "Herde","information": "","level": "A1","translate": {"pt": "O fogão","en": "The stove","es": ""}},'+
'{"article": "die","singular": "Spüle","plural": "Spülen","information": "","level": "A1","translate": {"pt": "A pia","en": "The sink","es": ""}},'+
'{"article": "der","singular": "Kühlschrank","plural": "Kühlschränke","information": "","level": "A1","translate": {"pt": "A geladeira","en": "The fridge","es": ""}},'+
'{"article": "die","singular": "Blume","plural": "Blumen","information": "","level": "A1","translate": {"pt": "A flor ","en": "The flower","es": ""}},'+
'{"article": "die","singular": "Spülmaschine","plural": "Spülmaschinen","information": "","level": "A1","translate": {"pt": "A máquina de lavar louça ","en": "The dishwasher","es": ""}},'+
'{"article": "die","singular": "Mikrowelle","plural": "Mikrowellen","information": "","level": "A1","translate": {"pt": "O microondas ","en": "The microwave","es": ""}},'+
'{"article": "die","singular": "Waschmaschine","plural": "Waschmaschinen","information": "","level": "A1","translate": {"pt": "A máquina de lavar ","en": "The Washing machine","es": ""}},'+
'{"article": "die","singular": "Farbe","plural": "Farben","information": "","level": "A1","translate": {"pt": "A cor","en": "The color","es": ""}},'+
'{"article": "das","singular": "Erdgeschoss","plural": "Erdgeschosse","information": "","level": "A1","translate": {"pt": "O térreo ","en": "The ground floor","es": ""}},'+
'{"article": "der","singular": "Stock","plural": "Stockwerke","information": "","level": "A1","translate": {"pt": "O andar","en": "The floor","es": ""}},'+
'{"article": "das","singular": "Dachgeschoss","plural": "Dachgeschosse","information": "","level": "A1","translate": {"pt": "O sótão","en": "The loft","es": ""}},'+
'{"article": "das","singular": "Geschäft","plural": "Geschäfte","information": "","level": "A1","translate": {"pt": "O negócio","en": "The biz","es": ""}},'+
'{"article": "der","singular": "Quadratmeter","plural": "Quadratmeter","information": "","level": "A1","translate": {"pt": "O metro quadrado ","en": "The square metre","es": ""}},'+
'{"article": "der","singular": "Balkon","plural": "Balkone","information": "","level": "A1","translate": {"pt": "A sacada ","en": "The balcony","es": ""}},'+
'{"article": "der","singular": "Garten","plural": "Gärten","information": "","level": "A1","translate": {"pt": "O jardim ","en": "The garden","es": ""}},'+
'{"article": "die","singular": "Zentralheizung","plural": "Zentralheizungen","information": "","level": "A1","translate": {"pt": "O aquecimento central","en": "The central heating","es": ""}},'+
'{"article": "die","singular": "Miete","plural": "Mieten","information": "","level": "A1","translate": {"pt": "O aluguel","en": "The rent","es": ""}}]}';

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

