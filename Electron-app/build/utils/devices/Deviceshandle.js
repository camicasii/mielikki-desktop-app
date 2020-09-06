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
const Bosminer_1 = __importDefault(require("./Bosminer"));
class Deviceshandle {
    static simpleTemps(command, ip) {
        return new Promise((rel, rej) => __awaiter(this, void 0, void 0, function* () {
            try {
                //@ts-ignore
                const data = (yield (new Bosminer_1.default(ip)).run(`{"command":"${command}"}`))[command.toUpperCase()];
                rel(data);
            }
            catch (_a) {
                rej("");
            }
        }));
    }
    static simpleFans(command, ip) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //@ts-ignore
                const data = (yield new Bosminer_1.default(ip).run(`{"command":"${command}"}`))[command.toUpperCase()];
                return data;
            }
            catch (_a) {
                return "";
            }
        });
    }
    static simpleSummary(command, ip) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //@ts-ignore
                const [data] = (yield new Bosminer_1.default(ip).run(`{"command":"${command}"}`))[command.toUpperCase()];
                return {
                    //@ts-ignore
                    "MHS 1m": data["MHS 1m"],
                };
            }
            catch (_a) {
                return "";
            }
        });
    }
    static simplePools(command, ip) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //@ts-ignore
                const data = (yield new Bosminer_1.default(ip).run(`{"command":"${command}"}`))[command.toUpperCase()];
                //@ts-ignore
                return data.map((poolData) => {
                    const [data] = Object.keys(poolData).map((key) => {
                        if ("Stratum Active" == key)
                            return {
                                "Stratum Active": poolData["Stratum Active"],
                                Status: poolData["Status"],
                            };
                    }).filter(x => x !== undefined);
                    return data;
                });
            }
            catch (_a) {
                return "";
            }
        });
    }
}
exports.default = Deviceshandle;
