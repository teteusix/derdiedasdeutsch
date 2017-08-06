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
				<li>Acertos</li>
				<li>Erros</li>
				<li>10 Palavras de 20</li>
			</ul>
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
						<td class="article">Der </td>
						<td class="word-singular">Beruf</td>
						<td class="plural">Die Berufe</td>
						<td class="information">Informacao</td>
						<td class="translate">A profissao</td>
					</tr>
					<tr class="word">
						<td class="article">Die </td>
						<td class="word-singular">Zahl</td>
						<td class="plural">Die Zahlen</td>
						<td class="information">Informacao</td>
						<td class="translate">O valor</td>
					</tr>
					<tr class="word">
						<td class="article">Das </td>
						<td class="word-singular">Haus</td>
						<td class="plural">Die Haeuser</td>
						<td class="information">Informacao</td>
						<td class="translate">A casa</td>
					</tr>
				</tbody>
			</table>
		</section>
		<section id="words">
			<div class="status">Certo/ Errado</div>
			<div class="main">Beruf</div>
			<div class="info">informacao</div>
			<div class="plurall">Die Berufe</div>
			<div class="translatee">A profissão</div>
		</section>
		<nav id="buttons">
			<button id="der">Der</button>
			<button id="der">Die</button>
			<button id="das">Das</button>
		</nav>
	</main>

	<!-- <script src="app/app.js"></script> -->
	<script src="app/list-words.js"></script>
</body>
</html>