"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
function modal(mainWindows, ip) {
    const child = new electron_1.BrowserWindow({ parent: mainWindows, show: false, webPreferences: { devTools: false },
        x: +5,
        y: -5 });
    child.setMenuBarVisibility(false);
    child.loadURL(`http://${ip}`);
    child.on('ready-to-show', () => {
        child.show();
    });
}
exports.default = modal;
