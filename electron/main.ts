import { app, BrowserWindow, ipcMain } from 'electron';
import { Message } from './message/message';
import * as path from 'path';
import * as url from 'url';


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
  let processorMessage = new Message(message);
  let response = processorMessage.process();
  response
    .then((data) => event.returnValue = data)
    .catch((err) => console.error(err))
});