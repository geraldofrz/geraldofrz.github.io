//Links Menu
const links = document.querySelectorAll(".header-menu a");

function ativouLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativouLink);

//Orçamentos&Produtos

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativouPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativouPergunta);
}

perguntas.forEach(eventoPerguntas);

//Galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventoGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventoGaleria);

//Animações

if (window.SimpleAnime) {
  new SimpleAnime();
}
