"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentLocalIp = void 0;
const os_1 = __importDefault(require("os"));
function currentLocalIp() {
    const ifaces = os_1.default.networkInterfaces();
    const data = Object.keys(ifaces)
        .map((key) => {
        const iface = ifaces[key];
        const ifdata = iface === null || iface === void 0 ? void 0 : iface.filter(y => 'IPv6' !== y.family && !y.internal);
        //@ts-ignore    
        //@ts-ignore
        if (ifdata.length > 0)
            return ifdata;
    })
        .filter(data_ => {
        return data_ !== undefined;
    });
    //data.map(x=>x[0])
    //console.log(data.map(iface=>iface[0]))
    //@ts-ignore
    return data.map(iface => iface[0]);
}
exports.currentLocalIp = currentLocalIp;
currentLocalIp();
