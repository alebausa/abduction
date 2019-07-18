class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvasWidth = 900;
    this.canvasHeight = 650;
    this.keys = [];
    this.windows = windows;
    this.buildings = buildings;
    this.floor = new Floor(0, 550, 900, 100, "grey");
    this.ufo = new Ufo(30, 30, 83, 65, "red");
    this.car = new Car(-100, 550, 100, 50, "blue");
    this.enemiesRight = enemiesRight;
    this.enemiesLeft = enemiesLeft;
    this.status = undefined;
    this.intervalPersonGenerator = undefined;
    this.victimCounter = 0;
    this.level = 1;
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

  _paintEnemies() {
    for (let i = 0; i < this.enemiesRight.length; i++) {
      this.enemiesRight[i]._draw(this.ctx);
    }
    for (let i = 0; i < this.enemiesLeft.length; i++) {
      this.enemiesLeft[i]._draw(this.ctx);
    }
    setInterval(() => {
      this.enemiesRight.forEach(enemie => {
        enemie._appearFromRight();
      });
    }, 1000);
    setInterval(() => {
      this.enemiesLeft.forEach(enemie => {
        enemie._appearFromLeft();
      });
    }, 3000);
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
    if (this.victimCounter === 5) {
      this.level = 2;
    }
    if (this.victimCounter === 10) {
      this.level = 3;
    }
    document.getElementById("level").innerHTML = this.level;
  }

  _checkCar() {
    if (this.car.x === 400 && !this.ufo.hidden) {
      console.log("DEAD!");
      document.getElementById("dead-panel").style = "display: block;";
      document.getElementById("dead-panel").style = "position: absolute;";
      this.status = "paused";
    }
  }

  _checkEnemiesCollision() {
    for (let i = 0; i < this.enemiesRight.length; i++) {
      if (
        this.keys[32] &&
        this.ufo.ray.x >= enemiesRight[i].x &&
        this.ufo.ray.x <= enemiesRight[i].x + enemiesRight[i].width
      ) {
        enemiesRight[i].width = 0;
        this.victimCounter--;
        if (this.victimCounter < 0) {
          this.status = "paused";
          document.getElementById("enemie-panel").style = "display: block;";
          document.getElementById("enemie-panel").style = "position: absolute;";
        }
      }
    }
  }

  _assignControls() {
    document.onkeydown = e => {
      if (e.keyCode === 72) {
        this.ufo.hide(this.ctx);
        console.log(this.ufo.hidden);
      }
    };

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
  }

  _update() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    // Basic
    this._assignControls();
    this._paintBuildings();
    this._paintWindows();
    this.floor._drawFloor(this.ctx);
    // Ufo
    this.ufo._draw(this.ctx);
    this._checkCollision();
    // Animals
    this._paintEnemies(this.ctx);
    this._checkEnemiesCollision();
    // Car
    this.car._draw(this.ctx);
    this._checkCar();
    // Check status
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
    document.getElementById("pause-panel").style = "display: block;";
    document.getElementById("pause-panel").style = "position: absolute;";
  }

  resume() {
    this.status = "running";
    document.getElementById("pause-panel").style = "display: none;";
    this._checkStatus();
  }

  start() {
    this.status = "running";
    document.getElementById("dead-panel").style = "display: none;";
    this.ufo._animate();
    // for (let i = 0; i < this.enemiesRight.length; i++) {
    //   enemiesRight[i]._animate();
    // }

    // this.enemiesRight.forEach(enemy => {
    //   enemy._animate();
    // });

    this.intervalPersonGenerator = setInterval(() => {
      this._generatePerson();
    }, 3000);
    this._checkStatus();
  }
}
