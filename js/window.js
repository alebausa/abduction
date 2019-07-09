class Window {
  constructor(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.hasPerson = false;
  }

  _drawWindow(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    if (this.hasPerson) {
      ctx.fillStyle = "grey";
      ctx.fillRect(this.x + 5, this.y + 10, this.width / 2, this.height / 2);
    }
  }

  _addPerson() {
    this.hasPerson = true;
    setTimeout(() => {
      this.hasPerson = false;
    }, 4000);
  }
}
