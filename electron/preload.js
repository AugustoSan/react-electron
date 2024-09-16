const { contextBridge, ipcRenderer } = require('electron');

const electronHandler = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  getAllClients:() => ipcRenderer.invoke('clients:GetAllClients', []),
  // we can also expose variables, not just functions
};

contextBridge.exposeInMainWorld('electronAPI', electronHandler);