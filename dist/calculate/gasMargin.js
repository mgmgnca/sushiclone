"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gasMargin = void 0;
// Add 20%
function gasMargin(value) {
    return (value * 120n) / 100n;
}
exports.gasMargin = gasMargin;
//# sourceMappingURL=gasMargin.js.map