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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ping_1 = __importDefault(require("./ping"));
class Scan {
    static subnet(net) {
        return __awaiter(this, void 0, void 0, function* () {
            let b = net.split(".");
            b.pop();
            b.push("");
            const subnet = b.join(".");
            let ips = [];
            for (let i = 1; i < 256; i++) {
                const ip = subnet + i;
                try {
                    const element = yield ping_1.default(ip);
                    ips.push(element);
                }
                catch (error) {
                    continue;
                }
            }
            return ips;
        });
    }
    ;
    static range(net, start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            let b = net.split(".");
            b.pop();
            b.push("");
            const subnet = b.join(".");
            let ips = [];
            for (let i = start; i <= end; i++) {
                const ip = subnet + i;
                console.log(i);
                try {
                    const element = yield ping_1.default(ip);
                    ips.push(element);
                }
                catch (error) {
                    continue;
                }
            }
            return ips;
        });
    }
    static silgle(ip) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const element = yield ping_1.default(ip);
                if (element !== "")
                    return true;
                else
                    return false;
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.default = Scan;
