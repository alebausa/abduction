var game;

document.onload = (function() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  var startBtn = document.getElementById("start-btn");
  startBtn.addEventListener("click", startGame);

  function startGame() {
    document.getElementById("start-panel").style = "display: none;";
    document.getElementById("myCanvas").style = "display: block;";
    game = new Game(ctx);
    game.start();

    //pause pinta div de PAUSE
  }
})();
