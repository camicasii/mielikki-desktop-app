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
exports.getDeviceFullData = exports.getDeviceSingle = void 0;
const Bosminer_1 = __importDefault(require("./Bosminer"));
const Deviceshandle_1 = __importDefault(require("./Deviceshandle"));
function getDeviceSingle(ip) {
    const commands = [
        "temps",
        "pools",
        //"devs",
        "summary",
        //"config",
        //"devdetails",
        //"asccount",
        "fans",
    ];
    return new Promise((rel, rej) => __awaiter(this, void 0, void 0, function* () {
        let properties = {};
        try {
            for (let command of commands) {
                let data;
                if (command == "temps")
                    data = yield Deviceshandle_1.default.simpleTemps(command, ip);
                if (command == "pools")
                    data = yield Deviceshandle_1.default.simplePools(command, ip);
                if (command == "summary")
                    data = yield Deviceshandle_1.default.simpleSummary(command, ip);
                if (command == "fans")
                    data = yield Deviceshandle_1.default.simpleFans(command, ip);
                //@ts-ignore
                properties[command] = data;
            }
        }
        catch (_a) {
            rel({ error: true });
            //rej("devide not found");
        }
        //@ts-ignore
        properties["error"] = false;
        rel(properties);
    }));
}
exports.getDeviceSingle = getDeviceSingle;
function getDeviceFullData(ip) {
    const commands = [
        "temps",
        "pools",
        //"devs",
        "summary",
        //"config",
        //"devdetails",
        //"asccount",
        "fans",
    ];
    return new Promise((rel, rej) => __awaiter(this, void 0, void 0, function* () {
        let properties = {};
        for (let command of commands) {
            try {
                const get = new Bosminer_1.default(ip);
                //@ts-ignore
                const fulData = (yield get.run(`{"command":"${command}"}`))[command.toUpperCase()];
                //@ts-ignore
                properties[command] = fulData;
            }
            catch (_a) {
                //rej("devide not found");
                rej(false);
            }
        }
        rel(properties);
    }));
}
exports.getDeviceFullData = getDeviceFullData;
function getDevicesMulti(ips) {
    return new Promise((rel, rej) => __awaiter(this, void 0, void 0, function* () {
        let devices = {};
        //@ts-ignore
        for (const ip of ips) {
            try {
                const device = yield getDeviceSingle(ip);
                //@ts-ignore
                devices[ip] = device;
            }
            catch (e) {
                //@ts-ignore
                devices[ip] = { error: true, message: "device not found" };
            }
        }
        rel(devices);
    }));
}
exports.default = getDevicesMulti;
