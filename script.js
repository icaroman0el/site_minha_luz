// Fotos
const photos = [
  "IMG_20250928_140236_834.webp",
  "IMG_20250928_224449_576.webp",
  "images/foto3.webp"
];
let currentPhoto = 0;
const photoDisplay = document.getElementById("photoDisplay");

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

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
}

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + "%";
  let current = Math.floor(audio.currentTime),
    total = Math.floor(audio.duration);
  currentTimeEl.textContent = `${Math.floor(current / 60)}:${(current % 60).toString().padStart(2, "0")}`;
  totalTimeEl.textContent = `${Math.floor(total / 60)}:${(total % 60).toString().padStart(2, "0")}`;
});

// Contador de amor
const startDate = new Date("2023-06-01T00:00:00");
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

// Corações
const heartSymbols=["❤️","💖","💜","💕","🧡","💘"];
function createHeart(){
  const heart=document.createElement("div");
  heart.classList.add("heart");
  heart.textContent=heartSymbols[Math.floor(Math.random()*heartSymbols.length)];
  heart.style.left=Math.random()*window.innerWidth + "px";
  heart.style.animationDuration=(4+Math.random()*4)+"s";
  heart.style.fontSize=(14+Math.random()*18)+"px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),9000);
}
setInterval(createHeart,800);

// Scroll fade
const scrollElements=document.querySelectorAll('.scroll-fade');
function handleScroll(){
  const triggerBottom = window.innerHeight*0.9;
  scrollElements.forEach(el=>{
    if(el.getBoundingClientRect().top<triggerBottom) el.classList.add('visible');
  });
}
window.addEventListener('scroll',handleScroll);
handleScroll();

