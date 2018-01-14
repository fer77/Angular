"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.Like(10, true);
component.click();
console.log("counter: " + component.likesCount + ", selected: " + component.isSelected);
