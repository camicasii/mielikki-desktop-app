"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = require("path");
function modalDeveloper(mainWindows) {
    const child = new electron_1.BrowserWindow({ parent: mainWindows, show: false, webPreferences: { devTools: false, nodeIntegration: true },
        icon: electron_1.nativeImage.createFromPath(path_1.join(__dirname, '../resource/icon.png')),
        width: 400,
        height: 500
    });
    child.setMenuBarVisibility(false);
    child.loadFile(path_1.join(__dirname, '../views/developer.html'));
    child.on('ready-to-show', () => {
        child.show();
    });
}
exports.default = modalDeveloper;
