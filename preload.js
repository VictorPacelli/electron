const {contextBridge, ipcRenderer} = require('electron')

// contextBridge é a api responsavel por expor funcionalidades do processo principal (Node) para o processo de renderização


//exposeInMainWorld é o método que expõe os dados 
contextBridge.exposeInMainWorld('versions',
    {
        node: () => process.versions.node,
        chrome: () => process.versions.chrome,
        electron: () => process.versions.electron,
        ping: (param,param2)=> ipcRenderer.invoke('ping',param,param2)
    }
)