const fotos = ['biju.jpg', 'biju2.jpg', 'biju3.jpg', 'biju4.jpg'];
let indexFoto = 0;
const imagem = document.getElementById('imagemCarrossel');
setInterval(() => {
  indexFoto = (indexFoto + 1) % fotos.length;
  imagem.src = fotos[indexFoto];
}, 2000);

// Contador
const dataInicio = new Date('2024-03-12T00:00:00');
const tempoEl = document.getElementById('tempoAmor');

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);
  tempoEl.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}
setInterval(atualizarContador, 1000);
atualizarContador();
