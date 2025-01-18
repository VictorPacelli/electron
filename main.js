const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    let window = new BrowserWindow({
        width: 500,
        height: 500
    })
    window.loadFile('index.html')
}

app.whenReady().then(() => {
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