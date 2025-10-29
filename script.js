// Efeito suave de entrada dos links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".lista-meses a");
  links.forEach((link, i) => {
    link.style.opacity = "0";
    link.style.transform = "translateY(20px)";
    setTimeout(() => {
      link.style.transition = "all 0.6s ease";
      link.style.opacity = "1";
      link.style.transform = "translateY(0)";
    }, i * 120);
  });

  // Corações flutuantes
  const heartsContainer = document.querySelector(".hearts-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(createHeart, 400);
});
