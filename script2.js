document.addEventListener("DOMContentLoaded", () => {
  // Efeito de fade-in
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1s ease";
  setTimeout(() => (document.body.style.opacity = "1"), 100);

  // Clonar carrosséis para loop infinito
  const carrossels = document.querySelectorAll(".carrossel");
  carrossels.forEach(c => c.innerHTML += c.innerHTML);

  // Botão "Não" que foge 😝
const botaoNao = document.getElementById("nao");
const botoesDiv = document.querySelector(".botoes");

function moverBotao() {
  const larguraTela = window.innerWidth;
  const alturaTela = window.innerHeight;
  const larguraBotao = botaoNao.offsetWidth;
  const alturaBotao = botaoNao.offsetHeight;

  // Limites de movimento
  const maxX = larguraTela - larguraBotao;
  const maxY = alturaTela - alturaBotao;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // Garante que o botão fique sobre tudo e clicável
  botaoNao.style.position = "fixed";
  botaoNao.style.left = `${x}px`;
  botaoNao.style.top = `${y}px`;
  botaoNao.style.zIndex = "9999"; // 👈 sempre no topo
}

botaoNao.addEventListener("mouseover", moverBotao);
botaoNao.addEventListener("click", moverBotao);

// Botão "Sim"
const botaoSim = document.getElementById("sim");
botaoSim.addEventListener("click", () => {
  alert("💖 Eu sabia que você ia dizer SIM! 💖");
});
});



// ===== PLAYER DE MÚSICA =====
const musica = document.getElementById("musica");
const playBtn = document.getElementById("play");
const progresso = document.getElementById("progresso");
const tempoAtual = document.getElementById("tempo-atual");
const duracaoTotal = document.getElementById("duracao-total");

playBtn.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
    playBtn.textContent = "⏸️";
  } else {
    musica.pause();
    playBtn.textContent = "▶️";
  }
});

musica.addEventListener("timeupdate", () => {
  const progressoAtual = (musica.currentTime / musica.duration) * 100;
  progresso.value = progressoAtual || 0;

  tempoAtual.textContent = formatarTempo(musica.currentTime);
  duracaoTotal.textContent = formatarTempo(musica.duration);
});

progresso.addEventListener("input", () => {
  musica.currentTime = (progresso.value / 100) * musica.duration;
});

function formatarTempo(segundos) {
  if (isNaN(segundos)) return "0:00";
  const min = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60);
  return `${min}:${seg.toString().padStart(2, "0")}`;
}

// ===== CORAÇÕES NO BACKGROUND =====
const musicaSecao = document.querySelector(".musica");

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.textContent = "💖";
  coracao.style.left = `${Math.random() * 100}%`;
  coracao.style.fontSize = `${16 + Math.random() * 12}px`;
  coracao.style.animationDuration = `${5 + Math.random() * 3}s`;
  musicaSecao.appendChild(coracao);
  setTimeout(() => coracao.remove(), 7000);
}

const scrollElements = document.querySelectorAll('.scroll-fade');
function handleScroll(){
  const triggerBottom = window.innerHeight * 0.9;
  scrollElements.forEach(el => {
    if(el.getBoundingClientRect().top < triggerBottom) el.classList.add('visible');
  });
}
window.addEventListener('scroll', handleScroll);
handleScroll();


setInterval(criarCoracao, 600);
