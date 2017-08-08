<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Der Die Das</title>
	<link rel="stylesheet" href="style.css">
	<!-- <link rel="stylesheet" href="reset.css"> -->
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Raleway:300,400,500,600,700|Work+Sans:300,400,700" rel="stylesheet">
</head>
<body>
	<header class="game-screen">
		<h1><span>Der</span><span>Die</span><span>Das</span></h1>
	</header>
	<button id="play"><i class="fa fa-play" aria-hidden="true"></i></button>
	<main>
		<section id="words">
			<strong id="word-article"></strong>
			<h2 id="word-singular"></h2>
			<h2 id="result"></h2>
			<ul class="word-datas">
				<li class="word-info"><span><i class="fa fa-info-circle" aria-hidden="true"></i></span><span id="word-info">Um morador de Wein</span></li>
				<li class="word-plural"><span>Pl.</span><span id="word-plural"></span></li>
				<li class="word-translate"><span><i class="fa fa-language" aria-hidden="true"></i></span><span id="word-translate"></span></li>
			</ul>
		</section>
	</main>
	<footer class="game-screen"><nav id="answer-buttons"><button class="answer-button" id="der" value="der">Der</button><button class="answer-button" id="die" value="die">Die</button><button class="answer-button" id="das" value="das">Das</button></nav></footer>

	<script src="wordlist.js"></script>
	<script src="app.js"></script>
</body>
</html>