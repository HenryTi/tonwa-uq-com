"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.CSub = exports.CBase = void 0;
var vm_1 = require("../vm");
var CBase = /** @class */ (function (_super) {
    __extends(CBase, _super);
    function CBase(cApp) {
        var _this = _super.call(this, cApp.getTonwa()) || this;
        _this.cApp = cApp;
        if (cApp) {
            var uqs = cApp.uqs, web = cApp.web;
            _this.uqs = uqs;
            _this.web = web;
            //this.nav = nav;
        }
        return _this;
    }
    Object.defineProperty(CBase.prototype, "timezone", {
        get: function () { return this.cApp.timezone; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CBase.prototype, "unitTimezone", {
        get: function () { return this.cApp.unitTimezone; },
        enumerable: false,
        configurable: true
    });
    CBase.prototype.bizDate = function (date) { return this.cApp.bizDate(date); };
    CBase.prototype.getUqRoles = function (uqName) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, (_a = this.cApp) === null || _a === void 0 ? void 0 : _a.getUqRoles(uqName)];
            });
        });
    };
    CBase.prototype.internalStart = function (param) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    CBase.prototype.internalT = function (str) {
        var r = _super.prototype.internalT.call(this, str);
        if (r !== undefined)
            return r;
        return this.cApp.internalT(str);
    };
    CBase.prototype.newC = function (type) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var c = new type(this.cApp);
        c.internalInit.apply(c, param);
        return c;
    };
    CBase.prototype.newSub = function (type) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var s = new type(this);
        s.internalInit.apply(s, param);
        return s;
    };
    CBase.prototype.getWebNav = function () {
        var _a;
        var wn = (_a = this.cApp) === null || _a === void 0 ? void 0 : _a.getWebNav();
        if (wn === undefined)
            return;
        var ret = Object.assign({}, wn);
        Object.assign(ret, this.webNav);
        return ret;
    };
    CBase.prototype.userFromId = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web.centerApi.userFromId(userId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CBase.prototype.userFromKey = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web.centerApi.userFromKey(userName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CBase;
}(vm_1.ControllerWithWeb));
exports.CBase = CBase;
var CSub = /** @class */ (function (_super) {
    __extends(CSub, _super);
    function CSub(owner) {
        var _this = _super.call(this, owner.cApp) || this;
        _this._owner = owner;
        return _this;
    }
    CSub.prototype.internalT = function (str) {
        var r = _super.prototype.internalT.call(this, str);
        if (r !== undefined)
            return r;
        return this._owner.internalT(str);
    };
    Object.defineProperty(CSub.prototype, "owner", {
        get: function () { return this._owner; },
        enumerable: false,
        configurable: true
    });
    CSub.prototype.getWebNav = function () {
        var _a, _b;
        var wn = (_a = this.cApp) === null || _a === void 0 ? void 0 : _a.getWebNav();
        if (wn === undefined)
            return;
        var ownerWNs = [];
        for (var p = this.owner; p !== undefined; p = (_b = p) === null || _b === void 0 ? void 0 : _b.owner) {
            ownerWNs.push(p.webNav);
        }
        var ret = Object.assign({}, wn);
        for (;;) {
            var own = ownerWNs.pop();
            if (own === undefined)
                break;
            Object.assign(ret, own);
        }
        Object.assign(ret, this.webNav);
        return ret;
    };
    return CSub;
}(CBase));
exports.CSub = CSub;
//# sourceMappingURL=CBase.js.map