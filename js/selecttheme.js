dataJ = '';

function fetchJSONFile(path, callback) {
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				var data = JSON.parse(httpRequest.responseText);
				if (callback) callback(data);
			}
		}
	};
	httpRequest.open('GET', path, false);
	httpRequest.send();
}

fetchJSONFile('js/newwordlist.json', function(data){
	dataJ = data;
	console.log(dataJ);
});
console.log(dataJ);


// var wordlistJSON = '{"wordlist":[{"a1":[{"lektion01":[{"article":"der","singular":"Name","plural":"Namen","information":"","translate":{"pt":"O Nome","en":"The name","es":""}},{"article":"das","singular":"Haus","plural":"Häuser","information":"","translate":{"pt":"A Casa","en":"The Haus","es":""}},{"article":"der","singular":"Familienname","plural":"Familiennamen","information":"","translate":{"pt":"O sobrenome","en":"The Family Name","es":""}},{"article":"der","singular":"Vorname","plural":"Vornamen","information":"","translate":{"pt":"O primeiro nome","en":"The first name","es":""}},{"article":"das","singular":"Land","plural":"Länder","information":"","translate":{"pt":"O país","en":"The country","es":""}},{"article":"die","singular":"Zahl","plural":"Zahlen","information":"","translate":{"pt":"O número","en":"The number","es":""}},{"article":"die","singular":"Nummer","plural":"Nummern","information":"","translate":{"pt":"O número","en":"The number","es":""}},{"article":"der","singular":"Beruf","plural":"Berufe","information":"","translate":{"pt":"A profissão","en":"The Profession","es":""}}]},{"lektion02":[{"article":"die","singular":"Heimat","plural":"","information":"","translate":{"pt":"A pátria","en":"The homeland","es":""}},{"article":"die","singular":"Nationalität","plural":"Nationalitäten","information":"","translate":{"pt":"A nacionalidade","en":"The nationality","es":""}},{"article":"die","singular":"Sprache","plural":"Sprachen","information":"","translate":{"pt":"O idioma","en":"The language","es":""}},{"article":"die","singular":"Muttersprache","plural":"Muttersprachen","information":"","translate":{"pt":"A língua materna","en":"The mother tongue","es":""}},{"article":"die","singular":"Arbeit","plural":"Arbeiten","information":"","translate":{"pt":"O trabalho","en":"The work","es":""}},{"article":"der","singular":"Stift","plural":"Stifte","information":"","translate":{"pt":"O lápis","en":"The pencil","es":""}},{"article":"der","singular":"Kugelschreiber","plural":"Kugelschreiber","information":"","translate":{"pt":"A caneta","en":"The pen","es":""}},{"article":"der","singular":"Kuli","plural":"Kulis","information":"","translate":{"pt":"A caneta","en":"The pen","es":""}},{"article":"der","singular":"Laptop","plural":"Laptops","information":"","translate":{"pt":"O laptop","en":"The laptop","es":""}},{"article":"das","singular":"Tablet","plural":"Tablets","information":"","translate":{"pt":"O tablet","en":"The tablet","es":""}},{"article":"der","singular":"Schlüssel","plural":"Schlüssel","information":"","translate":{"pt":"A chave","en":"The key","es":""}},{"article":"der","singular":"Tisch","plural":"Tische","information":"","translate":{"pt":"A mesa","en":"The table","es":""}},{"article":"der","singular":"Stuhl","plural":"Stühle","information":"","translate":{"pt":"A cadeira","en":"The chair","es":""}},{"article":"das","singular":"Buch","plural":"Bücher","information":"","translate":{"pt":"O livro","en":"The book","es":""}},{"article":"das","singular":"Heft","plural":"Hefte","information":"","translate":{"pt":"O caderno","en":"The haft","es":""}},{"article":"das","singular":"Handy","plural":"Handys","information":"","translate":{"pt":"O celular","en":"The cellphone","es":""}},{"article":"das","singular":"Fenster","plural":"Fenster","information":"","translate":{"pt":"A janela","en":"The window","es":""}},{"article":"die","singular":"Lampe","plural":"Lampen","information":"","translate":{"pt":"A lâmpada","en":"The lamp","es":""}},{"article":"die","singular":"Brille","plural":"Brillen","information":"","translate":{"pt":"Os óculos","en":"The glasses","es":""}},{"article":"die","singular":"Flasche","plural":"Flaschen","information":"","translate":{"pt":"A garrafa","en":"The bottle","es":""}},{"article":"die","singular":"Tür","plural":"Türen","information":"","translate":{"pt":"A porta","en":"The door","es":""}},{"article":"die","singular":"Uhr","plural":"Uhren","information":"","translate":{"pt":"O relógio","en":"The clock","es":""}},{"article":"die","singular":"Tafel","plural":"Tafeln","information":"","translate":{"pt":"O quadro","en":"The board","es":""}},{"article":"die","singular":"Tasche","plural":"Taschen","information":"","translate":{"pt":"A bolsa","en":"The bag","es":""}},{"article":"der","singular":"Euro","plural":"Euros","information":"","translate":{"pt":"O euro","en":"The euro","es":""}},{"article":"die","singular":"Vorwahl","plural":"Vorwahlen","information":"","translate":{"pt":"O DDD","en":"The area code","es":""}},{"article":"die","singular":"Telefonnummer","plural":"Telefonnummern","information":"","translate":{"pt":"O número de telefone","en":"The telephone number","es":""}},{"article":"die","singular":"Adresse","plural":"Adressen","information":"","translate":{"pt":"O endereço","en":"The address","es":""}},{"article":"die","singular":"Straẞe","plural":"Straẞen","information":"","translate":{"pt":"A rua","en":"The street","es":""}},{"article":"die","singular":"Postleitzahl","plural":"Postleitzahlen","information":"","translate":{"pt":"O CEP","en":"The zip code","es":""}},{"article":"die","singular":"Email-Adresse","plural":"E-mail-Adressen","information":"","translate":{"pt":"O endereço de E-mail","en":"The e-mail address","es":""}},{"article":"die","singular":"Kita","plural":"Kitas","information":"","translate":{"pt":"A creche","en":"The daycare center","es":""}},{"article":"der","singular":"Platz","plural":"Plätze","information":"","translate":{"pt":"O lugar","en":"The place","es":""}},{"article":"das","singular":"Anmeldeformular","plural":"Anmeldeformulare","information":"","translate":{"pt":"O formulário de registro","en":"The registration formular","es":""}}]},{"lektion03":[{"article":"die","singular":"Wohnung","plural":"Wohnungen","information":"","translate":{"pt":"O apartamento","en":"The apartment","es":""}},{"article":"das","singular":"Wohnzimmer","plural":"Wohnzimmer","information":"","translate":{"pt":"A sala de estar","en":"The living room","es":""}},{"article":"das","singular":"Schlafzimmer","plural":"Schlafzimmer","information":"","translate":{"pt":"O quarto de dormir","en":"The bedroom","es":""}},{"article":"die","singular":"Küche","plural":"Küchen","information":"","translate":{"pt":"A cozinha","en":"The kitchen","es":""}},{"article":"die","singular":"Möbel","plural":"","information":"","translate":{"pt":"A mobília","en":"The forniture","es":""}},{"article":"der","singular":"Schrank","plural":"Schränke","information":"","translate":{"pt":"O armário","en":"The cupboard","es":""}},{"article":"der","singular":"Sessel","plural":"Sessel","information":"","translate":{"pt":"A poltrona","en":"The armchair","es":""}},{"article":"das","singular":"Sofa","plural":"Sofas","information":"","translate":{"pt":"O sofá","en":"The couch","es":""}},{"article":"das","singular":"Regal","plural":"Regale","information":"","translate":{"pt":"A prateleira","en":"The shelf","es":""}},{"article":"der","singular":"Teppich","plural":"Teppiche","information":"","translate":{"pt":"O tapete","en":"The carpet","es":""}},{"article":"das","singular":"Bild","plural":"Bilder","information":"","translate":{"pt":"O quadro","en":"The frame","es":""}},{"article":"der","singular":"Vorhang","plural":"Vorhänge","information":"","translate":{"pt":"A cortina","en":"The curtain","es":""}},{"article":"das","singular":"Bett","plural":"Betten","information":"","translate":{"pt":"A cama","en":"The bed","es":""}},{"article":"der","singular":"Fernseher","plural":"Fernseher","information":"","translate":{"pt":"A televisão","en":"The TV","es":""}},{"article":"der","singular":"Herd","plural":"Herde","information":"","translate":{"pt":"O fogão","en":"The stove","es":""}},{"article":"die","singular":"Spüle","plural":"Spülen","information":"","translate":{"pt":"A pia","en":"The sink","es":""}},{"article":"der","singular":"Kühlschrank","plural":"Kühlschränke","information":"","translate":{"pt":"A geladeira","en":"The fridge","es":""}},{"article":"die","singular":"Blume","plural":"Blumen","information":"","translate":{"pt":"A flor","en":"The flower","es":""}},{"article":"die","singular":"Spülmaschine","plural":"Spülmaschinen","information":"","translate":{"pt":"A máquina de lavar louça","en":"The dishwasher","es":""}},{"article":"die","singular":"Mikrowelle","plural":"Mikrowellen","information":"","translate":{"pt":"O microondas","en":"The microwave","es":""}},{"article":"die","singular":"Waschmaschine","plural":"Waschmaschinen","information":"","translate":{"pt":"A máquina de lavar","en":"The Washing machine","es":""}},{"article":"die","singular":"Farbe","plural":"Farben","information":"","translate":{"pt":"A cor","en":"The color","es":""}},{"article":"das","singular":"Erdgeschoss","plural":"Erdgeschosse","information":"","translate":{"pt":"O térreo","en":"The ground floor","es":""}},{"article":"der","singular":"Stock","plural":"Stockwerke","information":"","translate":{"pt":"O andar","en":"The floor","es":""}},{"article":"das","singular":"Dachgeschoss","plural":"Dachgeschosse","information":"","translate":{"pt":"O sótão","en":"The loft","es":""}},{"article":"das","singular":"Geschäft","plural":"Geschäfte","information":"","translate":{"pt":"O negócio","en":"The biz","es":""}},{"article":"der","singular":"Quadratmeter","plural":"Quadratmeter","information":"","translate":{"pt":"O metro quadrado","en":"The square metre","es":""}},{"article":"der","singular":"Balkon","plural":"Balkone","information":"","translate":{"pt":"A sacada","en":"The balcony","es":""}},{"article":"der","singular":"Garten","plural":"Gärten","information":"","translate":{"pt":"O jardim","en":"The garden","es":""}},{"article":"die","singular":"Zentralheizung","plural":"Zentralheizungen","information":"","translate":{"pt":"O aquecimento central","en":"The central heating","es":""}},{"article":"die","singular":"Miete","plural":"Mieten","information":"","translate":{"pt":"O aluguel","en":"The rent","es":""}}]},{"lektion04":[]},{"lektion05":[]},{"lektion06":[]},{"lektion07":[]},{"lektion08":[]},{"lektion09":[]},{"lektion10":[]},{"lektion11":[]},{"lektion12":[]},{"lektion13":[]},{"lektion14":[]}]},{"a2":[]}]}';
// var wordlist = JSON.parse(wordlist);
var wordlist = dataJ;
var levels = wordlist.wordlist;
var a1 = levels[0].a1;
var a2 = levels[1].a2;

var lektion01 = a1[0].lektion01,
lektion02 = a1[1].lektion02,
lektion03 = a1[2].lektion03,
lektion04 = a1[3].lektion04,
lektion05 = a1[4].lektion05,
lektion06 = a1[5].lektion06,
lektion07 = a1[6].lektion07,
lektion08 = a1[7].lektion08,
lektion09 = a1[8].lektion09,
lektion10 = a1[9].lektion10,
lektion11 = a1[10].lektion11,
lektion12 = a1[11].lektion12,
lektion13 = a1[12].lektion13,
lektion14 = a1[13].lektion14;

var objLektionList = {lektion01,lektion02,lektion03,lektion04,lektion05,lektion06,lektion07,lektion08,lektion09,lektion10,lektion11,lektion12,lektion13,lektion14};
console.log(objLektionList);

var btn_lektion01 = document.getElementById('lektion01'),
btn_lektion02 = document.getElementById('lektion02'),
btn_lektion03 = document.getElementById('lektion03'),
btn_lektion04 = document.getElementById('lektion04'),
btn_lektion05 = document.getElementById('lektion05'),
btn_lektion06 = document.getElementById('lektion06'),
btn_lektion07 = document.getElementById('lektion07'),
btn_lektion08 = document.getElementById('lektion08'),
btn_lektion09 = document.getElementById('lektion09'),
btn_lektion10 = document.getElementById('lektion10'),
btn_lektion11 = document.getElementById('lektion11'),
btn_lektion12 = document.getElementById('lektion12'),
btn_lektion13 = document.getElementById('lektion13'),
btn_lektion14 = document.getElementById('lektion14');

btn_lektion01.innerHTML = 'Willkommen <strong>'+lektion01.length+' Wörtern';
btn_lektion02.innerHTML = 'Alte Heimat, neue Heimat <strong>'+lektion02.length+' Wörtern';
btn_lektion03.innerHTML = 'Häuser und Wohnungen <strong>'+lektion03.length+' Wörtern';
btn_lektion04.innerHTML = 'Familienleben <strong>'+lektion04.length+' Wörtern';
btn_lektion05.innerHTML = 'Der Tag und die Woche <strong>'+lektion05.length+' Wörtern';
btn_lektion06.innerHTML = 'Guten Appetit! <strong>'+lektion06.length+' Wörtern';
btn_lektion07.innerHTML = 'Arbeit und Beruf <strong>'+lektion07.length+' Wörtern';
btn_lektion08.innerHTML = 'Gute Besserung <strong>'+lektion08.length+' Wörtern';
btn_lektion09.innerHTML = 'Wege durch die Stadt <strong>'+lektion09.length+' Wörtern';
btn_lektion10.innerHTML = 'Mein Leben <strong>'+lektion10.length+' Wörtern';
btn_lektion11.innerHTML = 'Ämter und Behörden <strong>'+lektion11.length+' Wörtern';
btn_lektion12.innerHTML = 'Im Kaufhaus <strong>'+lektion12.length+' Wörtern';
btn_lektion13.innerHTML = 'Auf Reisen <strong>'+lektion13.length+' Wörtern';
btn_lektion14.innerHTML = 'Zusammen leben <strong>'+lektion14.length+' Wörtern';

var lektion =[];
var lektionAgain =[];


// BUTTONS TO SELECT LEVEL
var btns_lektions = document.getElementsByClassName('btn-lektion');

for (var i = 0; i < btns_lektions.length; i++) {
	btns_lektions[i].addEventListener('click', function() {
		var myString = this.value;
		lektion = objLektionList[myString];
		lektionAgain = JSON.parse(JSON.stringify(objLektionList[myString]));
		// lektionAgain = objLektionList[myString];
		firstTurn();
	});
}