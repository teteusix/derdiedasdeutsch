# Der Die Das Deutsch :de:

**Autor**: Matheus Ramos

**Versão**: 1.0

**Contribuições com traduções**: Marina Detsch e Tanja Ilijevski.


**[Jogue agora](https://teteusix.github.io/derdiedasdeutsch/)**


Um grande problema ao aprender alemão são os gêneros das palavras, por isso o aplicativo tem objetivo de que o usuário pratique o Der Die Das das palavras que foram aprendidas no curso.

A cada palavra você tem a opção de selecionar Der, Die ou Das como o artigo da palavra. Esses botões vem nas cores que são recomendadas para facilitar a lembrança de que a palavra é masculina, feminina ou neutra.

- **[Como usar](#como-usar)**
  - **[Inicio](#inicio)**
  - **[No jogo](#no-jogo)**
- **[O projeto](#o-projeto)**
- **[Desenvolvimento](#desenvolvimento)**
  - **[Selecionar dificuldade](#selecionar-dificuldade)**
  - **[Selecionar caso](#selecionar-caso)**
  - **[Cadastrar idiomas](#cadastrar-idiomas)**
  - **[Cadastrar palavras](#cadastrar-palavras)**
  - **[Traduções](#tradu%C3%A7%C3%B5es)**
  - **[Usuários](#usu%C3%A1rios)**
  - **[Palavras difíceis](#palavras-dif%C3%ADceis)**
- **[Próximas atualizações](#pr%C3%B3ximas-atualiza%C3%A7%C3%B5es)**

---

## Como usar

Para usar/jogar o Der Die Das Deutsch *[clique aqui](https://teteusix.github.io/derdiedasdeutsch/)*.

Objetivo do jogo é acertar o máximo de artigos das palavras.
Quando a palavra aparece, selecione uma das opções (der, die ou das) para dizer que esse é o artigo da palavra.

### Inicio

Selecione um idioma para a tradução das palavras (*Was ist deine Muttersprache?*);

Selecione um tema (*A1 Themen zu spielen)*;

### No jogo

- Sua pontuação (*0 von N Wörtern*);
- Palavra no singular sem o artigo;
- Plural da palavra;
- Informação caso a palavra tenha uma informação importante;
- Tradução no idioma selecionado;
- Botões de der, die e das.

---

## O projeto

A ideia inicial do projeto era fazer um jogo simples de selecionar o artigo da palavra, aumenta o score quando o usuário acerta e quando erra o usuário perde.

Porém, conforme o andamento do projeto, a ideia sofreu adaptações, se transformando em uma aplicação com seleção de dificuldade da partida, em qual caso quer jogar, colocar também para o usuário jogar com dativo e acusativo, criar uma conta, salvar a pontuação das partidas jogadas.

**Ideia inicial**

O usuário começa selecionando a língua materna ou uma outra para praticar e ver os significados das palavras.

Usuário joga com as palavras do tema/lição que for selecionado.

Durante o jogo aparece uma palavra aleatória do tema selecionado e ele tem 3 opções:

- **Der**, botão azul e indica que o artigo é masculino;
- **Die**, botão vermelho e indica que o artigo é feminino;
- **Das**, botão verde e indica que o artigo é neutro.

Após escolher uma opção o jogo valida se a resposta está correta ou falsa, se estiver correta aumenta 1 ponto na pontuação e se estiver errada o jogo termina.

**Próxima etapa**

Segue o mesmo conceito anterior, mas agora com a possibilidade de cadastrar palavras, traduções, idiomas e usuários.

---

## Desenvolvimento

Segue as opções para as novas etapas do projeto, as quais não serão desenvolvidas na ordem em que estão escritas. A ordem de desenvolvimento poderá ser acompanhada nas issues do projeto.

- Selecionar dificuldade;
- Selecionar caso (*Nominativo, Genitivo, Acusativo, Dativo*);
- Cadastrar idiomas;
- Cadastrar palavras;
- Cadastrar traduções;
- Cadastrar usuários;
- Jogar palavras com mais dificuldades/ que mais erra.

### Selecionar dificuldade

Dar a opção para o usuário selecionar a dificuldade fácil ou difícil.

**Fácil**: Mostra a palavra com a cor do artigo;
**Difícil**: Mostra a palavra com sem a cor do artigo;

### Selecionar caso (*Nominativo, Genitivo, Acusativo, Dativo*)

Após escolher o tema/lição, o usuário pode escolher em qual dos quatro caso ele deseja jogar.

### Cadastrar idiomas

Cadastro de um novo idioma para que os usuários possam usar a aplicação em sua lingua materna.

- Nome do idioma em alemão
- Seleciona a bandeira da lingua
- Cadastra os textos de informação

### Cadastrar palavras

Cadastro de uma nova palavra com seu nível, tema, palavra no singular, plural da palavra, caso, artigos nos quatros casos, informação.

**Nivel**
> Quadro Comum Europeu de Referimento para o Aprendizado das Línguas a1, a2, b1, b2, c1, c2

**Tema**
> Título do tema no livro ou que o professor passou na aula

- Palavra no singular
- Plural da palavra
- Caso (*Nominativo, Genitivo, Acusativo, Dativo*)
  - Atrigo
    - Definido
    - Indefinido
- Informação (se a palavra precisar)

### Traduções

Exibe as palavras e suas traduções já existentes mas também com a opção de adicionar uma nova tradução em uma nova língua.

### Usuários

Cadastro com informações básicas do usuário como:

- Nome;
- Sobrenome;
- E-mail;
- Senha;
- Idioma (Seleciona uma língua materna já existente, caso ela ainda não existe pega como padrão inglês.).

No perfil do usuário será exibido, além dos dados básicos cadastrados os seguintes dados:

- Nivel;
- Palavras mais difíceis, também mostrando o tema e o caso (N, G, D ou A);
- Maior pontuação;
- Média de pontuação por partida;
- Contribuições em traduções.

### Palavras difíceis

A opção de jogar com as palavras mais difíceis vai buscar quais as palavras que o usuário erra mais de uma vez.

---

## Próximas atualizações

Segue as próximas atualizações do projeto que também podem ser conferidas com mais detalhes nas issues.

- [ ] Versão Desktop;
- [X] Seleção de dificuldade;
- [ ] Cadastrar idiomas;
- [ ] Cadastrar palavras;
- [ ] Cadastrar traduções;
- [ ] Selecionar caso (Nominativo, Genitivo, Acusativo, Dativo);
- [ ] Cadastrar usuários;
- [ ] Jogar palavras com mais dificuldades/ que mais erra;
- [ ] Desenvolver como um Mobile App.