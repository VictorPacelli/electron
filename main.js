const { app, BrowserWindow,ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
    let window = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js')
        }
    })
    window.webContents.openDevTools()
    window.loadFile('index.html')
}

// o preload executa o script fornecido antes da renderização da tela, tornando o que foi exposto utilizavel 

app.whenReady().then(() => {
    ipcMain.handle('ping', (event,param,param2) => param + param2)
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})