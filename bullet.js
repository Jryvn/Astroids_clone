class Bullet {
  constructor(canvas) {
    this.top = 0;
    this.left = 0;
    this.right = canvas.width;
    this.bottom = canvas.height;
    this.active = false;
    this.width = 4;
    this.height = 4;
    this.speed = 5;
  }

  activate(x, y, rotation){
    this.x = x;
    this.y = y;
    this.vx = Math.cos(rotation) * this.speed;
    this.vy = Math.sin(rotation) * this.speed;
    this.time = Date.now() + 1500;
    this.active = true;
  }
  update() {
    if (this.active){
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
      if (this.time < Date.now()){
        this.active = false;
      }  
    }
  }
  draw(context) {
    if (this.active){
      context.save();
      context.translate(this.x, this.y);
      context.rotate(this.rotation);
      context.lineWidth = 1;
      context.strokeStyle = "#ffffffff";
      context.beginPath();
      context.arc(0, 0, 1, 0, 2 * Math.PI);
      context.stroke();
      context.restore();
    }
  }
}
