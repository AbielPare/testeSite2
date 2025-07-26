
const imagens = ['biju.jpg', 'biju2.jpg', 'biju3.jpg', 'biju4.jpg'];
let indice = 0;

document.getElementById('anterior').onclick = () => {
  indice = (indice - 1 + imagens.length) % imagens.length;
  document.getElementById('imagem-carrossel').src = imagens[indice];
};

document.getElementById('proximo').onclick = () => {
  indice = (indice + 1) % imagens.length;
  document.getElementById('imagem-carrossel').src = imagens[indice];
};

function atualizarTempo() {
  const inicio = new Date("2024-03-12T00:00:00");
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  document.getElementById('tempo').textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}
setInterval(atualizarTempo, 1000);
atualizarTempo();

let dataAtual = new Date();
const mesAno = document.getElementById('mesAno');
const calendario = document.getElementById('calendario');

function renderizarCalendario() {
  calendario.innerHTML = "";
  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();
  const primeiroDia = new Date(ano, mes, 1).getDay();
  const ultimoDia = new Date(ano, mes + 1, 0).getDate();

  mesAno.textContent = `${dataAtual.toLocaleString('default', { month: 'long' })} ${ano}`;

  for (let i = 0; i < primeiroDia; i++) {
    calendario.innerHTML += "<div></div>";
  }

  for (let dia = 1; dia <= ultimoDia; dia++) {
    const marcado = dia === 12 ? "marcado" : "";
    calendario.innerHTML += `<div class="${marcado}">${dia}</div>`;
  }
}

function mudarMes(direcao) {
  dataAtual.setMonth(dataAtual.getMonth() + direcao);
  renderizarCalendario();
}

renderizarCalendario();
