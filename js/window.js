class Window {
  constructor(x, y, width, height, color, ctx) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  _drawWindow() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  _addPerson() {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(this.x + 5, this.y + 10, this.width / 2, this.height / 2);
  }
}
