class Ufo {
  constructor(x, y, width, height, color, ctx) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  _draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += 4;
  }

  moveLeft() {
    this.x -= 4;
  }

  abduct() {
    this.ctx.fillStyle = "#FFFACD";
    this.ctx.fillRect(this.x + 33, 60, 15, 490);
  }
}
