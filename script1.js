// Fotos
const photos = [
  "IMG_20250928_140236_834.webp",
  "IMG_20250928_224449_576.webp",
  "Screenshot_20250929_085013_Photos.jpg",
  "Screenshot_20250929_085649_Photos.jpg",
  "Screenshot_20250929_084513_Photos.jpg",
  "baixados.jpeg"
];
let currentPhoto = 0;
const photoDisplay = document.getElementById("photoDisplay");

// Inicializa a primeira foto
photoDisplay.src = photos[currentPhoto];

function changePhoto(newIndex) {
  photoDisplay.classList.add("opacity-0");
  setTimeout(() => {
    photoDisplay.src = photos[newIndex];
    photoDisplay.classList.remove("opacity-0");
    currentPhoto = newIndex;
  }, 500);
}

function nextPhoto() {
  changePhoto((currentPhoto + 1) % photos.length);
}
function prevPhoto() {
  changePhoto((currentPhoto - 1 + photos.length) % photos.length);
}

// Player de Música
const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");
const dedicationBtn = document.getElementById("dedicationBtn");

// Toca música, cria explosão de corações e onda ao clicar no botão
dedicationBtn.addEventListener("click", () => {
  audio.play();
  playBtn.textContent = "⏸";
  createFullScreenHeartExplosion();
  createWaveEffect();
});

// Função para explosão de corações
function createFullScreenHeartExplosion() {
  const heartSymbols = ["❤️","💖","💜","💕","🧡","💘"];
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.fontSize = (16 + Math.random() * 24) + "px";
    heart.style.zIndex = 1000;
    heart.style.pointerEvents = "none";
    heart.style.opacity = 1;

    document.body.appendChild(heart);

    // Movimento aleatório
    const xMove = (Math.random() - 0.5) * 200;
    const yMove = - (100 + Math.random() * 200);
    const rotation = Math.random() * 360;

    heart.animate([
      { transform: `translate(0,0) rotate(0deg)`, opacity: 1 },
      { transform: `translate(${xMove}px, ${yMove}px) rotate(${rotation}deg)`, opacity: 0 }
    ], {
      duration: 1500 + Math.random() * 500,
      easing: "ease-out",
      fill: "forwards"
    });

    setTimeout(() => heart.remove(), 2000);
  }
}

// Função para efeito de onda
function createWaveEffect() {
  const wave = document.createElement("div");
  wave.classList.add("wave-effect");
  document.body.appendChild(wave);

  const size = Math.max(window.innerWidth, window.innerHeight) * 2;
  wave.style.width = size + "px";
  wave.style.height = size + "px";
  wave.style.left = (window.innerWidth / 2 - size / 2) + "px";
  wave.style.top = (window.innerHeight / 2 - size / 2) + "px";

  wave.animate([
    { transform: "scale(0)", opacity: 0.5 },
    { transform: "scale(1)", opacity: 0 }
  ], {
    duration: 800,
    easing: "ease-out",
    fill: "forwards"
  });

  setTimeout(() => wave.remove(), 800);
}

// Play/Pause funcional
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});

// Atualiza barra de progresso e tempo
audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100 || 0;
  progressBar.style.width = progress + "%";

  const minutesCurrent = Math.floor(audio.currentTime / 60);
  const secondsCurrent = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");

  const minutesTotal = Math.floor(audio.duration / 60) || 0;
  const secondsTotal = Math.floor(audio.duration % 60).toString().padStart(2, "0");

  currentTimeEl.textContent = `${minutesCurrent}:${secondsCurrent}`;
  totalTimeEl.textContent = `${minutesTotal}:${secondsTotal}`;
});

// Torna a barra clicável
const progressContainer = progressBar.parentElement;
progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

// Contador de amor
const startDate = new Date("2025-07-24T00:00:00");
const counterElement = document.getElementById("loveCounter");
function updateCounter(){
  const now = new Date(), diff = now - startDate;
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  counterElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCounter, 1000);
updateCounter();


