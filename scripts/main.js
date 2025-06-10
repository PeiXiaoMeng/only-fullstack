const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
 
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // 根据 Electron 版本调整，新版可能需要启用 contextIsolation 并使用 preload script
    },
  });
 
  // 加载 Next.js 应用的 URL (通常是 http://localhost:3000)
  // mainWindow.loadURL(url.format({
  //   pathname: path.join('http://localhost:3001'), // 根据你的构建目录调整路径
  //   protocol: 'file:',
  //   slashes: true,
  // }));
  setTimeout(() => {
    mainWindow.loadURL('http://localhost:3001');
  }, 3000);
 
  // 打开开发者工具
  // mainWindow.webContents.openDevTools();
}
 
app.whenReady().then(createWindow);
 
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
 
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});