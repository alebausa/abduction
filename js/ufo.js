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
}
