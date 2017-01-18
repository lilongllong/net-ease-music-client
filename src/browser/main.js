const { app, BrowserWindow } = require('electron');
// const url = require('url');
const path = require('path');

let mainWindow;

function createMainBroserWindow()
{
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        minWidth: 1000,
        minHeight: 570,
        center: true,
        fullscreenable: false,
        title: '',
        titleBarStyle: 'hidden',
        icon: path.join(__dirname, '..', '..', 'dist/assets/icons/neteaseMusicLogo.png'),
        show: process.env.NODE_ENV === 'development',
        useCentersize: true
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(path.join('http://localhost:8000', 'netease-music.html'));

    // url.format({
    //     host: 'http://localhost:8000',
    //     pathname: '/netease-music.html',//path.join(__dirname, '..', '..', dist/netease-music.html'),
    //     protocol: 'http:',
    //     slashes: true
    // })
    mainWindow.show();
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

app.on('ready', createMainBroserWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
