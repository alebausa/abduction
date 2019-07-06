class Ufo {
  constructor(x, y, width, height, color, ctx) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += 3;
  }

  moveLeft() {
    this.x -= 3;
  }
}
