"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsanitize = void 0;
// replace the colon sanitzed by nextjs with a colon
function unsanitize(id) {
    return id.replaceAll('%3A', ':');
}
exports.unsanitize = unsanitize;
//# sourceMappingURL=unsanitize.js.map