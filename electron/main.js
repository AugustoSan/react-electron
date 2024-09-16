const { app, BrowserWindow, ipcMain } = require('electron/main');
const path = require('node:path');
const { handleGetAllClients } = require('./handles/user.handle');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL('http://localhost:3000');
  mainWindow.on('closed', () => (mainWindow = null));
}

// Clientes
ipcMain.handle('clients:GetAllClients', handleGetAllClients);
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
