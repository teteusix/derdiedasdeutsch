<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Der Die Das</title>
	<link rel="stylesheet" href="assets/css/style.css">
	<link rel="stylesheet" href="assets/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Raleway:300,400,500,600,700|Work+Sans:300,400,700" rel="stylesheet">
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
			<div class="wp-result"></div>
			<div id="word-platz"></div>
			<ul>
				<li><span><!-- <i class="fa fa-info-circle" aria-hidden="true"></i> --></span><div class="wp-info"></div></li>
				<li><span>Pl.</span><div class="wp-plural"></div></li>
				<li><span><i class="fa fa-language" aria-hidden="true"></i></span><div class="wp-translate"></div></li>
			</ul>
		</section>
		<?php include 'wordlist.php'; ?>
		<nav id="buttons"><button class="button" id="der" value="der">Der</button><button class="button" id="die" value="die">Die</button><button class="button" id="das" value="das">Das</button></nav>
	</main>

	<!-- <script src="app/app.js"></script> -->
	<script src="app/list-words.js"></script>
</body>
</html>