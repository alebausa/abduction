var game;
var bgMusic;

document.onload = (function() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  var startBtn = document.getElementById("start-btn");
  startBtn.addEventListener("click", startGame);

  var continueBtn = document.getElementById("continue-btn");
  continueBtn.addEventListener("click", resumeGame);

  var aliveBtns = Array.from(document.getElementsByClassName("alive-btn"));
  aliveBtns.forEach(function(button) {
    button.addEventListener("click", startGame);
  });

  function startGame() {
    document.getElementById("start-panel").style = "display: none;";
    document.getElementById("enemie-panel").style = "display: none;";
    document.getElementById("myCanvas").style = "display: block;";
    document.getElementById("counter").style = "display: block;";
    game = new Game(ctx);
    game.start();
    bgMusic = new sound("./sounds/song.wav");
    bgMusic.play();
  }

  function resumeGame() {
    game.resume();
  }
})();
