"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fee = void 0;
var Fee;
(function (Fee) {
    /** 0.01% */
    Fee[Fee["LOW"] = 1] = "LOW";
    /** 0.05% */
    Fee[Fee["MEDIUM"] = 5] = "MEDIUM";
    /** 0.1% */
    Fee[Fee["AVERAGE"] = 10] = "AVERAGE";
    /** 0.3% */
    Fee[Fee["DEFAULT"] = 30] = "DEFAULT";
    /** 1% */
    Fee[Fee["HIGH"] = 100] = "HIGH";
    //   MAX = 10000
})(Fee || (exports.Fee = Fee = {}));
//# sourceMappingURL=fee.js.map