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
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      windowOff.sprite,
      76,
      20,
      642,
      642,
      this.x,
      this.y,
      this.width,
      this.height
    );
    if (this.hasPerson) {
      // ctx.fillStyle = "grey";
      // ctx.fillRect(this.x + 5, this.y + 10, this.width / 2, this.height / 2);
      ctx.drawImage(
        windowOn.sprite,
        76,
        20,
        642,
        642,
        this.x,
        this.y,
        this.width,
        this.height
      );
      ctx.drawImage(
        characters.sprite,
        405,
        3,
        64,
        78,
        this.x + 2,
        this.y + 2,
        this.width - 5,
        this.height - 5
      );
    }
  }

  _addPerson() {
    this.hasPerson = true;
    setTimeout(() => {
      this.hasPerson = false;
    }, 4000);
  }

  _animate() {
    setInterval(function() {
      characters.x += characters.width;
      characters.actualStep++;
      if (characters.actualStep === characters.totalSteps) {
        characters.actualStep = 1;
        characters.x = 0;
      }
    }, 500);
  }
}
