class Point {
  constructor(private x?: number, private y?: number) {
    this.x = x;
    this.y = y;
  }
  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let point = new Point (1, 2);
point.x = 3;
point.draw();
