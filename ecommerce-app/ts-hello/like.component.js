"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(_counter, _selected) {
        this._counter = _counter;
        this._selected = _selected;
    }
    Like.prototype.click = function () {
        if (this._selected) {
            this._counter -= 1;
        }
        else {
            this._counter += 1;
        }
        // Same as:
        // this._counter += (this._selected) ? 1 : -1;
        // 'toggles' boolean for _selected property.
        this._selected = !this._selected;
    };
    Object.defineProperty(Like.prototype, "likesCount", {
        get: function () {
            return this._counter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "isSelected", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
