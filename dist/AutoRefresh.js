"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoRefresh = void 0;
var gaps = [10, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 15, 15, 15, 30, 30, 60];
var AutoRefresh = /** @class */ (function () {
    function AutoRefresh(poke, refreshAction) {
        var _this = this;
        this.refreshTime = Date.now() / 1000;
        // 数据服务器提醒客户端刷新，下面代码重新调入的数据
        this.refresh = function () { return __awaiter(_this, void 0, void 0, function () {
            var d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d = Date.now() / 1000;
                        if (d - this.refreshTime < 30)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.refreshAction];
                    case 1:
                        _a.sent();
                        this.refreshTime = d;
                        return [2 /*return*/];
                }
            });
        }); };
        this.tick = 0;
        this.gapIndex = 0;
        this.callTick = function () { return __awaiter(_this, void 0, void 0, function () {
            var ret, v, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        // if (!this.user) return;
                        ++this.tick;
                        if (this.tick < gaps[this.gapIndex])
                            return [2 /*return*/];
                        this.tick = 0;
                        if (this.gapIndex < gaps.length - 1)
                            ++this.gapIndex;
                        return [4 /*yield*/, this.poke()];
                    case 1:
                        ret = _b.sent();
                        v = ret.ret[0];
                        if (v === undefined)
                            return [2 /*return*/];
                        if (!v.poke)
                            return [2 /*return*/];
                        this.gapIndex = 1;
                        return [4 /*yield*/, this.refresh()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.poke = poke;
        this.refreshAction = refreshAction;
    }
    AutoRefresh.prototype.start = function () {
        if (this.refreshAction === undefined)
            return;
        this.stop();
        this.timer = setInterval(this.callTick, 1000);
    };
    AutoRefresh.prototype.stop = function () {
        if (this.timer === undefined)
            return;
        clearInterval(this.timer);
        this.timer = undefined;
    };
    return AutoRefresh;
}());
exports.AutoRefresh = AutoRefresh;
//# sourceMappingURL=AutoRefresh.js.map