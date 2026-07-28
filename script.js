function openGame() {
  document.getElementById("game-container").classList.remove("hidden");

  // Your game code will go here later
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillStyle = "#99711b";
  ctx.font = "40px system-ui";
  ctx.fillText("Game Loaded — Insert Drifter Code Here", 50, 100);
}
