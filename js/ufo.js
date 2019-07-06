class Ufo {
  constructor(x, y, width, height, color) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += 1;
  }

  moveLeft() {
    this.x -= 1;
  }
}
