class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvasWidth = 900;
    this.canvasHeight = 650;
    this.ufo = new Ufo(30, 30, 80, 30, "red", this.ctx);
    this.keys = [];
    this.windows = [];
    this.intervalGame = undefined;
  }

  _drawScenario() {
    let floor = new Building(0, 550, 900, 100, "grey", this.ctx);
    let building1 = new Building(100, 325, 150, 225, "brown", this.ctx);
    let building2 = new Building(255, 350, 145, 200, "gold", this.ctx);
    let building3 = new Building(500, 190, 100, 360, "blue", this.ctx);
    let building4 = new Building(620, 190, 100, 360, "blue", this.ctx);
  }

  _createWindows() {
    let window1 = new Window(135, 345, 20, 20, "white", this.ctx);
    let window2 = new Window(195, 345, 20, 20, "white", this.ctx);
    let window3 = new Window(135, 390, 20, 20, "white", this.ctx);
    let window4 = new Window(195, 390, 20, 20, "white", this.ctx);
    let window5 = new Window(135, 435, 20, 20, "white", this.ctx);
    let window6 = new Window(195, 435, 20, 20, "white", this.ctx);
    let window7 = new Window(135, 480, 20, 20, "white", this.ctx);
    let window8 = new Window(195, 480, 20, 20, "white", this.ctx);
    this.windows.push(
      window1,
      window2,
      window3,
      window4,
      window5,
      window6,
      window7,
      window8
    );
  }

  _paintWindows() {
    this._createWindows();
    for (let i = 0; i < this.windows.length; i++) {
      this.windows[i]._drawWindow();
    }
  }

  _randomPerson() {
    var randomWindow = Math.floor(Math.random() * this.windows.length);
    this.windows[randomWindow]._addPerson();
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
      this.ufo.abduct();
    }
  }

  _update() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this._assignControls();
    this.ufo._draw();
    this._drawScenario();
    this._paintWindows();
    setInterval(() => {
      this._randomPerson();
    }, 3000).bind(this);
    // this._randomPerson();
    // setInterval(this._randomPerson, 3000);
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
  }

  start() {
    this._update();
  }
}
