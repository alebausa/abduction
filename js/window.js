class Window {
  constructor(x, y, width, height, color, characters) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.hasPerson = false;
  }

  _drawWindow(ctx) {
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
        character.sprite,
        character.x,
        character.y,
        64,
        78,
        this.x + 2,
        this.y + 2,
        this.width - 3,
        this.height - 3
      );
    }
  }

  _addPerson() {
    this.hasPerson = true;
    setTimeout(() => {
      this.hasPerson = false;
    }, 4000);
  }
}
