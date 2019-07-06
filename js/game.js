class Game {
  constructor(ctx) {
    const canvas = document.getElementById("myCanvas");
    this.ctx = canvas.getContext("2d");
  }

  _drawBuildings() {
    let floor = new Component(0, 550, 900, 100, "grey");
    let building1 = new Component(100, 325, 150, 225, "brown");
    let building2 = new Component(255, 350, 145, 200, "gold");
    let building3 = new Component(500, 190, 100, 360, "blue");
    let building4 = new Component(620, 190, 100, 360, "blue");
    let windows1 = new Component(135, 345, 20, 20, "white");
    let windows2 = new Component(195, 345, 20, 20, "white");
    let windows3 = new Component(135, 390, 20, 20, "white");
    let windows4 = new Component(195, 390, 20, 20, "white");
    let windows5 = new Component(135, 435, 20, 20, "white");
    let windows6 = new Component(195, 435, 20, 20, "white");
    let windows7 = new Component(135, 480, 20, 20, "white");
    let windows8 = new Component(195, 480, 20, 20, "white");
  }

  _drawUfo() {
    let ufo = new Ufo(30, 30, 100, 40, "red");
  }

  start() {
    this._drawBuildings();
    this._drawUfo();
  }
}
