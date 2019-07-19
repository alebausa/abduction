class Building {
  constructor(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  _drawBuilding(ctx) {
    ctx.drawImage(
      wallOne.sprite,
      0,
      0,
      695,
      465,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
