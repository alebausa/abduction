class Ufo {
  constructor(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.ray = new Ray(this.x + 32, 93, 18, 430, "#FFFACD");
    this.hidden = false;
    this.hiddenSound = new sound("./sounds/hidesound.mp3");
    this.appearSound = new sound("./sounds/appearsound.mp3");
  }

  _draw(ctx) {
    ctx.drawImage(
      myUfo.sprite,
      myUfo.x,
      0,
      60,
      35,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  _animate() {
    setInterval(function() {
      myUfo.x += myUfo.width;
      myUfo.actualStep++;
      if (myUfo.actualStep === myUfo.totalSteps) {
        myUfo.actualStep = 1;
        myUfo.x = 2.5;
      }
    }, 100);
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

  hide(ctx) {
    this.hidden = !this.hidden;
    if (this.hidden === true) {
      this.width = 0;
      this.ray.width = 0;
      this.hiddenSound.play();
    }
    if (this.hidden === false) {
      this.width = 83;
      this.ray.width = 18;
      this.appearSound.play();
    }
  }
}
