class Space {
  constructor(canvas, window) {
    this.top = 0;
    this.left = 0;
    this.right = canvas.width;
    this.bottom = canvas.height;
    this.canvas = canvas;
    this.ship = new Ship(canvas);
    window.addEventListener("keydown", this.ship.keyPressed, false);
    window.addEventListener("keyup", this.ship.keyReleased, false);
    this.asteroids = [];
    for (var i = 0; i < 10; i++){
      this.asteroids.push (new Asteroid(canvas));
    }
    this.bullets = [];
  }

  update() {
    this.ship.update();
    if (this.ship.fire == true) {
      this.ship.fire = false;
      this.bullets.push (new Bullet(canvas));
      this.bullets[this.bullets.length-1].activate(this.ship.x, this.ship.y, this.ship.rotation);
    }
    for(var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].update();
    }
    for(var j = 0; j < this.bullets.length; j++){
      this.bullets[j].update();
      if (!this.bullets[j].active){
        this.bullets.splice(j, 1);
      }
    }
  }

  draw(context) {
    context.clearRect(this.left, this.top, this.right, this.bottom);
    this.ship.draw(context);
    for(var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(context);
    }
    for(var j = 0; j < this.bullets.length; j++){
      this.bullets[j].draw(context);
    }
  }
}
