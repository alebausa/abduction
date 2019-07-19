class Enemie {
  constructor(x, y, width, height, color, direction) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.direction = direction;
    this._appear();
    this._animate();
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
      if (this.direction === "left") {
        ghostRight.x += ghostRight.width;
        ghostRight.actualStep++;
        if (ghostRight.actualStep === ghostRight.totalSteps) {
          ghostRight.actualStep = 1;
          ghostRight.x = 3;
        }
      } else if (this.direction === "right") {
        ghostLeft.x += ghostLeft.width;
        ghostLeft.actualStep++;
        if (ghostLeft.actualStep === ghostLeft.totalSteps) {
          ghostLeft.actualStep = 1;
          ghostLeft.x = 5;
        }
      }
    }, 500);
  }
}
