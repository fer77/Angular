export class Like {
  constructor(private _counter: number, private _selected: boolean) {}

  click() {
    if (this._selected) {
      this._counter -= 1;
    } else {
      this._counter += 1;
    }
    // Same as:
    // this._counter += (this._selected) ? 1 : -1;

    // 'toggles' boolean for _selected property.
    this._selected = !this._selected;
  }

  get likesCount() {
    return this._counter;
  }
  
  get isSelected() {
    return this._selected;
  }
}
