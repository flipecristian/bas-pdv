import { app, BrowserWindow, ipcMain } from 'electron';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow;

app.on('ready', createWindow)

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });

    console.log(__dirname);
    win.loadURL(
        url.format({
          pathname: path.join(__dirname, `/../../dist/bas-pdv/index.html`),
          protocol: 'file:',
          slashes: true,
        })
      )
    
      win.webContents.openDevTools()
    
      win.on('closed', () => {
        win = null
      })
}

ipcMain.on('getFiles', (event, arg) => {
  const files = fs.readdirSync(__dirname);
  win.webContents.send('getFilesResponse', files);
});

/**
 * Products
 */
ipcMain.on('getProduct', (event, arg) => {
  
});