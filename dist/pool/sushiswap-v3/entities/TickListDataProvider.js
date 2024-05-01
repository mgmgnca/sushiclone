"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickListDataProvider = void 0;
const tickList_js_1 = require("../utils/tickList.js");
const Tick_js_1 = require("./Tick.js");
/**
 * A data provider for ticks that is backed by an in-memory array of ticks.
 */
class TickListDataProvider {
    ticks;
    constructor(ticks, tickSpacing) {
        const ticksMapped = ticks.map((t) => t instanceof Tick_js_1.Tick ? t : new Tick_js_1.Tick(t));
        tickList_js_1.TickList.validateList(ticksMapped, tickSpacing);
        this.ticks = ticksMapped;
    }
    async getTick(tick) {
        return tickList_js_1.TickList.getTick(this.ticks, tick);
    }
    async nextInitializedTickWithinOneWord(tick, lte, tickSpacing) {
        return tickList_js_1.TickList.nextInitializedTickWithinOneWord(this.ticks, tick, lte, tickSpacing);
    }
}
exports.TickListDataProvider = TickListDataProvider;
//# sourceMappingURL=TickListDataProvider.js.map