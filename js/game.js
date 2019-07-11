class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvasWidth = 900;
    this.canvasHeight = 650;
    this.keys = [];
    this.windows = windows;
    this.buildings = buildings;
    this.floor = floor;
    this.ufo = new Ufo(30, 30, 80, 30, "red");
    this.status = undefined;
    this.intervalPersonGenerator = undefined;
    this.victimCounter = 0;
  }

  _paintBuildings() {
    for (let i = 0; i < this.buildings.length; i++) {
      this.buildings[i]._drawBuilding(this.ctx);
    }
  }

  _paintWindows() {
    for (let i = 0; i < this.windows.length; i++) {
      this.windows[i]._drawWindow(this.ctx);
    }
  }

  _generatePerson() {
    var randomWindow = Math.floor(Math.random() * this.windows.length);
    this.windows[randomWindow]._addPerson();
  }

  _checkCollision() {
    for (let i = 0; i < this.windows.length; i++) {
      if (
        this.keys[32] &&
        this.ufo.ray.x >= windows[i].x &&
        this.ufo.ray.x <= windows[i].x + windows[i].width
      ) {
        if (this.windows[i].hasPerson) {
          this.windows[i].hasPerson = false;
          this.victimCounter++;
        }
      }
    }
    document.getElementById("victims").innerHTML = this.victimCounter;
  }

  _assignControls() {
    window.addEventListener(
      "keydown",
      function(event) {
        this.keys[event.keyCode] = true;
      }.bind(this)
    );

    window.addEventListener(
      "keyup",
      function(event) {
        this.keys[event.keyCode] = false;
      }.bind(this)
    );

    if (this.keys[37]) {
      this.ufo.moveLeft();
    }

    if (this.keys[39]) {
      this.ufo.moveRight();
    }

    if (this.keys[32]) {
      this.ufo.ray._draw(this.ctx);
    }

    if (this.keys[80]) {
      this.pause();
    }

    if (this.keys[13]) {
      this.resume();
    }
    //si apreto la P, status pause
  }

  _update() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this._assignControls();
    this._paintBuildings();
    this._paintWindows();
    this.floor._drawBuilding(this.ctx);
    this.ufo._draw(this.ctx);
    this._checkCollision();
    this.intervalGame = window.requestAnimationFrame(
      this._checkStatus.bind(this)
    );
  }

  _checkStatus() {
    switch (this.status) {
      case "running":
        this._update();
        break;
      case "paused":
        break;
    }
  }

  pause() {
    this.status = "paused";
    document.getElementsByTagName("canvas").style = "filter: blur(6px);";
    document.getElementById("pause-panel").style = "display: block;";
    document.getElementById("pause-panel").style = "position: absolute;";
  }

  resume() {
    this.status = "running";
    document.getElementById("pause-panel").style = "display: none;";
    document.getElementsByTagName("canvas").style = "filter: blur(0px);";
    this._checkStatus();
  }

  start() {
    this.status = "running";
    this.intervalPersonGenerator = setInterval(() => {
      this._generatePerson();
    }, 3000);
    this._checkStatus();
  }
}
