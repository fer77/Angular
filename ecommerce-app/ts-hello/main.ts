class Point {
  constructor(private _x?: number, private _y?: number) {}
  draw() {
    console.log('X: ' + this._x + ', Y: ' + this._y);
  }
  get x() {
    return this._x;
  }
  set x(value) {
    if (value < 0)
      throw new Error('Value can not be less than 0.');
    this._x = value;
  }
}

let point = new Point (1, 2);
let x = point.x;// to get the x value.
point.x = 10;// to pass a new value for x.
point.draw();
