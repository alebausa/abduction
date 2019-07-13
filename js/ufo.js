class Ufo {
  constructor(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.ray = new Ray(this.x + 33, 80, 18, 430, "#FFFACD");
    this.status = "visible"; //"hidden"
  }

  _draw(ctx) {
    if (game.ufo.status === "visible") {
      ctx.drawImage(
        myUfo.sprite,
        myUfo.x,
        0,
        54,
        42,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }

  // _animate() {
  //   setInterval(function() {
  //     myUfo.x += myUfo.width;
  //     myUfo.actualStep++;
  //     if (myUfo.actualStep === myUfo.totalSteps) {
  //       myUfo.actualStep = 1;
  //       myUfo.x = 0;
  //     }
  //   }, 500);
  // }

  moveRight() {
    this.x += 5;
    this.ray.x += 5;
    if (this.x > 900) {
      this.x = -80;
      this.ray.x = this.x + 33;
    }
  }

  moveLeft() {
    this.x -= 5;
    this.ray.x -= 5;
    if (this.x + 80 < 0) {
      this.x = 901;
      this.ray.x = this.x + 33;
    }
  }

  hide() {
    console.log("hidden!");
    console.log(game.ufo.status);
    if (game.ufo.status === "hidden") {
      this.width = 0;
      this.height = 0;
      this.ray.width = 0;
    }
  }
}
