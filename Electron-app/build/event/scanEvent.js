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
const electron_1 = require("electron");
const Scan_1 = __importDefault(require("../utils/Scan/Scan"));
const currentLocalIp_1 = require("../utils/Scan/currentLocalIp");
function scanEvent() {
    //console.log('scanEvent init')
    electron_1.ipcMain.on('scan-ip-subnet', (event, arg) => __awaiter(this, void 0, void 0, function* () {
        //console.log('scan-ip-subnet',arg);        
        const ips = yield Scan_1.default.subnet(arg);
        event.reply('scan-subnet-reply', ips);
    }));
    electron_1.ipcMain.on('scan-ip-range', (event, arg) => __awaiter(this, void 0, void 0, function* () {
        //console.log(arg);        
        const ips = yield Scan_1.default.range(arg, 1, 254);
        event.reply('scan-range-reply', ips);
    }));
    electron_1.ipcMain.on('scan-ip', (event, arg) => __awaiter(this, void 0, void 0, function* () {
        //console.log(arg);        
        const ips = yield Scan_1.default.silgle(arg);
        event.reply('scan-ip-reply', ips);
    }));
    electron_1.ipcMain.on('current-local-ip', (event, arg) => __awaiter(this, void 0, void 0, function* () {
        const current_LocalIp = currentLocalIp_1.currentLocalIp();
        //console.log(current_LocalIp);
        event.reply('current-local-ip-reply', current_LocalIp);
    }));
}
exports.default = scanEvent;
