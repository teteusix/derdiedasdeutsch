// take datas of the word
var word_article = document.getElementById('word-article'),
  word_singular = document.getElementById('word-singular'),
  word_plural = document.getElementById('word-plural'),
  word_information = document.getElementById('word-info'),
  word_translate = document.getElementById('word-translate'),
  btn_der = document.getElementById('der'),
  btn_die = document.getElementById('die'),
  btn_das = document.getElementById('das'),
  answer_buttons = document.getElementsByClassName('answer-button');

 document.getElementById('play').setAttribute('onclick','firstTurn()');

function firstTurn(){
  document.getElementById('words').style.display = 'block';
  document.getElementById('answer-buttons').style.display = 'block';
  // document.getElementById('play').style.display = 'none';
  generate_random_word();
}

function generate_random_word() {
  document.getElementById('play').style.display = 'none';

  if (words.length == 0) {
  } else if (words.length == 6) {
  } else {
  }

  var random_word = words[Math.floor(Math.random()*words.length)], //generate a random word basead in the length of array
  li_wordInfo = document.getElementsByClassName('word-info')[0];

  console.log('Total não usados: '+words.length);

  //inser the word and data in html
  word_article.innerHTML = random_word.article;
  word_singular.innerHTML = random_word.singular;
  word_plural.innerHTML = random_word.plural;
  word_translate.innerHTML = random_word.translate;
  if (random_word.information == '') {
    li_wordInfo.style.display = 'none';
  } else {
    word_information.innerHTML = random_word.information;
  }

  console.log('Total usados: '+usedWords.length);
  usedWords.push(random_word);
  console.log('Total usados: '+usedWords.length);
  // console.log(random_word.article);

  if (random_word.article === 'der') {
    btn_der.setAttribute('onclick','nextTurn()');
    btn_die.setAttribute('onclick','endGame()');
    btn_das.setAttribute('onclick','endGame()');
  } else if (random_word.article === 'die') {
    btn_der.setAttribute('onclick','endGame()');
    btn_die.setAttribute('onclick','nextTurn()');
    btn_das.setAttribute('onclick','endGame()');
  }else {
    btn_der.setAttribute('onclick','endGame()');
    btn_die.setAttribute('onclick','endGame()');
    btn_das.setAttribute('onclick','nextTurn()');
  }

  console.log('Total não usados: '+words.length);
  words.splice(random_word,1);
  console.log('Foi tirado: '+random_word.article+' '+random_word.singular);
  console.log('Total usados: '+usedWords.length);
  console.log('Total não usados: '+words.length);
}


function nextTurn(){
  generate_random_word();
  document.getElementById('result').innerHTML = 'Acertou';
  console.log('Você esta num turno novo');
}
function endGame(){
  document.getElementById('result').innerHTML = 'Errou';
  console.log('Você PERDEEEUUU');
}