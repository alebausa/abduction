class Floor {
  constructor(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  _drawFloor(ctx) {
    ctx.drawImage(myFloor.sprite, 15, 95, 384, 64, 0, 550, 900, 100);
  }
}
