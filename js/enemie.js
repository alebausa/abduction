class Enemie {
  constructor(x, y, width, height, color, direction) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.direction = direction;
    this._appear();
    // this._animate();
  }

  _draw(ctx) {
    if (this.direction === "left") {
      ctx.drawImage(
        ghostRight.sprite,
        ghostRight.x,
        ghostRight.y,
        ghostRight.width,
        ghostRight.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else if (this.direction === "right") {
      ctx.drawImage(
        ghostLeft.sprite,
        ghostLeft.x,
        ghostLeft.y,
        ghostLeft.width,
        ghostLeft.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }

  _appear() {
    setInterval(() => {
      if (this.direction === "left") {
        this.x = this.x - 5;
      } else if (this.direction === "right") {
        this.x = this.x + 5;
      }
    }, 100);
  }

  _animate() {
    setInterval(() => {
      ghost.x += ghost.width;
      ghost.actualStep++;
      if (ghost.actualStep === ghost.totalSteps) {
        ghost.actualStep = 1;
        ghost.x = 3;
      }
    }, 500);
  }
}
