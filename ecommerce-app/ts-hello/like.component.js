"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(counter, selected) {
        this.counter = counter;
        this.selected = selected;
    }
    Like.prototype.click = function () {
        if (this.selected) {
            this.counter -= 1;
        }
        else {
            this.counter += 1;
        }
        // Same as:
        // this.counter += (this.selected) ? 1 : -1;
        // 'toggles' boolean for selected property.
        this.selected = !this.selected;
    };
    return Like;
}());
exports.Like = Like;
