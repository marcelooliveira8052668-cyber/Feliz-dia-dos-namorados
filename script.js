const abrir = document.getElementById("abrir");
const entrada = document.getElementById("entrada");
const conteudo = document.getElementById("conteudo");

abrir.addEventListener("click", () => {

entrada.style.display = "none";

conteudo.style.display = "flex";

});

function criarCoracao(){

const coracao = document.createElement("div");

coracao.classList.add("coracao");

coracao.innerHTML = "❤️";

coracao.style.left = Math.random() * 100 + "vw";

coracao.style.fontSize =
(Math.random() * 30 + 20) + "px";

document.body.appendChild(coracao);

setTimeout(() => {
coracao.remove();
}, 6000);

}

setInterval(criarCoracao, 300);