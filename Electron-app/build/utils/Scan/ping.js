"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
function ping(ip) {
    return new Promise((rel, rej) => {
        const timeout = 150;
        var timer = setTimeout(function () {
            socket.destroy();
            rej("");
        }, timeout);
        const socket = net_1.default.connect({ host: ip, port: 4028 }, function () {
            clearTimeout(timer);
            socket.end();
            rel(ip);
        })
            .on("error", () => {
            clearTimeout(timer);
            rej("");
        });
    });
}
exports.default = ping;
