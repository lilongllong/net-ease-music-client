const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

let mainWindow;

console.log(app, BrowserWindow);
function createMainBroserWindow()
{
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        center: true,
        fullscreenable: false,
        show: process.env.NODE_ENV === "development",
        useCentersize: true
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "dist/netease-music.html"),
        protocol: "file:",
        slashes: true
    }));
    mainWindow.show();
    mainWindow.on("closed", function() {
        mainWindow = null;
    });
}

console.log(BrowserWindow);

app.on('ready', createMainBroserWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
