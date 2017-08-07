<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Der Die Das</title>
</head>
<body>
	<header>
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
			<div class="status">Certo/ Errado</div>
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
		<p><strong>Palavras que já foram</strong></p>
		<table id="removed-words">
			<thead>
				<tr>
					<th>Artigo</th>
					<th>Palavra</th>
					<th>Plural</th>
					<th>Informacao</th>
					<th>Traducao</th>
					<th>Nivel</th>
				</tr>
			</thead>
			<tbody>
				<tr class="rw_word">
					<td class="rw_article"></td>
					<td class="rw_word-singular"></td>
					<td class="rw_plural"></td>
					<td class="rw_information"></td>
					<td class="rw_translate"></td>
					<td class="rw_nivel"></td>
				</tr>
			</tbody>
		</table>
	</main>

	<!-- <script src="app/app.js"></script> -->
	<script src="app/list-words.js"></script>
</body>
</html>