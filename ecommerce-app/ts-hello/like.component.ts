export class Like {
  constructor(public counter: number, public selected: boolean) {}

  click() {
    if (this.selected) {
      this.counter -= 1;
    } else {
      this.counter += 1;
    }
    // Same as:
    // this.counter += (this.selected) ? 1 : -1;

    // 'toggles' boolean for selected property.
    this.selected = !this.selected;
  }
}
