class Car {
  constructor(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }
  _draw(ctx) {
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      policeCar.sprite,
      5,
      0,
      145,
      166,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  // _animate() {
  //   setInterval(function() {
  //     myUfo.x += myUfo.width;
  //     myUfo.actualStep++;
  //     if (myUfo.actualStep === myUfo.totalSteps) {
  //       myUfo.actualStep = 1;
  //       myUfo.x = 0;
  //     }
  //   }, 500);
  // }

  _drive() {
    setInterval(() => {
      this.x = this.x + 2;
    }, 1000);
  }
}
