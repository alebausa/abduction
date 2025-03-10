class Ray {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.sound = new sound("./sounds/laser.mp3");
  }

  _draw(ctx) {
    ctx.drawImage(
      myUfo.sprite,
      188,
      85,
      7,
      71,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.sound.play();
  }
}
