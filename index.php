<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Der Die Das</title>
	<link rel="stylesheet" href="">
</head>
<body>
	<header id="header">
		<div class="status">
			<ul>
				<!-- <li><span id="totalwords_1"></span> Palavras de <span id="totalwords_2"></span></li> -->
			</ul>

			<div class="result">
				<p>Score</p>
				<input type="text" id="score" name="score" value="0" disabled>
			</div>
		</div>
	</header>
	<main>
		<section id="words">
			<div class="wp-result">Certo/ Errado</div>
			<div id="word-platz"></div>
			<div class="wp-info"></div>
			<div class="wp-plural"></div>
			<div class="wp-translate"></div>
		</section>
		<?php include 'wordlist.php'; ?>
		<nav id="buttons">
			<button class="button" id="der" value="der">Der</button>
			<button class="button" id="die" value="die">Die</button>
			<button class="button" id="das" value="das">Das</button>
		</nav>
	</main>

	<!-- <script src="app/app.js"></script> -->
	<script src="app/list-words.js"></script>
</body>
</html>