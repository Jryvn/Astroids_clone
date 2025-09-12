class Space {
  constructor(canvas) {
    this.top = 0;
    this.left = 0;
    this.right = canvas.width;
    this.bottom = canvas.height;
  }

  update() {}

  draw(context) {
    context.clearRect(this.left, this.top, this.right, this.bottom);
  }
}
