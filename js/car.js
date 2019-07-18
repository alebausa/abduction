class Car {
  constructor(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this._animate();
    this._drive();
  }

  _draw(ctx) {
    ctx.drawImage(
      policeCar.sprite,
      policeCar.x,
      policeCar.y,
      145,
      69,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  _animate() {
    setInterval(function() {
      policeCar.x += policeCar.width;
      policeCar.actualStep++;
      if (policeCar.actualStep === policeCar.totalSteps) {
        policeCar.actualStep = 1;
        policeCar.x = 5;
      }
    }, 200);
  }

  _drive() {
    setTimeout(() => {
      setInterval(() => {
        this.x = this.x + 15;
        console.log("ep");
      }, 100);
    }, 3000);
  }
}
