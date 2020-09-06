"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getDevices_1 = __importDefault(require("./utils/devices/getDevices"));
getDevices_1.default(['192.168.0.30', '192.168.0.31', '192.168.0.32']).then(x => {
    console.log(x);
});
