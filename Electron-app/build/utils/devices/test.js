"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDevices_1 = require("./getDevices");
getDevices_1.getDeviceSingle('192.168.0.30').then(x => {
    console.log(x);
});
