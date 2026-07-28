function openGame() {
  document.getElementById("game-container").classList.remove("hidden");

  // Your game code will go here later
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
// Smooth scroll
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.onclick = () => {
  navLinks.classList.toggle("show");
};

// Load game
function openGame() {
  const container = document.getElementById("game-container");
  container.classList.remove("hidden");

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientWidth * 0.5;

  ctx.fillStyle = "#ff8c42";
  ctx.font = "28px system-ui";
  ctx.textAlign = "center";
  ctx.fillText("Drifter will run here — insert your game code", canvas.width / 2, canvas.height / 2);
}

  ctx.fillStyle = "#99711b";
  ctx.font = "40px system-ui";
  ctx.fillText("Game Loaded — Insert Drifter Code Here", 50, 100);
}
