"use strict";
exports.__esModule = true;
var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(propusor) {
        this.propusor = propusor;
    }
    SpaceCraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entereing hyperspace with " + this.propusor);
    };
    return SpaceCraft;
}());
exports.SpaceCraft = SpaceCraft;
