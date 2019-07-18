class Enemie {
  constructor(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    // this._appearFromRight();
    // this._appearFromLeft();
    // this._animate();
  }

  _draw(ctx) {
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      dogRight.sprite,
      dogRight.x,
      0,
      39.5,
      36,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  _appearFromRight() {
    setInterval(() => {
      this.x = this.x - 0.03;
    }, 1000);
  }

  _appearFromLeft() {
    setInterval(() => {
      this.x = this.x + 0.5;
    }, 950);
  }

  _animate() {
    setInterval(() => {
      dogRight.x += dogRight.width;
      dogRight.actualStep++;
      if (dogRight.actualStep === dogRight.totalSteps) {
        dogRight.actualStep = 1;
        dogRight.x = 5;
      }
    }, 500);
  }
}
