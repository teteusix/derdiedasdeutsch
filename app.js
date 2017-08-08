// take datas of the word
var word_article = document.getElementById('word-article'),
  word_singular = document.getElementById('word-singular'),
  word_plural = document.getElementById('word-plural'),
  word_information = document.getElementById('word-info'),
  word_translate = document.getElementById('word-translate'),
  answer_buttons = document.getElementsByClassName('answer-button');

generate_random_word();

function generate_random_word() {
  var random_word = words[Math.floor(Math.random()*words.length)], //generate a random word basead in the length of array
  li_wordInfo = document.getElementsByClassName('word-info')[0];

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
}

for (var i = 0; i < answer_buttons.length; i++) {
  // listener to check answer
  answer_buttons[i].addEventListener('click', function() {
    if (this.innerHTML == word_article.innerHTML) {
      console.log('Acerto mizeravi');
    } else {
      console.log('ERRRRRRRRRROU!! É um pais da Europa: '+word_article.innerHTML);
    }
    random_word();
  });
}