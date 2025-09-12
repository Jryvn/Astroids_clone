"use strict";
class Ship {
  vr = 0;
  thrust = 0;
  rotation = 0;
  width = 25;
  height = 20;
  showFlame = false;
  vx = 0;
  vy = 0;

  constructor(canvas) {
    this.top = 0;
    this.left = 0;
    this.right = canvas.width;
    this.bottom = canvas.bottom;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }

  update() {
    this.rotation += (this.vr * Math.PI) / 180;
    const ax = Math.cos(this.rotation) * this.thrust;
    const ay = Math.sin(this.rotation) * this.thrust;
    const friction = 0.99;

    this.vx += ax;
    this.vy += ay;
    this.vx *= friction;
    this.vy *= friction;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x - this.width / 2 > this.right) {
      this.x = this.left - this.width / 2;
    } else if (this.x + this.width / 2 < this.left) {
      this.x = this.right + this.width / 2;
    }
    if (this.y - this.height / 2 > this.bottom) {
      this.y = this.top - this.height / 2;
    } else if (this.y + this.height / 2 < top) {
      this.y = this.bottom + this.height / 2;
    }
  }

  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.lineWidth = 1;
    context.strokeStyle = "#ffffffff";
    context.beginPath();
    context.moveTo(10, 0);
    context.lineTo(-10, 10);
    context.lineTo(-5, 0);
    context.lineTo(-10, -10);
    context.lineTo(10, 0);
    context.stroke();
    if (this.showFlame) {
      context.beginPath();
      context.moveTo(-7.5, -5);
      context.lineTo(-15, 0);
      context.lineTo(-7.5, 5);
      context.stroke();
    }
    context.restore();
  }

  // used arrow notation for event listeners
  keyPressed = (event) => {
    switch (event.keyCode) {
      case 37: // left
        this.vr = -3;
        break;
      case 39: // right
        this.vr = 3;
        break;
      case 38: // up
        this.thrust = 0.05;
        this.showFlame = true;
        break;
    }
  }

  keyReleased = (event) => {
    this.vr = 0;
    this.thrust = 0;
    this.showFlame = false;
  }
}
