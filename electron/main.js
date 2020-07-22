const { app, BrowserWindow, ipcMain } = require('electron');

const clientMongoDB = require('./services/mongodb/mongodb');

let win;

function createWndow() {
    win = new BrowserWindow({
        width: 600,
        heigth: 600,
        backgroundColor: '#ffffff'
    });

    win.loadURL(`file://${__dirname}/../dist/bas-pdv/index.html`);

    win.webContents.openDevTools();

    win.on('cloed', function() {
        win = null;
    });
}

app.on('ready', createWndow);

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if (win === null) {
        createWndow();
    }
});

ipcMain.on('test', function() {
    console.log('test called');
    console.log(clientMongoDB);
});