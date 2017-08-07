<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Der Die Das</title>
</head>
<body>
	<header>
		<nav id="game">
			<ul class="options">
				<li>Help</li>
				<li>Config</li>
			</ul>
		</nav>
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
		<section id="temp">
			<table id="list-words">
				<thead>
					<tr>
						<th>Artigo</th>
						<th>Palavra</th>
						<th>Plural</th>
						<th>Informacao</th>
						<th>Traducao</th>
					</tr>
				</thead>
				<tbody>
					<tr class="word">
						<td class="article">der</td>
						<td class="word-singular">Beruf</td>
						<td class="plural">Die Berufe</td>
						<td class="information"></td>
						<td class="translate">A profissao</td>
					</tr>
					<tr class="word">
						<td class="article">die</td>
						<td class="word-singular">Zahl</td>
						<td class="plural">Die Zahlen</td>
						<td class="information"></td>
						<td class="translate">O valor</td>
					</tr>
					<tr class="word">
						<td class="article">das</td>
						<td class="word-singular">Haus</td>
						<td class="plural">Die Häuser</td>
						<td class="information"></td>
						<td class="translate">A casa</td>
					</tr>
				</tbody>
			</table>
		</section>
		<section id="words">
			<div class="status">Certo/ Errado</div>
			<div id="word-platz"></div>
			<div class="wp-info"></div>
			<div class="wp-plural"></div>
			<div class="wp-translate"></div>
		</section>
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