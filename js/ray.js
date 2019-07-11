class Ray {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  _draw(ctx) {
    ctx.drawImage(
      myUfo.sprite,
      0,
      0,
      661,
      309,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
