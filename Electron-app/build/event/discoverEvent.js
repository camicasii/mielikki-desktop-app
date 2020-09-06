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
const getDevices_1 = __importDefault(require("../utils/devices/getDevices"));
function discoverEvent() {
    //console.log('discoverEvent init')      
    electron_1.ipcMain.on('discover-subnet', (event, arg) => __awaiter(this, void 0, void 0, function* () {
    }));
    electron_1.ipcMain.on('discover-range', (event, arg) => __awaiter(this, void 0, void 0, function* () {
        //      console.log(arg);        
        const ips = yield getDevices_1.default(arg);
        event.reply('discover-range-reply', ips);
    }));
    electron_1.ipcMain.on('discover-ip', (event, arg) => __awaiter(this, void 0, void 0, function* () {
        //    console.log(arg);
        const ips = yield getDevices_1.default(arg);
        event.reply('discover-ip-reply', ips);
    }));
    electron_1.ipcMain.on('discover-all', (event, arg) => __awaiter(this, void 0, void 0, function* () {
        try {
            const ips = yield getDevices_1.default(arg);
            event.reply('discover-all-reply', ips);
        }
        catch (_a) {
            event.reply('discover-all-reply', {});
        }
    }));
}
exports.default = discoverEvent;
