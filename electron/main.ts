import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
import {Product} from './models/product';


let win: BrowserWindow;

app.on('ready', createWindow);

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
      );
      
      win.webContents.openDevTools()
    
      win.on('closed', () => {
        win = null
      })
}

/**
 * Products
 */
ipcMain.on('message', (event, message) => {
  let productModel = new Product;
  productModel.all();
});