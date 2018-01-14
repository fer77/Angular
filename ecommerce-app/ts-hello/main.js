"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
var component = new like_component_1.Like(10, true);
component.click();
console.log("counter: " + component.counter + ", selected: " + component.selected);
