class Ufo {
  constructor(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.ray = new Ray(this.x + 33, 60, 15, 490, "#FFFACD");
  }

  _draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += 4;
    this.ray.x += 4;
    if (this.x > 900) {
      this.x = 1;
      this.ray.x = this.x + 33;
    }
  }

  moveLeft() {
    this.x -= 4;
    this.ray.x -= 4;
    if (this.x < 0) {
      this.x = 900;
      this.ray.x = this.x + 33;
    }
  }
}
