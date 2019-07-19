var game;

document.onload = (function() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  var startBtn = document.getElementById("start-btn");
  startBtn.addEventListener("click", startGame);

  var continueBtn = document.getElementById("continue-btn");
  continueBtn.addEventListener("click", resumeGame);

  var bustedBtn = document.getElementById("alive-btn");
  bustedBtn.addEventListener("click", startGame);

  var gameOverBtn = document.getElementById("game-over");
  gameOverBtn.addEventListener("click", startGame);

  function startGame() {
    document.getElementById("start-panel").style = "display: none;";
    document.getElementById("enemie-panel").style = "display: none;";
    document.getElementById("myCanvas").style = "display: block;";
    document.getElementById("counter").style = "display: block;";
    game = new Game(ctx);
    game.start();
  }

  function resumeGame() {
    game.resume();
  }
})();
