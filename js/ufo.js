class Ufo {
  constructor(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  _draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += 4;
  }

  moveLeft() {
    this.x -= 4;
  }

  abduct(ctx) {
    ctx.fillStyle = "#FFFACD";
    ctx.fillRect(this.x + 33, 60, 15, 490);
  }
}
