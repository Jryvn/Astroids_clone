class Asteroid {
  constructor(canvas) {
    this.size = Math.random() * 3 + 0.5;
    //this.size = 4; // 1 small, 2 medium, 4 large
    this.top = 0;
    this.left = 0;
    this.right = canvas.width;
    this.bottom = canvas.height;
    let rotation = (Math.random() * 360 * Math.PI) / 90;
    let thrust = 2.5 / this.size;
    this.vx = Math.cos(rotation) * thrust;
    this.vy = Math.sin(rotation) * thrust;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.width = 20;
    this.height = 20;
    this.type = Math.trunc(Math.random() * 4);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x - this.width / 2 > this.right) {
      this.x = this.left - this.width / 2;
    } else if (this.x + this.width / 2 < this.left) {
      this.x = this.right + this.width / 2;
    }
    if (this.y - this.height / 2 > this.bottom) {
      this.y = this.top - this.height / 2;
    } else if (this.y + this.height / 2 < this.top) {
      this.y = this.bottom + this.height / 2;
    }
  }
  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.scale(this.size, this.size);
    context.lineWidth = 1.0 / this.size;
    context.strokeStyle = "#ffffffff";
    context.beginPath();
    context.moveTo(-10, 0);

    const xPath = [
      [0, 5, 9, 6, 8, 3, -3, -9, -9, -4],
      [1, 6, 9, 6, 9, 3, -4, -6, -9, -7, -8, -3],
      [3, 9, 9, 3, 9, 6, 4, -3, -9, -9, -2, -4],
      [3, 9, 9, 6, 0, 0, -5, -10, -4, -9, -3],
    ];
    const yPath = [
      [-4, -7, -3, 1, 6, 9, 9, 3, -3, -9],
      [-7, -8, -3, -2, 3, 9, 6, 8, 3, -1, -6, -9],
      [-9, -6, -4, -1, 3, 8, 6, 9, 1, -5, -5, -9],
      [-9, -2, 2, 8, 8, 2, 9, 1, -1, -3, -9],
    ];

    context.moveTo(
      xPath[this.type][xPath[this.type].length - 1],
      yPath[this.type][yPath[this.type].length - 1]
    );
    for (let count = 0; count < xPath[this.type].length; count++) {
      context.lineTo(xPath[this.type][count], yPath[this.type][count]);
    }
    context.stroke();
    context.restore();
  }
}