var listaFilmesFixos = [
  "https://br.web.img2.acsta.net/medias/nmedia/18/90/43/36/20096333.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/Pulp_Fiction_cover.jpg/230px-Pulp_Fiction_cover.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/8/8b/Django_Unchained_Poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/6/6d/Kill_Bill_poster.jpg",
  "https://br.web.img3.acsta.net/pictures/19/08/06/21/50/5749668.jpg"
];

for (var i = 0; i < listaFilmesFixos.length; i++) {
  document.write("<img src=" + listaFilmesFixos[i] + ">");
}

//Imagens Add pelo user (botão Adicionar)
function AddImagem() {
  var urlDoUser = document.getElementById("urlHTML").value;
  var nomeDoUser = document.getElementById("nomeFilmeHTML").value;
  //validação se a URL é de alguma imagem realmente:
  if (
    urlDoUser.endsWith(".jpg") ||
    urlDoUser.endsWith(".png") ||
    urlDoUser.endsWith(".jpeg") ||
    urlDoUser.endsWith(".JPG")
  ) {
    ListarFilmesNaTela(urlDoUser);
    ListarNomesNaTela(nomeDoUser);
  } else {
    console.error("Endereço de imagem inválido!");
  }

  //Comando para limpar o campo Input para o Usuário:
  document.getElementById("urlHTML").value = "";
  document.getElementById("nomeFilmeHTML").value = "";
}

//Função com parâmetro, pode ter mesmo nome (pois são escopos diferentes)
function ListarFilmesNaTela(urlDoUserListar) {
  var listaFilmes = [];
  var mostrarImg = document.getElementById("mostrarImg");
  listaFilmes.push(urlDoUserListar);

  //Percorrendo a lista:
  for (var i = 0; i < listaFilmes.length; i++) {
    //mostrar no HTML(na Div criada - mostrarImg) a imagem[i], como um innerHtml + variável:
    mostrarImg.insertAdjacentHTML(
      "beforeend",
      "<img src=" + listaFilmes[i] + ">"
    );
    //document.write nao exibe na Div...
    //document.write("<img src=" + listaFilmes[i] + ">");
  }
}

function ListarNomesNaTela(nomeDoUser) {
  var listaNomeFilmes = [];
  var mostrarNomeNoHtml = document.getElementById("mostrarNomeFilmeHTML");
  listaNomeFilmes.push(nomeDoUser);

  for (var i = 0; i < listaNomeFilmes.length; i++) {
    //mostrar no HTML(na Div criada - mostrarImg) a imagem[i], como um innerHtml + variável:
    mostrarNomeNoHtml.innerHTML =
      mostrarNomeNoHtml.innerHTML + "<h2>" + listaNomeFilmes[i] + "</h2>";
  }
}