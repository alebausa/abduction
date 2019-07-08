class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvasWidth = 900;
    this.canvasHeight = 650;
    this.ufo = new Ufo(30, 30, 80, 30, "red", this.ctx);
    this.window1 = new Window(135, 345, 20, 20, "white", this.ctx);
    this.keys = [];
    this.intervalGame = undefined;
  }

  _drawScenario() {
    let floor = new Building(0, 550, 900, 100, "grey", this.ctx);
    let building1 = new Building(100, 325, 150, 225, "brown", this.ctx);
    let building2 = new Building(255, 350, 145, 200, "gold", this.ctx);
    let building3 = new Building(500, 190, 100, 360, "blue", this.ctx);
    let building4 = new Building(620, 190, 100, 360, "blue", this.ctx);
    let windows1 = new Window(135, 345, 20, 20, "white", this.ctx);
    let windows2 = new Window(195, 345, 20, 20, "white", this.ctx);
    let windows3 = new Window(135, 390, 20, 20, "white", this.ctx);
    let windows4 = new Window(195, 390, 20, 20, "white", this.ctx);
    let windows5 = new Window(135, 435, 20, 20, "white", this.ctx);
    let windows6 = new Window(195, 435, 20, 20, "white", this.ctx);
    let windows7 = new Window(135, 480, 20, 20, "white", this.ctx);
    let windows8 = new Window(195, 480, 20, 20, "white", this.ctx);
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
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
  }

  start() {
    this._update();
  }
}
